import React from 'react';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { startOfToday } from 'dayjs';
import dayjs from 'dayjs';
import {
    Rating, Button, Card, Chip,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Select, Option, Alert
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function App() {
    const [checkin_date, setCheckin_date] = useState('');
    const [checkinDate, setCheckinDate] = useState(null);
    const [reservedDates, setReservedDates] = useState([]);
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState([]);

    const [fullPayment, setFullPayment] = useState(0)
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    const [ticket, setTicket] = useState([]);

    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");

    const roomId = decodeURIComponent(splitURL[6]);
    const hotelId = decodeURIComponent(splitURL[5]);
    const room_Id = decodeURIComponent(splitURL[5]);
    const agentid = decodeURIComponent(splitURL[5]);
    const eventid = decodeURIComponent(splitURL[6]);
    const event_id = decodeURIComponent(splitURL[5]);
    const event_Id = decodeURIComponent(splitURL[5]);


    const calculateFullPayment = (count) => {
        // Replace this logic with your actual full payment calculation
        // Assuming ticketPrice is the price of a single ticket
        const ticketPrice = ticket.length > 0 ? ticket[0].ticket_price : 0;
        return count * ticketPrice;
    };

    // Update full payment when count changes
    useEffect(() => {
        const newFullPayment = calculateFullPayment(count);
        setFullPayment(newFullPayment);
    }, [count, ticket]);



    useEffect(() => {
        const fetchReservedDates = async () => {
            // Make an API call to fetch the reserved dates for this room
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/traveler/checkBookingAvailability/${event_Id}`);
                // const reservedDatesResponse = response.data;
                // Assuming the response is an array of reserved dates, update the state
                setReservedDates(response.data);
                // console.log('Reserved Dates Response:', response.data);

            } catch (error) {
                console.error('Error fetching reserved dates:', error);
            }
        };
        fetchReservedDates();
    }, []);


    const isDateReserved = (date) => {
        // Format the date as a string to match your reserved dates format
        const formattedDate = date.format('YYYY-MM-DD'); // Adjust the format as needed

        // Check if the formatted date is in your list of reserved dates
        return reservedDates.includes(formattedDate);
    };
   
    useEffect(() => {
        const loadTicket = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/activity/${agentid}/${eventid}`)
                setTicket(result.data);

            } catch (error) {
                console.error('Error fetching ticket details:', error);
            }
        };
        loadTicket();
    }, [agentid, eventid]);

    

    useEffect(() => {
        const loadCounts = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/ticketCount/${event_id}`)
                setCounts(result.data);


            } catch (error) {
                console.error('Error fetching count:', error);
            }
        };
        loadCounts();
    }, [event_id]);

   



    const checkinDateString = dayjs(checkin_date).format('YYYY-MM-DD');
    const userID = decodeURIComponent(splitURL[5]);
    const agentId = decodeURIComponent(splitURL[6]);
    const eventId = decodeURIComponent(splitURL[7]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!checkin_date) {
            validationErrors.checkin_date = "Check In is required";
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            if (checkin_date) {
                setErrors({});
            }
            if (new Date(checkin_date) < new Date()) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Selected Date should be after today',
                });
                return;
            }
            for (const reservedDate of reservedDates) {
                if (checkinDateString === reservedDate.checkin_date) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Check In date is already reserved',
                    });
                    return;
                }
            }
            // Find the available quantity for the selected date
        const selectedDate = dayjs(checkin_date).format('YYYY-MM-DD');

        for (const count of counts) {
            if (selectedDate === count.date) {
                if(count.sum_TicketCount >=count.ticket_quantity){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No more tickets available for this date',
                });
                return;
            }
        
            }}
        


            if (ticket.length > 0) {
                try {
                    // let fullPayment;
                    // fullPayment = count * ticket.ticket_price;
                    // console.log(fullPayment);

                    // Calculate the full payment based on the current count
                    const calculatedFullPayment = calculateFullPayment(count);

                    await axios.post(
                        `http://localhost:8080/api/v1/traveler/activityBooking/${userID}/${agentId}/${eventId}`, {
                        payment: calculatedFullPayment,
                        price_per_ticket: ticket[0].ticket_price,
                        status: 0,
                        booking_quantity: count,
                        date: checkin_date,

                    }

                    );
                    // console.log(hotels.price);

                    navigate("/traveler/HotelPayment");
                } catch (error) {
                    console.error("Error storing Ticket Booking: ", error);
                }
            }

        }
    };

    const available = () => {
        const selectedDate = dayjs(checkin_date).format('YYYY-MM-DD');
    
        for (const count of counts) {
            if (selectedDate === count.date) {
                if (count.sum_TicketCount >= count.ticket_quantity) {
                    return <h1 className='text-red -mt-3 mb-5'>Sorry, No more Tickets</h1>;
                } else {
                    return <h1 className='text-black -mt-3 mb-5'>available Ticket Count: {count.ticket_quantity - count.sum_TicketCount} </h1>;
                }
            }
        }
    
        return null; // Return null if no information is available for the selected date
    };

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };





    return (

        <div className="flex h-screen overflow-hidden">
            <Sidebar active="Dashboard" />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
                <TopNavbar />
                <div className='overflow-y-auto' >
                    <div className='sm:flex flex-wrap justify-center '>

                        <Card color="transparent" shadow={false} className='mt-10 w-1/3 h-screen'>
                            <Typography variant="h4" color="blue-gray">
                                Book Now
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Nice to meet you! Enter these details for Ticket Booking.
                            </Typography>
                            <form className="mt-8 mb-2 max-w-screen-lg  " onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <div className=''>
                                        <div className=''>


                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker
                                                        label="Select Date"
                                                        value={checkin_date}
                                                        onChange={(value) => setCheckin_date(value)}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>


                                    </div>

                                    <div>
                                        <h1>
                                            {available()}
                                        </h1>
                                        <h2>Counter:{count} </h2>
                                        <Button className='bg-gray-500 text-black mx-2' onClick={decrement}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </Button>
                                        <Button className='bg-gray-500 text-black mx-2' onClick={increment}>
                                            <FontAwesomeIcon icon={faPlus} /> {/* Change to faPlus */}
                                        </Button>
                                    </div>
                                    {fullPayment !== null && (
                                        <p className='mt-5'>Full Payment: Rs. {fullPayment}</p>
                                    )}
                                   


                                    {/* </div> */}

                                </div>


                                <Button className="mt-6 bg-green"
                                    //  onClick={()=>handleBookings(booking)} 
                                    type='submit'
                                    fullWidth
                                    disabled={!checkin_date || count === 0}>
                                    Book Now
                                </Button>


                            </form>
                        </Card>
                    </div>

                </div>



            </div>
        </div>
    );

}
export default App;
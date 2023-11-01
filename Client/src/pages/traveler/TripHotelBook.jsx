import React from 'react';
import Grid from '../../components/web-component/Grid';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import Datepicker from "react-tailwindcss-datepicker";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Swal from 'sweetalert2';

import {
    Rating, Button, Card, Chip,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Select, Option
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function App() {
    const [boardType, setBoardType] = useState('');
    const [checkin_date, setCheckin_date] = useState('');
    const [checkout_date, setCheckout_date] = useState('');
    const [checkinDate, setCheckinDate] = useState(null);
    const [reservedDates, setReservedDates] = useState([]);

    const [fullPayment, setFullPayment] = useState('')
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    const [hotels, setHotels] = useState([]);

    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");

    const roomId = decodeURIComponent(splitURL[6]);
    const hotelId = decodeURIComponent(splitURL[5]);

    const room_Id = decodeURIComponent(splitURL[5]);
    


    useEffect(() => {
        const fetchReservedDates = async () => {
            // Make an API call to fetch the reserved dates for this room
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/traveler/checkAvailability/${room_Id}/${boardType}`);
                console.log(response.data);
                // Assuming the response is an array of reserved dates, update the state
                setReservedDates(response.data);
            } catch (error) {
                console.error('Error fetching reserved dates:', error);
            }
        };
    
        fetchReservedDates();
    }, []);
    console.log(reservedDates);

    useEffect(() => {
        const loadHotels = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/hotels/${hotelId}/${roomId}`)
                setHotels(result.data);

            } catch (error) {
                console.error('Error fetching hotel details:', error);
            }
        };
        loadHotels();
    }, [hotelId, roomId]);


    const user_ID = decodeURIComponent(splitURL[5]);
    const trip_ID = decodeURIComponent(splitURL[6]);
    const room_ID2 = decodeURIComponent(splitURL[8]);
    const hotel_ID = decodeURIComponent(splitURL[7]);

    const handleBoardTypeChange = (value) => {
        setBoardType(value);

        // Calculate the fullPayment based on the selected board type and hotels data
        if (value === 'FullBoard') {
            setFullPayment(hotels[0].price); // Replace with the actual data
        } if (value === 'HalfBoard') {
            setFullPayment(Math.floor((2 * hotels[0].price) / 3)); // Replace with the actual data
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};


        if (!boardType) {
            validationErrors.boardType = "Board Type is required";
        }
        if (!checkin_date) {
            validationErrors.checkin_date = "Check In is required";
        }
        if (!checkout_date) {
            validationErrors.checkout_date = "Check Out is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            if (checkin_date > checkout_date) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Check Out date should be after Check In date',
                });
                return;
            }
            if (new Date(checkin_date) < new Date()) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Check In date should be after today',
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
           

            if (hotels.length > 0) {
                try {
                    let fullPayment;

                    if (boardType === "FullBoard") {
                        fullPayment = hotels[0].price;
                    } if (boardType === "HalfBoard") {
                        fullPayment = Math.floor((2 * hotels[0].price) / 3);
                    }
                  
                    await axios.post(
                        `http://localhost:8080/api/v1/traveler/tripHotelBooking/${user_ID}/${trip_ID}/${hotel_ID}/${room_ID2}`, {
                        boardType : boardType,
                        payment : fullPayment,
                        status : 0,
                        checkin_date : checkin_date,
                        checkout_date : checkout_date,

                    }

                    );
                    // console.log(hotels.price);

                    navigate("/traveler/HotelPayment");
                } catch (error) {
                    console.error("Error storing boardType: ", error);
                }
            }

        }
    };

    const checkin = () => {
        if (checkout_date) {
            if (checkin_date > checkout_date) {

                return <h1 className='text-red mt-5 mb-5'>Check Out date should be after Check In date</h1>


            }
        }
        if (new Date(checkin_date) < new Date()) {
            return <h1 className='text-red mt-5 mb-5'>Check In date should be after today</h1>

        }
        for (const reservedDate of reservedDates) {
            if (checkinDateString === reservedDate.checkin_date) {

                return <h1 className='text-red mt-5 mb-5'>Check In date is already reserved</h1>


            }
        }
    }



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
                                Nice to meet you! Enter your details for Booking.
                            </Typography>
                            <form className="mt-8 mb-2 max-w-screen-lg  " onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <div className=''>
                                        <div className=''>


                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                                    <DatePicker
                                                        label="Check-in Date"
                                                        value={checkin_date}
                                                        onChange={(value) => setCheckin_date(value)}

                                                        // disabled={(date) => reservedDates.includes(date.format('DD/MM/YYYY'))}
                                                    />
                                                    <DatePicker
                                                        label="Check-out Date"
                                                        value={checkout_date}
                                                        onChange={(value) => setCheckout_date(value)}
                                                        // disabled={(date) => reservedDates.includes(date.format('DD/MM/YYYY'))}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>


                                    </div>


                                    <div className="w-72">
                                        {errors.boardType && (
                                            <p className="text-red-500">{errors.boardType}</p>
                                        )}
                                        <Select
                                            label="Select Board Type"
                                            className='h-12 '
                                            value={boardType}
                                            onChange={(value) => {
                                                setBoardType(value);
                                                handleBoardTypeChange(value); // Call the handleBoardTypeChange function here
                                            }}

                                        >

                                            <Option value="FullBoard">Full Board</Option>
                                            <Option value="HalfBoard">Half Board</Option>

                                        </Select>
                                        <h1>{checkin()}</h1>
                                        {fullPayment !== null && (
                                            <p className='mt-5'>Full Payment: Rs. {fullPayment}</p>
                                        )}


                                    </div>

                                </div>


                                <Button className="mt-6 bg-green"
                                    //  onClick={()=>handleBookings(booking)} 
                                    type='submit'
                                    fullWidth
                                    disabled={!checkin_date || !checkout_date}>
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
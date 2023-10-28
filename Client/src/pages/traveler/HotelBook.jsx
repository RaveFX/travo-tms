import React from 'react';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
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
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    // const [hotels, setHotels] = useState([]);


    // useEffect(() => {
    //     const loadHotels = async () => {
    //         try {
    //             const result = await axios.get(`http://localhost:8080/api/v1/traveler/hotels/${hotelId}/${roomId}`)
    //             setHotels(result.data);
    //         } catch (error) {
    //             console.error('Error fetching hotel details:', error);
    //         }
    //     };
    //     loadHotels();
    // }, [hotelId, roomId]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!boardType) {
            validationErrors.boardType = "boardType is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                // if (boardType === "Full Board") {

                //     hotels.price= 2;
                // } if (boardType === "Half Board") {
                //     hotels.price= 3;
                // }
                await axios.post(
                    `http://localhost:8080/api/v1/traveler/hotelBooking/${userId}/${hotelId}/${roomId}`, {
                    boardType: boardType,
                }

                );

                navigate("/traveler/HotelPayment");
            } catch (error) {
                console.error("Error storing boardType: ", error);
            }
        }
    };

    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const userId = decodeURIComponent(splitURL[5]);
    const roomId = decodeURIComponent(splitURL[7]);
    const hotelId = decodeURIComponent(splitURL[6]);
    console.log("Type: ", hotelId);

    const handleBookings = async (booking) => {
        try {

            // Make a POST request to your backend API endpoint to store the attraction details
            await axios.post(`http://localhost:8080/api/v1/traveler/hotelBooking/${userId}/${hotelId}/${roomId}`, {
                boardType: booking.boardType,
                user_id: userId,
                hotel_id: hotelId,
                room_id: roomId
            });

            // Handle success, e.g., show a success message to the user
            console.log("Attraction added successfully!");
            // Display a success message using SweetAlert2
        } catch (error) {
            // Handle error, e.g., show an error message to the user
            console.error("Error adding attraction: ", error);
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
                                Nice to meet you! Enter your details for Booking.
                            </Typography>
                            <form className="mt-8 mb-2 max-w-screen-lg  " onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-1 flex flex-col gap-6">
                                    <div className=''>
                                        <div className=''>
                                            {/* <Typography variant="h6" color="blue-gray" className="">
                                                Check-in / Check-out Date
                                            </Typography>

                                            <Datepicker

                                                value={value}
                                                onChange={handleValueChange}
                                                color="green"

                                            /> */}
                                        </div>


                                    </div>
                                    <Typography variant="h6" color="blue-gray" className="-mb-6">
                                        Board Type
                                    </Typography>

                                    <div className="w-72">
                                        {errors.boardType && (
                                            <p className="text-red-500">{errors.boardType}</p>
                                        )}
                                        <Select
                                            label="Select Board Type"
                                            value={boardType}
                                            onChange={(value) => setBoardType(value)}>
                                            <Option value="Full Board">Full Board</Option>
                                            <Option value="Half Board">Half Board</Option>

                                        </Select>

                                    </div>

                                </div>


                                <Button className="mt-6 bg-green"
                                    //  onClick={()=>handleBookings(booking)} 
                                    type='submit'
                                    fullWidth>
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
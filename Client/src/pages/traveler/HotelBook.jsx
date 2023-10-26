import React from 'react';
import Grid from '../../components/web-component/Grid';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import Datepicker from "react-tailwindcss-datepicker";
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
import { Link } from 'react-router-dom';

function App() {
    const [types, setTypes] = useState([]);

    const [value, setValue] = useState({

        startDate: new Date(),
        endDate: new Date().setMonth(11)

    });

    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const hotelId = decodeURIComponent(splitURL[5]);
    console.log("Type: ", hotelId);
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);

    }

    useEffect(() => {
        const loadTypes = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/hoteltypes/${hotelId}`)
                setTypes(result.data);
            } catch (error) {
                console.error('Error fetching hotel Types:', error);
            }
        };
        loadTypes();
    }, [hotelId]);
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
                            <form className="mt-8 mb-2 max-w-screen-lg ">
                                <div className="mb-1 flex flex-col gap-6">
                                    <div className=''>
                                        <div className=''>
                                            <Typography variant="h6" color="blue-gray" className="">
                                                Check-in / Check-out Date
                                            </Typography>

                                            <Datepicker

                                                value={value}
                                                onChange={handleValueChange}
                                                color="green"

                                            />
                                        </div>


                                    </div>
                                    <Typography variant="h6" color="blue-gray" className="-mb-6">
                                        Board Type
                                    </Typography>

                                    <div className="w-72">
                                        <Select label="Select Board Type">
                                            <Option>Full Board</Option>
                                            <Option>Half Board</Option>

                                        </Select>
                                    </div>

                                </div>

                                <Link to={`/traveler/HotelPayment`}>
                                    <Button className="mt-6 bg-green" fullWidth>
                                        Book Now
                                    </Button>
                                </Link>

                            </form>
                        </Card>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default App;
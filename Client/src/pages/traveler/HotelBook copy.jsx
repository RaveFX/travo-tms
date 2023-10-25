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

                        <Card color="transparent" shadow={false} className='mt-10'>
                            <Typography variant="h4" color="blue-gray">
                                Book Now
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Nice to meet you! Enter your details for Booking.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <div className='flex flex-row'>
                                        <div className=''>
                                            <Typography variant="h6" color="blue-gray" className="">
                                                Check-in Date
                                            </Typography>
                                            {/* <Input
                                                size="lg"
                                                placeholder="mm/dd/yyyy"
                                                className="w-1/2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            /> */}
                                            <Datepicker 

value={value} 
onChange={handleValueChange} 

/> 
                                        </div>
                                        <div className=''>
                                            <Typography variant="h6" color="blue-gray" className="">
                                                Check-in Time
                                            </Typography>
                                            <Input
                                                size="lg"
                                                placeholder="mm/dd/yyyy"
                                                className="w-1/2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                        </div>

                                    </div>
                                    <div className='flex flex-row'>
                                        <div className=''>
                                            <Typography variant="h6" color="blue-gray" className="">
                                                Check-out Date
                                            </Typography>
                                            <Input
                                                size="lg"
                                                placeholder="mm/dd/yyyy"
                                                className="w-1/2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                        </div>
                                        <div className=''>
                                            <Typography variant="h6" color="blue-gray" className="">
                                                Check-out Time
                                            </Typography>
                                            <Input
                                                size="lg"
                                                placeholder="mm/dd/yyyy"
                                                className="w-1/2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                        </div>

                                    </div>
                                    <Typography variant="h6" color="blue-gray" className="-mb-6">
                                        Board Type
                                    </Typography>
                                    {/* <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    /> */}
                                    <div className="w-72">
                                        <Select label="Select Board Type">
                                            <Option>Full Board</Option>
                                            <Option>Half Board</Option>
                                           
                                        </Select>
                                    </div>

                                </div>
                               
                                <Button className="mt-6 bg-green" fullWidth>
                                    Book Now
                                </Button>
                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Already have an account?{" "}
                                    <a href="#" className="font-medium text-gray-900">
                                        Sign In
                                    </a>
                                </Typography>
                            </form>
                        </Card>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default App;
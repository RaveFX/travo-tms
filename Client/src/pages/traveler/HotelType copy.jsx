import React from 'react';
import Grid from '../../components/web-component/Grid';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import {
    Rating, Button, Card, Chip,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
    const [types, setTypes] = useState([]);

    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const hotelId = decodeURIComponent(splitURL[5]);
    console.log("Type: ", hotelId)

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

                    <div className=" sm:flex flex-wrap justify-center ">
                        {/* {
                     types.map((type) => (
                           <h1> {type.room_name}</h1>
                    ))
                    } */}
                        {
                            types.map((type) => (
                                <Link to={`/traveler/HotelPageMore/${hotelId}/${type.room_id}`}>
                                    <Card className="sm:m-5 m-2 sm:w-40 w-20 sm:h-24 h-20 justify-center items-center cursor-pointer hover:bg-green hover:scale-125 duration-300 delay-100">
                                        <CardBody className="sm:w-40 w-36">
                                            <Typography variant="h5" className="text-center text-xs ">
                                                <h1> {type.room_name}</h1>
                                            </Typography>


                                        </CardBody>

                                    </Card>
                                </Link>
                            ))
                        }
                    </div>
                </div>



            </div>
        </div>
    );
}

export default App;
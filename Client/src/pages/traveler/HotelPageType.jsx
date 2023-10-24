import React from 'react';
import Grid from '../../components/web-component/Grid';
import Sidebar from '../../components/web-component/Sidebar';
// import Headers from '../../components/web-component/Headers';
import TopNavbar from '../../components/web-component/Navbar';
import {
    Rating, Button, Card,Chip,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function App() {
return (

    <div className="flex h-screen overflow-hidden">
        <Sidebar active="Dashboard" />
        <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
            <TopNavbar />
            <div className='overflow-y-auto' >

                <div className=" sm:flex flex-wrap justify-center ">
                    {hotels.map((hotel) => {

                        return <GridImage name={hotel.hotel_name} photos={photos} description={hotel.description}
                            wifi={hotel.wifi} lunch={hotel.lunch} dinner={hotel.dinner} breakfast={hotel.breakfast} ac={hotel.ac} room={hotel.view} />;

                    })}
                </div>
            </div>



        </div>
    </div>
);
}

export default App;
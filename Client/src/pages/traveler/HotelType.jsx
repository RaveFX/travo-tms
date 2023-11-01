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
    const [hotel, setHotel] = useState([]);
    const [rooms, setTypes] = useState([]);

    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const user_id = decodeURIComponent(splitURL[5]);
    const hotelId = decodeURIComponent(splitURL[6]);
    console.log("Type: ", hotelId)


    useEffect(() => {
        const loadTypes = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/hoteltypes/${hotelId}`)
                const hotel = await axios.get(`http://localhost:8080/api/v1/traveler/hotels/${hotelId}`)
                setTypes(result.data);
                setHotel(hotel.data);
                // console.log(result.data);
                // console.log(result.data.hotel_name);

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
                    {
                        hotel.map((hotel) => (
                            <div className="relative w-full h-80 sm:flex sm:flex-wrap ">
                                {/* ? <div style={{   }}> */}
                                <div style={{ height: '95%', width: '100%', backgroundImage:`url(/main/${hotel.hotel_img})`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                                    <div style={{ width: "40%", textAlign: 'center' }}>
                                        <h1 style={{ fontSize: '40px' }} className="font-bold font-poppins text-black pb-3">{hotel.hotel_name}</h1>
                                        <h1 className="font-poppins text-black pb-3">{hotel.hotel_description}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {/* </div> */}

                    <div style={{ marginTop: '', marginLeft: '30px' }}>
                        <h1 className=' font-poppins font-extrabold  mb-5 text-[#2C2738]'>Rooms</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                            {
                                rooms.map((rooms) => (
                                    <Link to={`/traveler/HotelPageMore/${user_id}/${hotelId}/${rooms.room_id}`}>
                                        <div style={{ width: '90%' }} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
                                            <img
                                                src={`/main/${rooms.room_image}`}
                                                className="w-full h-40 object-cover"
                                            />
                                            <div className="p-4">

                                                <h2 className="text-xl font-semibold">{rooms.room_name}</h2>
                                                <p className="text-gray-500 text-sm">Description:{rooms.room_description}</p>
                                                <p className="text-gray-500">{rooms.description}</p>
                                                {/* <span className="text-sm font-bold text-gray-500">
                                                    Rs.{rooms.price}                                                 </span> */}

                                            </div>
                                        </div>

                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
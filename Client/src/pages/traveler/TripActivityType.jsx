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
    const [events, setTypes] = useState([]);
    const [count, setCount] = useState([]);
    const [agent, setAgent] = useState([]);

    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const user_id = decodeURIComponent(splitURL[5]);
    const activityId = decodeURIComponent(splitURL[7]);
    const agentId = decodeURIComponent(splitURL[5]);
    const tripId = decodeURIComponent(splitURL[6]);
    
    // console.log("Type: ", hotelId)


    useEffect(() => {
        const loadTypes = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/eventList/${activityId}`)
                setTypes(result.data);


            } catch (error) {
                console.error('Error fetching hotel Types:', error);
            }
        };
        loadTypes();
    }, [activityId]);

    useEffect(() => {
        const loadAgent = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/traveler/agentList/${agentId}`)
                setAgent(result.data);


            } catch (error) {
                console.error('Error fetching Type:', error);
            }
        };
        loadAgent();
    }, [agentId]);

    

    // const ticket_count=count.quantity;
    // console.log("Count: ", ticket_count);
    return (

        <div className="flex h-screen overflow-hidden">
            <Sidebar active="My Trips" />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
                <TopNavbar />
                <div className='overflow-y-auto' >
                    {
                                agent.map((agent) => (
                        <div className="relative w-full h-96 sm:flex sm:flex-wrap ">
                                {/* ? <div style={{   }}> */}
                                <div style={{ height: '95%', width: '100%', backgroundImage: "url('https://www.srilankacolombohotels.com/data/Pics/OriginalPhoto/7075/707577/707577091/pic-galadari-hotel-colombo-1.JPEG')", display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                                    <div style={{ width: "40%", textAlign: 'center' }}>
                                        <h1 style={{ fontSize: '40px' }} className="font-bold font-poppins text-white pb-3">{agent.company_name}</h1>
                                        <h1 className="font-poppins text-white pb-3">{agent.description}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {/* </div> */}

                    <div style={{ marginTop: '', marginLeft: '30px' }}>
                        <h1 className=' font-poppins font-extrabold  mb-5 text-[#2C2738]'>Activities</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                            {
                                events.map((event) => (
                                    // <Link to={`/traveler/HotelPageMore/${user_id}/${hotelId}/${rooms.room_id}`}>
                                    <div style={{ width: '90%' }} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
                                        {/* <img
                                                src='https://cdn1.goibibo.com/voy_ing/t_fs/abd3c6ae798711eab6bd0242ac110002.jpg'
                                                className="w-full h-40 object-cover"
                                            /> */}
                                        <div className="p-4 flex flex-col">
                                            <div>
                                                <h2 className="text-xl font-semibold">{event.event_name}</h2>
                                                <p className="text-gray-500 text-sm my-2">Description:{event.event_description}</p>
                                                {event.start_time < "12:00:00" ? (
                                                    <p className="text-gray-600 text-sm my-1">Start Time: {event.start_time} a.m</p>
                                                ) : (
                                                    <p className="text-gray-600 text-sm my-1">Start Time: {event.start_time} p.m</p>
                                                )}
                                                {event.end_time < "12:00:00" ? (
                                                    <p className="text-gray-600 text-sm my-1">End Time: {event.end_time} a.m</p>
                                                ) : (
                                                    <p className="text-gray-600 text-sm my-1">End Time: {event.end_time} p.m</p>
                                                )}
                                                <p className="text-gray-800 text-sm my-1">Every {event.event_date}</p>


                                                <p className="text-gray-800 text-sm my-1">Ticket Price: Rs.{event.ticket_price}</p>
                                                {/* <p className="text-gray-800 text-sm my-1">Available Quantity: {event.ticket_quantity - event.quantity} </p> */}
                                            </div>
                                            <div className="items-center my-2">
                                                <Link to={`/traveler/TripTicketBook/${user_id}/${tripId}/${activityId}/${event.event_id}`}>
                                                <Button className="bg-green w-30">Ticket Booking</Button></Link>
                                            </div>

                                        </div>
                                    </div>

                                    // </Link>
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
import { Carousel, IconButton } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/Travel_guide/sidebar1';

import TopNavbar from '../../components/Travel_guide/topNavbar';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const requestMore = () => {
    const [requests, setRequest] = useState([]);
    useEffect(() => {
        loadRequest();
    }, []);

    const loadRequest = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/guide/requests`)
        setRequest(result.data);
    }

    const slides = [

        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg",
        "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg",

    ]
    const topnav = [
        { path: "/travel_guide_profile" }
    ]
    return (
        <div className='flex'>
            <div className=''><Sidebar /></div>
            <div className='h-screen flex flex-grow flex-col'>

                <div>

                    {topnav.map((nav, index) => (
                        <TopNavbar key={index} path={nav.path} />
                    ))}
                </div>

                {requests.map((request) => (
                    <div className=''>
                        <div><p className='text-3xl m-5'>Tour: {request.destination}</p></div>
                        <div><p className='text-xl m-5'>Request ID: {request.hire_Id}</p></div>
                        <div className='flex m-5 sm:flex-row flex-col '>
                            <div className='overflow-hidden relative sm:w-1/2 w-full justify-center'>
                                <div className='m-5'>
                                    <p className='text-2xl underline'>Tour Information</p>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Start : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >{request.start_location}</p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Destination : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >{request.destination}</p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>No of Days : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >{request.num_of_days}</p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>No of travelers : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >{request.attendance}</p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Interests and Preferences : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >We need to do adventure things</p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Budget : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' ></p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Special Needs : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' ></p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Must-See Attractions : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' ></p>
                                        </div>
                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Language : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >Sinhala,English</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sm:w-1/2 justify-center'>
                                <div className='bg-back mx-[5vh] p-5 h-3/4 '>
                                    <p className='py-8 text-center text-2xl'>Request Person Information</p>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Full Name : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >Anne Mario</p>
                                        </div>

                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>NIC : </p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >996991768v</p>
                                        </div>

                                    </div>
                                    <div className='flex my-2'>
                                        <div>
                                            <p className='text-black'>Address</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-400 mx-3' >Colombo</p>
                                        </div>

                                    </div>
                                    <button type="button" class="text-centerfocus:outline-none text-white bg-button1 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="/profile">Profile</Link></button>



                                </div>
                                <div className='flex  mt-24 justify-center '>
                                    <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="/request">Accept</Link></button>
                                    <button type="button" class="text-centerfocus:outline-none text-white bg-button1 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default requestMore
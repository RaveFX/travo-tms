import { Carousel, IconButton } from '@material-tailwind/react'
import React from 'react'
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/topNavbar';
import { Link } from 'react-router-dom';
import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const requestMore = () => {
    const slides = [

        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg",
        "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg",

    ]
    const topnav=[
        {path:"/travel_guide_profile"}
    ]
    return (
        <div className='flex'>
            <div className=''><Vehicle_Owner_Sidebar /></div>
            <div className='flex flex-grow flex-col'>
                <div>
                <div>
                    
                    {topnav.map((nav, index) => (
                                <TopNavbar key={index} path={nav.path}  />
                            ))}
                </div>
                </div>
                <div><p className='text-3xl m-5'>Tour To: Kandy</p></div>
                <div><p className='text-lg mx-5'>Request_Id:</p></div>
                <div className='flex m-5 sm:flex-row flex-col '>
                    <div className='overflow-hidden relative sm:w-1/2 w-full justify-center'>
                        {/* <div className='flex'>
                            <Carousel
                                transition={{ duration: 2 }}
                                className='rounded-xl bg-black items-center  '
                            >{slides.map((s) => (
                                <img className='h-fiull w-full object-cover' src={s} />
                            ))}</Carousel>
                        </div> */}
                        <div className='bg-back mx-[5vh] p-5  '>
                        <p className='py-8 text-center text-2xl'>Tour Information</p>
                            <div className='flex my-2'>
                                <div>
                                    <p className='text-black'>Guide Need from : </p>
                                </div>
                                <div>
                                    <p className='text-gray-400 mx-3' >Colombo</p>
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <div>
                                    <p className='text-black'>Destination : </p>
                                </div>
                                <div>
                                    <p className='text-gray-400 mx-3' >Kandy</p>
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <div>
                                    <p className='text-black'>No of Days : </p>
                                </div>
                                <div>
                                    <p className='text-gray-400 mx-3' >2 Days and 3 Nights</p>
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <div>
                                    <p className='text-black'>No of travelers : </p>
                                </div>
                                <div>
                                    <p className='text-gray-400 mx-3' >10</p>
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
        </div >
    )
}

export default requestMore
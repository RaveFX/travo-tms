import { Carousel, IconButton } from '@material-tailwind/react'
import React from 'react'
import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import TopNavbar from './topNavbar';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const requestMore = () => {
    const slides = [
        "../public/16.png",
        "../public/16.png",
        "../public/16.png",
        

    ]
    return (
        <div className='flex'>
            <div className=''><Vehicle_Owner_Sidebar /></div>
            <div className='flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                <div><p className='text-3xl m-5'>Toyota Prius</p></div>
                <div className='flex m-5 sm:flex-row flex-col '>
                    <div className='overflow-hidden relative sm:w-1/2 w-full justify-center'>
                        <div className='flex'>
                            <Carousel
                                transition={{ duration: 2 }}
                                className='rounded-xl bg-gray-200 items-center '
                            >{slides.map((s) => (
                                <img className='h-fiull w-full object-cover' src={s} />
                            ))}</Carousel>
                        </div>
                        <div className='m-5'>
                            <p className='text-2xl underline'>Vehicle Infomation</p>
                            <div className='flex my-2'>
                                <div>
                                    <p className='text-black'>Start : </p>
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
                            <p className='py-8 text-center text-2xl'>Rental</p>
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
                            


                        </div>
                        <div className='flex  mt-24 justify-center '>
                        <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="">Send to Admin</Link></button>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default requestMore
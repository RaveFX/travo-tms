import {
    Carousel, IconButton, Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Button
} from '@material-tailwind/react'
import React from 'react'
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/Vehicle_owner/topNavbar';
import { car, van, bike, scooter, bus } from '../../assets/Vehicle_owner/index/';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';



const requestMore = () => {
    const [vehicles, setVehicles] = useState([]);
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const vehicleId = decodeURIComponent(splitURL[5]);

    useEffect(() => {
        loadVehicles();

    }, []);

    const loadVehicles = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/traveler/vehicle/${vehicleId}`)
        setVehicles(result.data);

    }
    const slides = [
        "https://www.indratraders.lk/wp-content/uploads/2022/03/sss.jpg",
        "https://www.indratraders.lk/wp-content/uploads/2022/03/sss.jpg",
        "https://www.indratraders.lk/wp-content/uploads/2022/03/sss.jpg",


    ]
    const data = [
        {
            label: "Without Driver(1 Day)",
            value: "html",
            desc1: '1-6 days - Rs.1645/-',
            desc2: '7-20 days - Rs.1435/-',
            desc3: '20-29 days - Rs.1122/-',
            desc4: '30 days - Rs.845/-',
            info: ''
        },
        {
            label: "With Driver",
            value: "react",
            desc1: `1 day with driver - Rs.2394/-`,
            desc2: 'w/driver per hr - Rs.476'
        },

    ]
    return (
        <div className='flex'>
            <div className=''><Sidebar /></div>
            <div className='h-screen flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                {vehicles.map((vehicle) => (
                    <div className='overflow-y-auto'>

                        <div><p className='text-3xl m-5'>{vehicle.vehicle_model}</p></div>
                        <div className='flex m-5 sm:flex-row flex-col '>
                            <div className='overflow-hidden relative sm:w-1/2 w-full justify-center'>
                                <div className='flex'>
                                    <Carousel
                                        prevArrow={({ handlePrev }) => (
                                            <IconButton
                                                variant="text"
                                                color="black"
                                                size="lg"
                                                onClick={handlePrev}
                                                className="!absolute top-2/4 left-4 -translate-y-2/4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                                    />
                                                </svg>
                                            </IconButton>
                                        )}
                                        nextArrow={({ handleNext }) => (
                                            <IconButton
                                                variant="text"
                                                color="black"
                                                size="lg"
                                                onClick={handleNext}
                                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="black"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                    />
                                                </svg>
                                            </IconButton>
                                        )}
                                        transition={{ duration: 2 }}
                                        className='rounded-xl items-center '
                                    >{slides.map((s) => (
                                        <img className='h-fiull w-full object-cover' src={s} />
                                    ))}</Carousel>
                                </div>

                            </div>
                            <div className='sm:w-1/2 justify-center '>
                                <div className='bg-back mx-[5vh] p-5 sm:h-3/4 h-full'>

                                    <div className='m-5'>
                                        <p className='text-2xl underline'>Vehicle Infomation</p>
                                        {/* <div className='flex my-2'>
                                            <div>
                                                <p className='text-black'>Modal : </p>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 mx-3' >{vehicle.vehicle_model}</p>
                                            </div>
                                        </div> */}

                                        <div className='flex my-2'>
                                            <div>
                                                <p className='text-black'>Type : </p>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 mx-3' >{vehicle.vehicle_type}</p>
                                            </div>
                                        </div>
                                        <div className='flex my-2'>
                                            <div>
                                                <p className='text-black'>Licence Plate : </p>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 mx-3' >{vehicle.licence_plate}</p>
                                            </div>
                                        </div>
                                        <div className='flex my-2'>
                                            <div>
                                                <p className='text-black'>No of Pasengers : </p>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 mx-3' >{vehicle.passengers}</p>
                                            </div>
                                        </div>

                                        <div className='flex my-2'>
                                            <div>
                                                <p className='text-black'>Space : </p>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 mx-3' >Large Bag:{vehicle.large_bag},Small Bag:{vehicle.small_bag}</p>
                                            </div>
                                        </div>
                                        <div className='flex my-2'>
                                            <div>
                                                <p className='text-black'>Location : </p>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 mx-3' >{vehicle.location}</p>
                                            </div>
                                        </div>
                                        <p className='text-xl mt-5'>Other Facilities</p>
                                        <div className='flex my-5'>
                                            <ul className="list-disc ml-10">
                                                {vehicle.wifi && <li>Wi-Fi available</li>}
                                                {vehicle.sunroof && <li>Sunroof available</li>}
                                                {vehicle.bluetooth && <li>Blutooth available</li>}
                                                {vehicle.air_conditioning && <li>Air Conditioning available</li>}
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='m-9'>

                                    <a href={`tel:${vehicle.contact_num}`} variant="gradient" className="flex flex-row rounded-full bg-green p-2 text-white w-40 " color="green">
                                        <img src='../../../public/traveler/phone.png' className='w-6 mx-2'/>{vehicle.contact_num}</a>
                                        
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
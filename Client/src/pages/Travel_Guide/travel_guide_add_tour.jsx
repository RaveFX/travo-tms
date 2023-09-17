import React, { useEffect, useState }  from "react";
import Sidebar from '../../components/Travel_guide/sidebar1';

import TopNavbar from '../../components/Travel_guide/topNavbar';
import { Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";


function travel_guide_add_tour() {
    const [tours,setTours]=useState([]);
    useEffect(() => {
        loadTour();
    },[]); 

    const loadTour=async()=>{
        // const result=await axios.get(`http://localhost:8080/api/v1/guide/requests/${user_id}`)
        setTours(result.data);
    }
    return (
        <div className='flex'>
            <div><Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                <div className="mb-5 overflow-y-auto">
                    <div className="w-full bg-white px-10">

                        <h1 tabIndex={0} role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12 ">
                            Add New Tour Here
                        </h1>
                        <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
                            Fill in the data for add new tour. <br />
                        </p>
                        <div className="flex">
                            <h2 role="heading" aria-label="enter Personal data" className="text-xl w-1/2 font-semibold leading-7 text-gray-800 mt-10">
                                Tour Details
                            </h2>
                            <h2 role="heading" aria-label="enter Personal data" className="text-xl w-1/2 font-semibold leading-7 text-gray-800 mt-10">
                                Features
                            </h2>
                        </div>
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="mt-8 md:flex items-center">
                                    <div className="flex flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Model</label>
                                        <input type="name" tabIndex={0} aria-label="Enter first name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                                    </div>
                                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Type of Vehicle</label>
                                        <div className="w-64 bg-gray-100 text-sm border rounded border-gray-200">
                                            <Select label="" >
                                                <Option> Car</Option>
                                                <Option> Van</Option>
                                                <Option> Bus</Option>
                                                <Option> Scooter</Option>
                                                <Option> Motor Bike</Option>
                                            </Select>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-12 md:flex items-center">
                                    <div className="flex flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">License Plate</label>
                                        <input type tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="mt-8 md:flex items-center ">
                                    <div className="flex flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Passengers</label>
                                        <input type="name" tabIndex={0} aria-label="Enter first name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                                    </div>
                                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Air conditioning</label>

                                        <div className=" flex items-center">
                                            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700  flex flex-shrink-0 justify-center items-center relative">
                                                <input type="checkbox" tabIndex={0} aria-label="Yes" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="bg-whiteborder rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div className="check-icon hidden bg-green text-white rounded-sm">
                                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm leading-none mx-2 ">
                                                Yes
                                            </p>
                                            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700  flex flex-shrink-0 justify-center items-center relative">
                                                <input type="checkbox" tabIndex={0} aria-label="Yes" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div className="check-icon hidden bg-green text-white rounded-sm">
                                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm leading-none ml-2">
                                                No
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 md:flex items-center">
                                    <div className="flex flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Additional Features</label>
                                        <div className=" flex items-center">
                                            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700  flex flex-shrink-0 justify-center items-center relative">
                                                <input type="checkbox" tabIndex={0} aria-label="Yes" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="bg-whiteborder rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div className="check-icon hidden bg-green text-white rounded-sm">
                                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm leading-none mx-2 ">
                                                Bluetooth
                                            </p>
                                            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700  flex flex-shrink-0 justify-center items-center relative">
                                                <input type="checkbox" tabIndex={0} aria-label="Yes" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div className="check-icon hidden bg-green text-white rounded-sm">
                                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm leading-none mx-2">
                                                Sunroof
                                            </p>
                                            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700  flex flex-shrink-0 justify-center items-center relative">
                                                <input type="checkbox" tabIndex={0} aria-label="Yes" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div className="check-icon hidden bg-green text-white rounded-sm">
                                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm leading-none ml-2">
                                                Wifi
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="flex">
                            <h2 role="heading" aria-label="enter Personal data" className="text-xl w-1/2 font-semibold leading-7 text-gray-800 mt-10">
                                Other Details
                            </h2>
                            {/* <h2 role="heading" aria-label="enter Personal data" className="text-xl w-1/2 font-semibold leading-7 text-gray-800 mt-10">
                                Owner's Info
                            </h2> */}
                        </div>
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="mt-8 md:flex items-center ">
                                    <div className="flex flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Rental</label>
                                        <input type="name" tabIndex={0} aria-label="Enter first name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                                    </div>
                                    <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Location</label>
                                        <input type="name" tabIndex={0} aria-label="Enter last name" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                                    </div>
                                </div>
                                <div className="mt-12 md:flex items-center">
                                    <div className="flex flex-col">
                                        <label className="mb-3 text-sm leading-none text-gray-800">Image</label>
                                        <input type="email" tabIndex={0} aria-label="Enter email Address" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
                                    </div>

                                </div>

                            </div>
                           
                        </div>

                        <div className="mt-12">
                            <div className="py-4 flex items-center">
                                <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" tabIndex={0} aria-label="I agree with the terms of service" defaultChecked className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div className="check-icon hidden bg-green text-white rounded-sm">
                                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm leading-none ml-2">
                                    I agree with the <span className="text-green">terms of service</span>
                                </p>
                            </div>
                        </div>
                        <button role="button" aria-label="Next step" className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                            <span className="text-sm font-medium text-center text-gray-800 capitalize"><Link to="/vehicle_owner_add_preview">Next</Link></span>
                            <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                            </svg>
                        </button>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      " }} />
                </div>
            </div>
        </div>
    );
}

export default travel_guide_add_tour;

import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/Travel_guide/sidebar1';

import TopNavbar from '../../components/Travel_guide/topNavbar';
import { Link } from 'react-router-dom';
import { TicketIcon } from '@heroicons/react/24/outline';

const topnav=[
    {path:"/travel_guide_profile"}
]

const Confirmed = () => {
    const [requests,setRequest]=useState([]);
    
    useEffect(() => {
        loadRequest();
    },[]); 

    const loadRequest=async()=>{
        const result=await axios.get(`http://localhost:8080/api/v1/guide/confirmed`)
        setRequest(result.data);
    }
    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='flex flex-grow flex-col'>
                <div>
                <div>
                    
                    {topnav.map((nav, index) => (
                                <TopNavbar key={index} path={nav.path}  />
                            ))}
                </div>
                </div>
                <div>
                    <div className='py-8 bg-primary'>
                        <div className='flex mx-auto container'>
                            <div className='w-3/4'>
                                <p className='text-2xl text-dimBlack'>Confirmed Requests</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            {/* <div className="mx-auto container bg-black dark:bg-white shadow rounded"> */}
                               
                                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                                    <table className="min-w-full bg-white dark:bg-whiye ">
                                        <thead>
                                            <tr className="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 ">
                                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal ">
                                                </th>

                                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-24 text-sm tracking-normal ">Customer</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Contact</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Trip To</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Requested Date</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Attendances</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal "></th>

                                            </tr>
                                        </thead>
                                        {requests.filter((request) => request.status === 'CONFIRM').map((request)=> (
                                        <tbody>
                                            <tr className="h-20 border-gray-300 dark:border-gray-200 border-b hover:bg-gray-200 cursor-pointer">
                                                <td className="text-center whitespace-no-wrap text-sm text-gray-600 dark:text-gray-400 tracking-normal ">
                                                </td>

                                                <td className="text-center  items-center  whitespace-no-wrap">
                                                    <div className="flex">
                                                        <div className="h-8 w-8">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">{request.fname}</p>
                                                       
                                                    </div>
                                                </td>
                                       
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">{request.emergency_contact}</td>
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal">{request.destination}</td>
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal">{request.start_date}</td>
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal">{request.attendance}</td>
                                            

                                               
                                            </tr>

                                           
                                            
                                            
                                        </tbody>
                                        ))}
                                    </table>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmed
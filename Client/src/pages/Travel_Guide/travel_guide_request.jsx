
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/Travel_guide/sidebar1';

import TopNavbar from '../../components/Travel_guide/topNavbar';
import { Link } from 'react-router-dom';



const request = () => {
    const [requests,setRequest]=useState([]);
    const [requestList, setRequestList] = useState();
    
    const user_id = sessionStorage.getItem('user_id');
    const handleConfirm = async (hireId) => {
        try {
            // Send a PUT request to update the user's status
            await axios.put(`http://localhost:8080/api/v1/guide/update-status/${hireId}/CONFIRM`);

            // After successfully updating the status, update the local state
            const updatedList = requestList.map((request) =>
                request.hire_id === hireId ? { ...request, status: 'CONFIRM' } : request
            );
            setRequestList(updatedList);
        } catch (error) {
            // Handle any errors, e.g., display an error message
            console.error('Error updating user status:', error);
        }
    };

    useEffect(() => {
        loadRequest();
    },[]); 

    const loadRequest=async()=>{
        const result=await axios.get(`http://localhost:8080/api/v1/guide/requests/${user_id}`)
        setRequest(result.data);
    }
    const topnav=[
        {path:"/travel_guide_profile"}
    ]
    return (
        <div className='flex'>
            <div className=''><Sidebar /></div>
            <div className='h-screen flex flex-grow flex-col '>
                <div className=''>
                <div>
                    
                    {topnav.map((nav, index) => (
                                <TopNavbar key={index} path={nav.path}  />
                            ))}
                </div>
                </div>
                <div className='overflow-y-auto  flex-grow ml-1/3 '>
                    <div className='py-8 bg-primary'>
                        <div className='flex mx-auto container'>
                            <div className='w-3/4'>
                                <p className='text-2xl text-dimBlack'>Requests</p>
                            </div>
                            <div className=''>
                                <button type="button" class="text-centerfocus:outline-none text-white bg-green hover:bg-black focus:ring-4 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="/travel_guide_confirmed">Confirmed Requests</Link></button>
                            </div>

                        </div>

                        <div className='py-5 '>
                            <div className="w-full overflow-y-auto mx-auto container bg-black dark:bg-white shadow rounded">
                                <div className="w-full xs:overflow-x-scroll xl:overflow-x-hidden">
                                {/* {requests.filter((request) => request.status === 'PENDING').map((request)=> ( */}
                                    <table className="min-w-full bg-white dark:bg-whiye ">
                                        <thead>
                                            <tr className="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 ">
                                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal ">
                                                </th>

                                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-24 text-sm tracking-normal ">Customer</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Contact</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Trip To</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Trip Date</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Attendances</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal "></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        {requests.filter((request) => request.status === 'PENDING').map((request)=> (
                                            
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
                                                <td className="text-center text-xl  whitespace-no-wrap text-black dark:text-black tracking-normal underline"><Link className='rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700' to="/travel_guide_requestMore">More</Link></td>
                                            

                                                <td className=" justify-center">
                                                    <button  onClick={() => handleConfirm(request.hire_Id)}
                                                    type="button" class="text-centerfocus:outline-none text-white bg-button1 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Confirm</button>
                                                </td>
                                                <td className=" ">
                                                    <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>
                                                </td>
                                            </tr>
                                            
                                        )) } 
                                        </tbody>
                                    </table>
                                {/* ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default request
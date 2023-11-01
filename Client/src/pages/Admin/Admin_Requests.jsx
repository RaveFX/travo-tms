
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';


export default function Admin_Requests() {
    const [usersinfo, setUsersinfo] = useState([]);
    const [userList, setUserList] = useState(usersinfo);

    const handleConfirm = async (userId) => {
        try {
            // Send a PUT request to update the user's status
            await axios.put(`http://localhost:8080/api/v1/user/update-status/${userId}/ACTIVE`);

            // After successfully updating the status, update the local state
            const updatedList = userList.map((user) =>
                user.user_id === userId ? { ...user, status: 'ACTIVE' } : user
            );
            setUserList(updatedList);
        } catch (error) {
            // Handle any errors, e.g., display an error message
            console.error('Error updating user status:', error);
        }
    };

    const handleReject = async (userId) => {
        try {
            // Send a PUT request to update the user's status
            await axios.put(`http://localhost:8080/api/v1/user/update-status/${userId}/DELETED`);

            // After successfully updating the status, update the local state
            const updatedList = userList.map((user) =>
                user.user_id === userId ? { ...user, status: 'ACTIVE' } : user
            );
            setUserList(updatedList);
        } catch (error) {
            // Handle any errors, e.g., display an error message
            console.error('Error updating user status:', error);
        }
    };


    useEffect(() => {
        loadUsersinfo();
    }, []);

    const loadUsersinfo = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/user/pending/information")
        setUsersinfo(result.data);
    }

    return (

        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div className="bg-white p-8 rounded-md w-full">


                        <div className="flex items-center justify-between pb-6">
                            <div>
                                <h2 className="text-gray-600 font-semibold">Registration Requests</h2>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex bg-gray-50 items-center p-2 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                    <input className="bg-gray-50 outline-none ml-1 block" type="text" name="" id="" placeholder="search..." />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    User type
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Requested at
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    email
                                                </th>
                                                {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th> */}
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                usersinfo.map((userInfo) => (
                                                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                        <td className="text-center items-center whitespace-no-wrap">
                                                            <div className="flex">
                                                                <div className="h-8 w-8 ml-5">
                                                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt="" className="h-full w-full rounded-full overflow-hidden shadow" />
                                                                </div>
                                                                <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal text-sm">{userInfo.user_id}</p>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{userInfo.service_provider}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{userInfo.registration_date}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{userInfo.email}</td>
                                                        <td className="justify-center">
                                                            {
                                                                userInfo.service_provider === 'vehicle_renter' &&
                                                                <Link to={`/vehicle_renter_info/${userInfo.user_id}`}>
                                                                    <button type="button" className="text-center focus:outline-none text-white bg-button1 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Details</button>
                                                                </Link>
                                                            }
                                                            {
                                                                userInfo.service_provider === 'hotel_agent' &&
                                                                <Link to={`/hotel_agent_info/${userInfo.user_id}`}>
                                                                    <button type="button" className="text-center focus:outline-none text-white bg-button1 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Details</button>
                                                                </Link>
                                                            }
                                                            {
                                                                userInfo.service_provider === 'activity_agent' &&
                                                                <Link to={`/activity_agent_info/${userInfo.user_id}`}>
                                                                    <button type="button" className="text-center focus:outline-none text-white bg-button1 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Details</button>
                                                                </Link>
                                                            }
                                                            {
                                                                userInfo.service_provider === 'guide' &&
                                                                <Link to={`/guide_info/${userInfo.user_id}`}>
                                                                    <button type="button" className="text-center focus:outline-none text-white bg-button1 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Details</button>
                                                                </Link>
                                                            }
                                                            {
                                                                userInfo.service_provider === 'store_manager' &&
                                                                <Link to={`/store_manager_info/${userInfo.user_id}`}>
                                                                    <button type="button" className="text-center focus:outline-none text-white #FF5C5C rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Details</button>
                                                                </Link>
                                                            }
                                                            {/* Add more condition blocks for other service providers */}
                                                        </td>
                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    );
};










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
        const result = await axios.get("http://localhost:8080/api/v1/user/information")
        setUsersinfo(result.data);
    }

    return (

        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div className="bg-white p-8 rounded-md w-full">
                        <div className=''>
                            <button type="button" class="text-centerfocus:outline-none text-white bg-green focus:ring-4 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="/travel_guide_confirmed">Confirmed Requests</Link></button>
                        </div>

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
                                                usersinfo.filter((userInfo) => userInfo.status === 'PENDING').map((usersinfo) => (
                                                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                        <td className=" text-center  items-center  whitespace-no-wrap">
                                                            <div className="flex">
                                                                <div className="h-8 w-8 ml-5">
                                                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                                </div>
                                                                <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">{usersinfo.user_id}</p>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{usersinfo.role}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{usersinfo.registration_date}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{usersinfo.email}</td>


                                                        <td className=" ">
                                                            <button
                                                                onClick={() => handleConfirm(usersinfo.user_id)}
                                                                class="text-centerfocus:outline-none text-white bg-button1 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                            >
                                                                Confirm
                                                            </button>
                                                        </td>
                                                        <td className=" ">
                                                            <button onClick={() => handleReject(usersinfo.user_id)}
                                                                type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                                Reject
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }


                                            <tr>
                                                <td class="px-5 py-5 bg-white text-sm">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            <img class="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                                alt="" />
                                                        </div>
                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                Alonzo Cox
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">Hotel Agent</p>
                                                </td>
                                                <td class="px-5 py-5 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                                </td>
                                                <td class="px-5 py-5 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">ravindu@gmail.com</p>
                                                </td>

                                                <td className=" ">
                                                    <button
                                                        onClick={() => handleConfirm(userInfo.user_id)} // Pass the user ID
                                                        className="text-centerfocus:outline-none text-white bg-button1 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                    >
                                                        Confirm
                                                    </button>
                                                </td>
                                                <td className=" ">
                                                    <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                        <span className="text-xs xs:text-sm text-gray-900">
                                            Showing 1 to 4 of 50 Entries
                                        </span>
                                        <div className="inline-flex mt-2 xs:mt-0">
                                            <button className="text-sm text-indigo-50 transition duration-150 bg-green font-semibold py-2 px-4 rounded-l">
                                                Prev
                                            </button>
                                            &nbsp; &nbsp;
                                            <button className="text-sm text-indigo-50 transition duration-150 bg-green font-semibold py-2 px-4 rounded-r">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    );
};









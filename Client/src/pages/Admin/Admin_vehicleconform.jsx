
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';

export default function Admin_requestcomformpage() {
    const [usersinfo, setUsersinfo] = useState([]);
    const [userList, setUserList] = useState(usersinfo);

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const userID = pathParts[2];

    console.log(userID);

    const handleConfirm = async (userID) => {
        try {
            // Send a PUT request to update the user's status
            await axios.put(`http://localhost:8080/api/v1/user/update-status-verenter/${userID}/ACTIVE`);

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
            await axios.put(`http://localhost:8080/api/v1/user/update-status-verenter/${userId}/REJECT`);

            // After successfully updating the status, update the local state
            const updatedList = userList.map((user) =>
                user.user_id === userId ? { ...user, status: 'REJECT' } : user
            );
            setUserList(updatedList);
        } catch (error) {
            // Handle any errors, e.g., display an error message
            console.error('Error updating user status:', error);
        }
    };

    useEffect(() => {
        const loadUserInfo = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/user/information/${userID}`);
                setUsersinfo(result.data);

            } catch (error) {
                console.error("Error fetching user information: ", error);
            }
        };
        loadUserInfo();
    }, [userID]);

    return (
        <div>
            <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
                <Sidebar />

                <div>
                    <TopNavbar />
                    <div className="">

                        <div className="">
                            <div className=" ">
                                <h1>Vehicle Renter Register Request</h1>

                                {
                                    usersinfo.map((usersinfo) => (

                                        <div className='flex '>

                                            <div className='gap-4'>
                                                <h1>Business Details</h1>
                                                <div>
                                                    <strong>Renter ID:</strong> {usersinfo.user_id}
                                                </div>
                                                <div>
                                                    <strong>Company Name:</strong> {usersinfo.company_name}
                                                </div>
                                                <div>
                                                    <strong>BRN:</strong> {usersinfo.brn}
                                                </div>
                                                <div>
                                                    <strong>Contact Number:</strong> {usersinfo.contact_num}
                                                </div>
                                                <div>
                                                    <strong>Postal Code:</strong> {usersinfo.postalcode}
                                                </div>
                                                <div>
                                                    <strong>Address:</strong> {usersinfo.addressLine1},{usersinfo.Homagama},{usersinfo.City}
                                                </div>

                                            </div>
                                            <div className='gap-2'>
                                                <h1>personal details</h1>
                                                <div>
                                                    <strong>Renter ID:</strong> {usersinfo.user_id}
                                                </div>
                                                <div>
                                                    <strong>Company Name:</strong> {usersinfo.company_name}
                                                </div>
                                                <div>
                                                    <strong>BRN:</strong> {usersinfo.brn}
                                                </div>
                                                <div>
                                                    <strong>Contact Number:</strong> {usersinfo.contact_num}
                                                </div>
                                                <div>
                                                    <strong>Postal Code:</strong> {usersinfo.postalcode}
                                                </div>
                                                <div>
                                                    <strong>Address:</strong> {usersinfo.addressLine1},{usersinfo.Homagama},{usersinfo.City}
                                                </div>

                                            </div>

                                        </div>


                                    ))
                                }
                            </div>
                            <div>
                                <Link to={``}>
                                    <button
                                        type="button"
                                        className="text-center focus:outline-none text-white bg-button1 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        onClick={() => handleConfirm(userID)}
                                    >
                                        Accept
                                    </button>
                                </Link>
                                <Link to={``}>
                                    <button
                                        type="button"
                                        className="text-center focus:outline-none text-white bg-button1 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        onClick={() => handleReject(userID)}
                                    >
                                        Reject
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>'



                    '
                </div>
            </div>
        </div>


    )
}


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';

export default function Admin_requestcomformpage() {
    const [usersinfo, setUsersinfo] = useState([]);
    const [userList, setUserList] = useState(usersinfo);
    const [personalInfo, setPersonalinfo] = useState(usersinfo);


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
                const result = await axios.get(`http://localhost:8080/api/v1/user/information-hotel/${userID}`);
                setUsersinfo(result.data);

            } catch (error) {
                console.error("Error fetching user information: ", error);
            }
        };
        loadUserInfo();
    }, [userID]);

    useEffect(() => {
        const loadPersonalInfo = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/user/userpersonalinfo/${userID}`);
                setPersonalinfo(result.data);

            } catch (error) {
                console.error("Error fetching user information: ", error);
            }
        };
        loadPersonalInfo();
    }, [userID]);

    return (
        <div className="flex h-screen ">
            <Sidebar active="Reservations" />
            <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
                <TopNavbar />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%' }}>

                    <div style={{ width: '100%', backgroundColor: '#FAFAFA', borderRadius: '10px' }}>
                        <h1 className='ml-10 font-poppins font-extrabold mt-4 mx-5 text-[#2C2738]'>Hotels </h1>
                        <div style={{ backgroundColor: 'white', height: '40%', borderRadius: '10px', marginTop: '20px', width: '90%', marginLeft: '20px' }}>
                            <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-extrabold  ml-5 text-[#2C2738] text-sm'>Business Details : </h1>


                            {
                                usersinfo.map((usersinfo) => (
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>


                                        <div key={usersinfo.id} style={{ width: '50%' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Registration ID : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{usersinfo.user_id}</h1>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Company Name : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{usersinfo.acc_name}</h1>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'> Brn: </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{usersinfo.brn}</h1>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Contact No : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{usersinfo.contact_num}</h1>
                                            </div>
                                        </div>
                                        <div style={{ width: '50%' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Room count : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'></h1>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Address : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'></h1>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'> Note: </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{usersinfo.hotel_description}</h1>
                                            </div>

                                        </div>

                                    </div>))}
                        </div>

                        <div style={{ display: 'flex flex-row', backgroundColor: 'white', height: '40%', borderRadius: '10px', marginTop: '20px', width: '50%', marginLeft: '20px' }}>
                            {
                                personalInfo.map((x) => (
                                    <div style={{ display: 'flex flex-col', backgroundColor: 'white', height: '40%', borderRadius: '10px', marginTop: '20px', width: '50%', marginLeft: '20px' }}>
                                        <div>

                                            <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-extrabold mt-4 mx-5 text-[#2C2738] text-sm'>Personal Details : </h1>
                                            <div className="border-b border-gray-900/10 pb-4"></div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Full Name : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{x.fname} {x.lname}</h1>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Registration date : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{x.registration_date}</h1>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Email : </h1>
                                                <h1 style={{ paddingTop: '20px' }} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>{x.email}</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ position: 'relative', height: '100px' }}>
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
                                                        className="text-center focus:outline-none  bg-gray-300 text-[#FF5C5C] rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                        onClick={() => handleReject(userID)}
                                                    >
                                                        Reject
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}




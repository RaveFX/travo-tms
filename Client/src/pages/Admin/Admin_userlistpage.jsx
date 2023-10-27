import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserTable({ userData, hotelData, activeTab, guideData, activityData, vehicleData }) {

    let dataToDisplay;

    if (activeTab === "hotelAgent") {
        dataToDisplay = hotelData;
    } else if (activeTab === "guide") {
        dataToDisplay = guideData;
    } else {
        dataToDisplay = userData;
    }
    return (
        <div>
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500 text-[#B7BBB8]">
                    <tr>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Registration date</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                        <th scope="col" className="px-6 py-4">Contact number</th>
                        <th scope="col" className="px-6 py-4"> </th>
                    </tr>
                </thead>
                <tbody>
                    {dataToDisplay.map((user) => (
                        <tr
                            key={user.id}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                            <td
                                className=" text-center  items-center  whitespace-no-wrap"

                            >
                                <div className="flex">
                                    <div className="h-8 w-8 ml-5">
                                        <img
                                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png"
                                            alt
                                            className="h-full w-full rounded-full overflow-hidden shadow"
                                        />
                                    </div>
                                    <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">
                                        {user.fname} {user.lname}
                                    </p>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">{user.registration_date}</td>
                            <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                            <td className="whitespace-nowrap px-6 py-4">{user.nmb}</td>
                            <td class="justify-center">
                                <Link to={`/admin_userprofile/${user.id}`}>
                                    <button type="button" class="text-center focus:outline-none text-white bg-button1 transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More Info..</button>
                                </Link>

                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>
        </div>
    );
}

export default function Admin_userlistpage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("guide"); // Initialize with "guide"

    const handleTabClick = (role) => {
        setActiveTab(role);
    };
    const [usersinfo, setUsersinfo] = useState([]);

    useEffect(() => {
        loadUsersinfo();
    }, []);

    const loadUsersinfo = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/user/information");
            const userData = response.data.map((userInfo) => ({
                id: userInfo.user_id,
                fname: userInfo.fname,
                lname: userInfo.lname,
                registration_date: userInfo.registration_date,
                email: userInfo.email,
                nmb: userInfo.contact_num,
            }));
            setUsersinfo(userData);
        } catch (error) {
            console.error("Error loading user information:", error);
        }

    };




    const [hotelinfo, setHotelinfo] = useState([]);

    useEffect(() => {
        loadHotelinfo();
    }, []);



    const loadHotelinfo = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/hotel/information");
            const hotelData = response.data.map((hotelInfo) => ({
                id: hotelInfo.user_id,
                hotel_id: hotelInfo.hotel_id,
                registration_date: hotelInfo.registration_date,
                email: hotelInfo.email,
                nmb: hotelInfo.contact_num,
            }));
            setHotelinfo(hotelData);
        } catch (error) {
            console.error("Error loading hotel information:", error);
        }
    };






    const data = [
        {
            label: "Traveler",
            value: "traveler",
        },
        {
            label: "Hotel Agent",
            value: "hotelAgent",
        },
        {
            label: "Activity Manager",
            value: "activityManager",
        },
        {
            label: "Vehicle Renter",
            value: "vehicleRenter",
        },
        {
            label: "Guide",
            value: "guide",
        },
        // Add more roles as needed
    ];

    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div>
                    <div className="flex items-center justify-between pb-6 m-3">
                        <div>
                            <h1 className="text-gray-600 font-semibold">Users</h1>
                        </div>
                        <div className="flex bg-gray-50 items-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                            <input className="bg-gray-50 outline-none ml-1 block" type="text" name="" id="" placeholder="search..." />
                        </div>
                    </div>
                    <Tabs value="1" className="max-w-[80 rem] m-8 mb-0 bg-transparent">
                        <TabsHeader
                            className="bg-transparent"
                            indicatorProps={{
                                className:
                                    "bg-[#57CC99] shadow-none rounded-full font-bold",
                            }}
                        >
                            {data.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => handleTabClick(value)}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>

                    {/* Render the user table based on the activeTab */}
                    {/* {activeTab === "traveler" && <UserTable userData={usersinfo} />}
                    {activeTab === "guide" && <UserTable hotelData={hotelinfo} />}
                    {activeTab === "activityManager" && (
                        <UserTable userData={usersinfo} />
                    )} */}


                    {activeTab === "traveler" && <UserTable userData={usersinfo} hotelData={hotelinfo} activeTab={activeTab} guideData={hotelinfo} />}
                    {activeTab === "hotelAgent" && <UserTable userData={usersinfo} hotelData={hotelinfo} activeTab={activeTab} guideData={hotelinfo} />}
                    {activeTab === "activityManager" && <UserTable userData={usersinfo} hotelData={hotelinfo} activeTab={activeTab} guideData={hotelinfo} />}


                </div>
            </div>
        </div>
    );
}

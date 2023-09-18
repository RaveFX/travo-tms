import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/Travel_guide/sidebar1';

import TopNavbar from '../../components/Travel_guide/topNavbar';

import { List, ListItem, Card, Button,Popover,
    PopoverHandler, } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


// import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';


const travel_guide_profile = () => {
    const [information, setInfo] = useState([]);
    const user_id = sessionStorage.getItem('user_id');


    useEffect(() => {
        loadInfo();
    }, []);

    const loadInfo = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/guide/info/${user_id}`)
        setInfo(result.data);
        const userId = result.data.user_id;
    }
    const topnav = [
        { path: "/travel_guide_profile" }
    ]
    const basics = [
        { name: "Natashia Bunny", location: "Nugegoda,Colomco 5", email: "nata123@gamil.com" }
    ]

    return (
        <div className='flex'>
            <div><Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col'>
                <div>

                    {topnav.map((nav, index) => (
                        <TopNavbar key={index} path={nav.path} />
                    ))}
                </div>
                
                <div>
                     {information.map((info) => ( 
                        
                    
                    <div className=" flex flex-wrap   justify-center m-5 ">
                        <div className="container lg:w-1/2 xl:w-full sm:w-full md:w-2/3  bg-white  shadow-lg    transform   duration-200 easy-in-out">
                            <div className=" h-32 overflow-hidden" >
                              
                                <img className="w-full" src="https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg" alt="" />
                            </div>
                            <div className="flex justify-center px-5  -mt-12">
                                <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

                            </div>
                            <div className=" ">
                                <div className="text-center px-14">
                                    <h2 className="text-gray-800 text-3xl font-bold">{info.fname} {info.lname}</h2>
                                    <a className="text-gray-400 mt-2 hover:text-blue-500" href="#" target="BLANK()">{info.email}</a>
                                    <p className="mt-2 text-gray-500 text-sm">{info.city} </p>
                                </div>
                                <hr className="mt-6" />
                                <div className="flex  bg-gray-50 ">
                                    <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                       
                                        <Popover placement="bottom">
                                            <PopoverHandler>
                                                <Link to={`/travel_guide_edit_profile/${user_id}`}>

                                                    <Button className='rounded-full bg-button1'>Edit Profile</Button>
                                                </Link>
                                            </PopoverHandler>

                                        </Popover>
                                    </div>
                                    <div className="border"></div>
                                    <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                        
                                        <Popover placement="bottom">
                                            <PopoverHandler>
                                                <Link to="#">

                                                    <Button className='rounded-full bg-button1'>Upgrade Profile</Button>
                                                </Link>
                                            </PopoverHandler>

                                        </Popover>
                                    </div>
                                    <div className="border"></div>
                                    <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                       
                                        <Popover placement="bottom">
                                            <PopoverHandler>
                                                <Link to="#">

                                                    <Button className='rounded-full bg-button1'>Settings</Button>
                                                </Link>
                                            </PopoverHandler>

                                        </Popover>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default travel_guide_profile
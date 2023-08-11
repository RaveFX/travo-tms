import React from 'react'
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/topNavbar';
import Profile from '../../components/profile';
import { List, ListItem, Card, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';


const travel_guide_profile = () => {
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
                {/* <div className='overflow-y-auto'>
                    {basics.map((basic, index) => (
                        <Profiles key={index} name={basic.name} email={basic.email} location={basic.location} />
                    ))}

                </div> */}
                <Profile/>
            </div>
        </div>
    )
}

export default travel_guide_profile
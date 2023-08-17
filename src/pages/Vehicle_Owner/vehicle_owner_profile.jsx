import React from 'react'
// import Sidebar from '../../components/Vehicle_owner/sidebar';
import TopNavbar from '../../components/Vehicle_owner/topNavbar';
import Profile from '../../components/Vehicle_owner/profile';
// import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar1';


import { List, ListItem, Card, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


// import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';


const vehicle_owner_profile = () => {
    const topnav = [
        { path: "/vehicle_owner_profile" }
    ]
    const basics = [
        { name: "Natashia Bunny", location: "Nugegoda,Colomco 5", email: "nata123@gamil.com" }
    ]
    const edits=[
        {path:"/vehicle_owner_edit_profile"}
    ]
    return (
        <div className='flex'>
            <div><Vehicle_Owner_Sidebar /></div>

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
               <div>
                {edits.map((edit, index) => (
                        <Profile key={index} path={edit.path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default vehicle_owner_profile
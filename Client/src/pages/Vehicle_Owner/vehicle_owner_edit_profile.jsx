import React from 'react'
// import Sidebar from '../../components/sidebar';
import EditProfile from '../../components/Vehicle_owner/edit_profile';
import TopNavbar from '../../components/Vehicle_owner/topNavbar';
// import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar1';


// import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';


const topnav=[
    {path:"/vehicle_owner_profile"}
]
const vehicle_owner_edit_profile = () => {
    return (
        
        <div className='flex'>
            <div><Vehicle_Owner_Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col'>
                <div>

                    {topnav.map((nav, index) => (
                        <TopNavbar key={index} path={nav.path} />
                    ))}
                </div>
                <EditProfile/>
            </div>
        </div>

    )
}

export default vehicle_owner_edit_profile;
import React from 'react'
import Sidebar from '../../components/sidebar';
import EditProfile from '../../components/edit_profile';
import TopNavbar from '../../components/topNavbar';
import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';


const topnav=[
    {path:"/travel_guide_profile"}
]
const travel_guide_edit_profile = () => {
    return (
        
        <div className='flex'>
            <div><Sidebar /></div>

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

export default travel_guide_edit_profile;
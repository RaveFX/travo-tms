import React from 'react'
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import MainActivity from '../traveler/MainActivities';
import { Rating, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';



const travel_guide_mytours = () => {
    
    const topnav=[
        {path:"/travel_guide_profile"}
    ]
    return (
        <div >
            <MainActivity/>
        </div>
    )
}

export default travel_guide_mytours
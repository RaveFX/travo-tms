import React from 'react'
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/topNavbar';
import Profile from '../../components/profile';
import { List, ListItem, Card, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';

const Profiles = ({ name, location, email }) => {
    return (


        <div className=' sm:m-10 sm:flex'>
            <Card className="w-96 h-full shadow-none  ">
                <List className='sm:flex-col flex-row  '>
                    <ListItem>My Profile</ListItem>
                    {/* <ListItem>Setting</ListItem> */}
                    <ListItem>Settings</ListItem>
                </List>
            </Card>
            <div className="flex-col  w-full lg:flex-row sm:p-5 p-2 ">
                <div className="grid flex-grow h-32 card bg-base-300 border-black-200 border-2 rounded-xl mb-5 ">
                    <div className='flex'>

                        <img src={people01} alt="people01" className='justify-start w-[100px] h-[100px] my-2 mx-10 ' />
                        <div className='w-1/2 my-5 text-center  '>
                            <p className='text-xl text-black '>{name}</p>
                            <p className='text-sm text-black'>{email}</p>
                            <p className='text-black'>{location}</p>
                        </div>
                        
                    </div>


                </div>
                <div className="grid flex-grow h-32 card bg-base-300 border-black-200 border-2 rounded-xl">
                <div className='flex'>
                    <p className='text-2xl'>Personal Infomation</p>
                    <div className='w-1/3 my-5  '>
                        <p className='text-xl text-green '>{name}</p>
                        <p className='text-sm text-green'>{email}</p>
                        <p className='text-green'>{location}</p>
                    </div>
                    <div className='my-10 mx-8'>
                        <button type="button" class="text-green bg-gray-300 hover:bg-black rounded-full  focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="/vehicle_owner_dashboard">EDIT</Link></button>

                    </div>
                </div>
                </div>
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
        </div>

    )

}


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
                <div className='overflow-y-auto'>
                    {basics.map((basic, index) => (
                        <Profiles key={index} name={basic.name} email={basic.email} location={basic.location} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default travel_guide_profile
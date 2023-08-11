import { useState } from 'react';
import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';
import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import ListWithAvatar from '../../components/list';
import TopNavbar from '../../components/topNavbar';
import Calendar from '../../components/calender';
import TourCard from '../../components/tour_card';
import RateCard from '../../components/rate_card';
import ConversationSection from '../../components/conversation';
import RequestMore from '../../components/requestMore';
import { Link } from 'react-router-dom';
import { Rating, Button } from "@material-tailwind/react";

// import { rating } from '@material-tailwind/react';

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        msg: 'Hey , I need more information.........',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        msg: 'can you please.........',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        msg: 'when will you arrive to.........',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        msg: 'Hey ,can u please.........',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

]

// Top Section Component
const TopSection = () => {
    return (
        <div className=' flex flex-row '>
            <img src={people01} alt="people01" className='justify-start w-[60px] h-[60px]' />
            <div className=' mx-2 mr-[8vh]'>
                <p className='text-3xl '>Hi,Stela!</p>
                <p className=''>Travel Guide</p>
            </div>
        </div>
    );
};

// Dashboard Card Component
const DashboardCard = ({ title, src, amount }) => {
    return (
        <div className="card bg-base-100 shadow-xl sm:w-36 w-16 sm:h-24 h-16 bg-green1 hover:bg-white mt-4  mr-1.5 rounded-lg my-1 sm:ml-5">
            <figure>
                <img src={src} alt={title} className='mx-[8vh] mt-2 sm:w-8 w-5' />
            </figure>
            <div className="card-body mt-1 text-sm items-center justify-center w-full">
                <p className='text-center'>{title}</p>
                <p className='text-center font-bold'>{amount}</p>
            </div>
        </div>
    );
};



const DashboardTG = () => {
    const dashs = [
        { title: "Client", src: customer, amount: "128" },
        { title: "Complete", src: star, amount: "40" },
        { title: "Ratings", src: star, amount: "25" },
        { title: "Request", src: request, amount: "95" },
        { title: "Income", src: invitation, amount: "LKR.55" },
    ];
    const tours = [
        { image: "../public/19.png", name: "Suzuki Wagon R", des: "LKR2500" },
        { image: "../public/16.png", name: "Toyota Priu", des: "LKR2500" },
        { image: "../public/17.png", name: "Suzuki Alto ", des: "LKR2500" },

    ];
    const rates = [
        { image: "../public/15.png", name: "Nissan", rate: "Rs.1500/Per Km" },
        { image: "../public/16.png", name: "Toyota Prius", rate: "Rs.800/Per Km" },
    ]


    return (
        <div className='flex'>
            <div><Vehicle_Owner_Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                <div className='overflow-y-auto flex-1'>
                    {/* <RequestMore/> */}

                    <div className=" flex sm:flex-row  xl:flex-row  flex-col  items-start justify-start">
                        {/* Top Section (Upper Left Corner) */}
                        <div className='ml-10 mt-2'>
                            <TopSection />
                        </div>

                        {/* Dashboard Cards (Upper Middle Section) */}
                        <div className='flex  mr-12'>

                            {dashs.map((dash, index) => (
                                <DashboardCard key={index} title={dash.title} src={dash.src} amount={dash.amount} />
                            ))}
                        </div>


                    </div>
                    <div className='flex'>
                        <div className='my-6 mx-4 w-1/2'>

                        <div className='flex   flex-row text-dimBlack relative '>
                                <p className='w-3/4 text-3xl ' >Request</p>
                                <Button variant="text" className=" text-xs pt-5 text-button1 text-center"><Link to='/travel_guide_request'>see more </Link></Button>
                            </div>
                            <div className='flex flex-wrap relative  '>
                                {/* List */}
                               <ListWithAvatar/>
                               

                            </div>
                            

                           
                                <div className='mt-4 mb-1 flex flex-row text-dimBlack relative   '>
                                    <p className='w-3/4 text-2xl ' >My Rates</p>
                                    <Button variant="text" className=" text-xs pt-5 text-button1 text-center"><Link to="/travel_guide_myrates">see more </Link></Button>

                                </div>
                                <div className='sm:flex flex-row relative ' >
                                    {rates.map((rate, index) => (
                                        <RateCard key={index} image={rate.image} name={rate.name} rate={rate.rate} />
                                    ))}
                                </div>
                           
                        </div>
                        <div className='my-2 '>
                            {/* Calendar (Upper Right Corner) */}
                            <div className='flex sm:flex-row   justify-center '>
                                <Calendar />
                            </div>
                            {/* My Tours Cards */}

                            <div className='flex   flex-row text-dimBlack relative '>
                                <p className='w-3/4 text-2xl ' >My Vehicles</p>
                                <Button variant="text" className=" text-xs pt-3 text-button1 text-center"><Link to='/vehicle_owner_vehicles'>see more </Link></Button>
                            </div>
                            <div className='flex flex-wrap relative  '>
                                {/* Tour Cards */}
                                {tours.map((tour, index) => (
                                    <TourCard key={index} image={tour.image} name={tour.name} des={tour.des} />
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTG;

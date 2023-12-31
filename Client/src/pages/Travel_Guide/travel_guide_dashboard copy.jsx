import { useState } from 'react';
import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../../assets';
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/Travel_guide/topNavbar';
import Calendar from '../../components/Travel_guide/calender';
import TourCard from '../../components/Travel_guide/tour_card';
import RateCard from '../../components/Travel_guide/rate_card';
import ConversationSection from '../../components/Travel_guide/conversation';


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
        <div className="card bg-base-100 shadow-xl sm:w-20 w-16 sm:h-20 h-16 bg-green1 hover:bg-white mt-4  mr-1.5 rounded-lg my-1 sm:ml-5">
            <figure>
                <img src={src} alt={title} className='mx-[3.5vh] mt-2 sm:w-8 w-5' />
            </figure>
            <div className="card-body mt-1 text-xs items-center justify-center w-full">
                <p className='text-center'>{title}</p>
                <p className='text-center'>{amount}</p>
            </div>
        </div>
    );
};



const DashboardTG = () => {
    const dashs = [
        { title: "Client", src: customer, amount: "128" },
        { title: "Complete", src: star, amount: "40" },
        { title: "Invitations", src: invitation, amount: "55" },
        { title: "Ratings", src: star, amount: "25" },
        { title: "Request", src: request, amount: "95" },
    ];
    const tours = [
        { image: "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg", name: "Kandy: Temples, Gardens & Cultural Show City", des: "DAY TRIP" },
        { image: "https://tse3.mm.bing.net/th?id=OIP.JJ_h16-xl50fgUHR9LkZIAHaE8&pid=Api&P=0&h=220", name: "Matara /Mirissa /Thalpe /Temple", des: "DAY TRIP" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.MOUnGlhdLu1Betuwu1OaxQHaHa&pid=Api&P=0&h=220", name: "Galle /Fort /Weligama /Unawatuna ", des: "2 DAYS TRIP" },

    ];
    const rates = [
        { image: "https://tse3.mm.bing.net/th?id=OIP.sIAE0l361OTU8yKgV8IE-gHaEK&pid=Api&P=0&h=220", name: "Kandy", rate: "Rs.1500/Per Day" },
        { image: "https://tse1.mm.bing.net/th?id=OIP.CfQds65sJmXZq9mM5kvn8wHaEg&pid=Api&P=0&h=220", name: "Matara", rate: "Rs.800/Per Day" },
    ]


    return (
        <div className='flex'>
            <div><Sidebar /></div>

            <div className='h-screen flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                <div className='overflow-y-auto flex-1'>
                    {/* <RequestMore/> */}
                    <button type="button" class="text-centerfocus:outline-none text-white bg-button1 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="/vehicle_owner_dashboard">Vehicle</Link></button>

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

                        {/* Calendar (Upper Right Corner) */}
                        <div className='flex sm:flex-row   justify-end mt-2'>
                            <Calendar />
                        </div>
                    </div>
                    <div className='my-16 mx-8 '>
                        {/* My Tours Section (Bottom Left Corner) */}
                        <div className='w-1/2 flex   flex-row text-dimBlack relative my-2  sm:bottom-[250px] '>
                        <p className='w-3/4 text-4xl ' >My Tours</p>
                        <Button variant="text" className=" text-xs pt-5 text-button1 text-center"><Link to='/travel_guide_mytours'>see more </Link></Button>
                        </div>

                        {/* My Tours Cards */}
                        <div className='flex flex-row'>
                            <div className='flex flex-wrap relative sm:bottom-[250px]  '>
                                {/* Tour Cards */}
                                {tours.map((tour, index) => (
                                    <TourCard key={index} image={tour.image} name={tour.name} des={tour.des} />
                                ))}
                                
                            </div>

                            {/* Conversation Section (Bottom Right Corner) */}
                            <ConversationSection />
                        </div>

                    </div>
                    <div className=' mx-8 w-1/2 '>
                        <div className='mb-1 flex flex-row text-dimBlack relative  sm:bottom-[400px] '>
                            <p className='w-3/4 text-4xl ' >My Rates</p>
                            <Button variant="text" className=" text-xs pt-5 text-button1 text-center"><Link to="/travel_guide_myrates">see more </Link></Button>

                        </div>
                        <div className='sm:flex flex-row relative sm:bottom-[400px]' >
                            {rates.map((rate, index) => (
                                <RateCard key={index} image={rate.image} name={rate.name} rate={rate.rate} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTG;

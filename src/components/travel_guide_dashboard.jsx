import { useState } from 'react';
import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../assets';
import Sidebar from './sidebar';
import TopNavbar from './topNavbar';
import { Link } from 'react-router-dom';
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
const DashboardCard = ({ title, src,amount }) => {
    return (
        <div className="card bg-base-100 shadow-xl sm:w-20 w-16 sm:h-20 h-16 bg-green mr-1.5 rounded-lg my-1">
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

// Calendar Component (Placeholder)
const Calendar = () => {
    return (
        <div className="w-[47vh] bg-primary">
            {/* Calendar Component Code */}
            <div className="  shadow-lg ">
                <div className="md:p-2 md:pb-8 w-[46vh] h-[40vh] dark:bg-primary bg-white rounded-md">
                    <div className=" flex items-center justify-between">
                        <h1 className="text-xl font-bold dark:text-textGray text-gray-800">October 2020</h1>
                        <div className="flex items-center text-gray-800 dark:text-gray-100">
                            <svg xmlns="http:www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <svg xmlns="http:www.w3.org/2000/svg" className="icon icon-tabler ml-3 icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-sm font-medium text-center text-textGray-800 dark:text-textGray">Mo</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-sm font-medium text-center text-gray-800 dark:text-textGray">Tu</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-sm font-medium text-center text-gray-800 dark:text-textGray">We</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-sm font-medium text-center text-gray-800 dark:text-textGray">Th</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-sm font-medium text-center text-gray-800 dark:text-textGray">Fr</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-sm font-medium text-center text-gray-800 dark:text-textGray">Sa</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-sm font-medium text-center text-gray-800 dark:text-textGray">Su</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-6">
                                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td>
                                        <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td className="">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-sm text-gray-500 dark:text-textGray font-medium">1</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">2</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">3</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">4</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">6</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="w-full h-full">
                                            <div className="fle2 ite2s-center justify-center w-full rounded-full cursor-pointer">
                                                <p className="text-xs w-8 h-8 flex items-center justify-center font-medium text-white bg-green rounded-full">8</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">9</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">11</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">13</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">18</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">20</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray">25</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">27</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-xs text-gray-500 dark:text-textGray font-medium">30</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// My Tours Section Component
const MyToursSection = () => {
    return (
        <div className='flex-col text-4xl w-1/6 mb-5 text-dimBlack'>
            <p>My Tours</p>
        </div>
    );
};

// Tour Card Component (Placeholder)
const TourCard = () => {
    return (
        <div className="card card-compact rounded-xl bg-lightBlue sm:w-44 w-52 h-52 sm:mr-4 my-2 relative shadow-xl">
            <figure>
                <img src={kandy} alt="kandy" className='rounded-xl sm:w-40 w-48 h-24 m-2 cursor-pointer' />
            </figure>
            <div className="card-body mx-5">
                <h2 className="card-title">Kandy</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
        </div>
    );
};

const RateCard = () => {
    return (
        <div className="card rounded-xl flex flex-row bg-lightBlue sm:w-1/2  mr-5 my-2 relative shadow-xl">
            <figure className='flex sm:flex-row'><img src={kandy} alt="kandy" className='w-36 m-2' />
                <div className="card-body w-full">
                    <h2 className="card-title">Mahanuwara</h2>
                    <p>Kandy</p>
                    <p>LKR 1000 per day</p>

                </div>
            </figure>

        </div>
    )
}

// Conversation Section Component (Placeholder)
const ConversationSection = () => {
    return (
        <div class='ml-[15vh] w-1/3  relative bottom-[12vh] '>
            <div className='flex-col text-2xl w-1/6   text-dimBlack'>
                <p>Conversation</p>
            </div>

            {/* Conversation Component Code */}
            <ul role="list" className="divide-y divide-gray-100">
                {people.map((person) => (
                    <li key={person.email} className="flex justify-between gap-x-4 py-2">
                        <div className="flex gap-x-4">
                            <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-4 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-4 text-gray-500">{person.email}</p>
                                <p className="mt-1 truncate leading-5 text-gray">{person.msg}</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">


                            <div className="mt-1 flex items-center gap-x-1.5">

                                <p className="text-xs leading-4 text-green">Reply</p>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};



const DashboardTG = () => {
    const dashs = [
        { title: "Client", src: customer ,amount:"128"},
        { title: "Complete", src: star,amount:"128" },
        { title: "Invitations", src: invitation ,amount:"128"},
        { title: "Ratings", src: star,amount:"128" },
        { title: "Request", src: request,amount:"128" },
    ];

    return (
        <div className='flex'>
            <div><Sidebar /></div>
            
            <div className='flex flex-grow flex-col'>
                <div><TopNavbar/></div>
                <div className=''>
                {/* <button type="button" class="text-centerfocus:outline-none text-white bg-button1 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="/vehicle_owner_dashboard">Vehicle</Link></button> */}

                    <div className=" flex sm:flex-row flex-col items-start justify-start">
                        {/* Top Section (Upper Left Corner) */}
                        <div className='ml-10 mt-2'>
                            <TopSection />
                        </div>

                        {/* Dashboard Cards (Upper Middle Section) */}
                        <div className='flex  sm:flex-shrink flex-wrap mr-12'>

                            {dashs.map((dash, index) => (
                                <DashboardCard key={index} title={dash.title} src={dash.src} amount={dash.amount} />
                            ))}
                        </div>

                        {/* Calendar (Upper Right Corner) */}
                        <div className='flex sm:flex-row  justify-end mt-2'>
                            <Calendar />
                        </div>
                    </div>
                    <div className='my-16 mx-8 '>
                        {/* My Tours Section (Bottom Left Corner) */}
                        <div className='text-4xl  flex-row text-dimBlack relative my-2  sm:bottom-[250px] '>
                            <p >My Tours</p>
                        </div>

                        {/* My Tours Cards */}
                        <div className='flex flex-row'>
                            <div className='flex flex-wrap relative sm:bottom-[250px]  '>
                                {/* Tour Cards */}
                                <TourCard />
                                <TourCard />
                                <TourCard />

                            </div>

                            {/* Conversation Section (Bottom Right Corner) */}
                            <ConversationSection />
                        </div>

                    </div>
                    <div className=' mx-8 w-1/2 '>
                        <div className='text-4xl mb-1 flex-row text-dimBlack relative  sm:bottom-[400px] '>
                            <p >My Rates</p>
                        </div>
                        <div className='sm:flex flex-row relative sm:bottom-[400px]' >
                            <RateCard />
                            <RateCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTG;

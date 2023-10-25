import React from 'react';
import { Link } from 'react-router-dom';
import people01 from '../../assets/admin/people01.png'; // Use default import for the image


// Import images for the dashs array
import client from '../../assets/admin/clients.png';
import complete from '../../assets/admin/clients.png';
import bookmark from '../../assets/admin/clients.png';
import menu from '../../assets/admin/clients.png';
import Barchart from '../../components/admin/Adminbarchart'
import Piechart from '../../components/admin/Adminpiechart'
import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';




const DashboardCard = ({ title, src, amount }) => {
    return (
        <div className="card bg-base-100 shadow-xl w-32 h-32 ml-5 rounded-lg my-2  bg-[#29875e]">
            <figure>
                <img src={src} alt={title} className='mx-[5.5vh] mt-3' />
            </figure>
            <div className="card-body mt-4 mx-9">
                <p>{title}</p>
                <p>{amount}</p>
            </div>
        </div>
    );
};



const DashboardTG = () => {
    const dashs = [
        { title: "Total Travelers", src: client, amount: "124" },
        { title: "Total Hotels", src: complete, amount: "45" },
        { title: "Total Activities", src: bookmark, amount: "40" },
        { title: "Total Vehicles", src: menu, amount: "20" },
        { title: "Total Orders", src: menu, amount: "20" },
        { title: "Registrtion Requests", src: menu, amount: "20" },
    ];

    return (
        <div className='flex flex-row gap-4'>
            {dashs.map((dash, index) => (
                <DashboardCard key={index} title={dash.title} src={dash.src} />
            ))}

        </div>
    );
}


const Order = () => {
    return (
        <div>
            <div className="bg-white p-8 rounded-md w-40%">
                <div className="flex items-center justify-between pb-6">
                    <div>
                        <h2 className="text-gray-600 font-semibold">New Registration Requests</h2>
                    </div>

                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            User type
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Requested at
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Vera Carpenter
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Travel bags</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 21, 2020
                                            </p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Blake Bowman
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Shoes</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 01, 2020
                                            </p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Dana Moore
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Tent</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 10, 2020
                                            </p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Alonzo Cox
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Travel bag</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Admin_Dashboard() {

    const dashs = [
        { title: "Total Travelers", src: client, amount: "124" },
        { title: "Total Hotels", src: complete, amount: "45" },
        { title: "Total Activities", src: bookmark, amount: "40" },
        { title: "Total Orders", src: menu, amount: "20" },
        { title: "Registrtion Requests", src: menu, amount: "20" },
    ];

    // const topnav = [
    //     { path: "/travel_guide_profile" }
    // ]
    return (

        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            {/* <SideBar2 /> */}
            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div>
                        <div className='flex '>
                            <div >
                                <div className=' flex flex-row '>
                                    <div className='flex  sm:flex-shrink flex-wrap ml-10'>
                                        {dashs.map((dash, index) => (
                                            <DashboardCard key={index} title={dash.title} src={dash.src} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className='grid gap-3 md:grid-cols-2'>
                                        <Order width="50%" height={350} />
                                        <Barchart />
                                    </div>
                                </div>

                            </div>
                            {/* <div className='w-1/8 absolute right-1'>
                                <Piechart />
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

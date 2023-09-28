import React from 'react';
import { Link } from 'react-router-dom';
import people01 from '../../assets/store/people01.png'; // Use default import for the image


// Import images for the dashs array
import client from '../../assets/store/clients.png';
import complete from '../../assets/store/clients.png';
import bookmark from '../../assets/store/clients.png';
import menu from '../../assets/store/clients.png';
import Storemanager_barchart from '../../components/store/Storemanager_barchart';
import Storemanager_piechart from '../../components/store/Storemanager_piechart'

import Sidebar from '../../components/store/sidebar';
import TopNavbar from '../../components/store/topNavbar';




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

const Calendar = () => {
    return (
        <div className="w-[35vh] bg-primary">
            {/* Calendar Component Code */}
            <div className="  shadow-lg ">
                <div className="md:p-1 md:pb-4 w-[35vh] h-[35vh] dark:bg-primary bg-white rounded-md">
                    <div className=" flex items-center justify-between">
                        <h1 className=" font-bold dark:text-textGray text-gray-800">October 2020</h1>
                        <div className="flex items-center text-gray-800 dark:text-gray-100">
                            <svg xmlns="http:www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={12} height={12} viewBox="0 0 12 12" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                            <svg xmlns="http:www.w3.org/2000/svg" className="icon icon-tabler ml-3 icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 12 12" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className=" font-medium text-center text-textGray-800 dark:text-textGray">Mo</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className=" font-medium text-center text-gray-800 dark:text-textGray">Tu</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className=" font-medium text-center text-gray-800 dark:text-textGray">We</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className=" font-medium text-center text-gray-800 dark:text-textGray">Th</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className=" font-medium text-center text-gray-800 dark:text-textGray">Fr</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className=" font-medium text-center text-gray-800 dark:text-textGray">Sa</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className=" font-medium text-center text-gray-800 dark:text-textGray">Su</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-6">
                                        <div className=" cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td className="pt-6">
                                        <div className=" cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center" />
                                    </td>
                                    <td className="pt-6">
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">1</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">2</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">3</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">4</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">6</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">9</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">11</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">13</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">18</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">20</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray">25</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">27</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=" cursor-pointer flex w-full justify-center">
                                            <p className=" text-gray-500 dark:text-textGray font-medium">30</p>
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



const Order = () => {
    return (
        <div>
            <div className="bg-white p-3 rounded-md w-40% m-4">
                <div className="flex items-center justify-between pb-2">
                    <div>
                        <h2 className="text-gray-600 font-semibold">New Order</h2>
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
                                        {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Products
                                        </th> */}
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Order at
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
                                        {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Travel bags</p>
                                        </td> */}
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
                                        {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Shoes</p>
                                        </td> */}
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
                                        {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Tent</p>
                                        </td> */}
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
                                        {/* <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Travel bag</p>
                                        </td> */}
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

export default function Dashboard() {
    const role = sessionStorage.getItem('role');
    const user_id = sessionStorage.getItem('user_id');
    const dashs = [
        { title: "Total Sale", src: client, amount: "124" },
        { title: "Total Expenses", src: complete, amount: "45" },
        { title: "Total customer", src: bookmark, amount: "40" },
        { title: "Total Orders", src: menu, amount: "20" },
    ];
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <TopNavbar />

                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div className='flex m-2'>
                        <div className='w-7/8'>
                            <div className=' flex flex-row '>
                                {/* <div className='m-5'> */}
                                {/* <img src={people01} alt="people01" className='justify-start w-[60px] h-[60px]' /> */}
                                <div className=' mx-2 mr-[8vh] m-3'>
                                    <p className='text-3xl'>Hi, {user_id} store</p>
                                    <p className=''>Store manager</p>
                                </div>
                                {/* </div> */}
                                <div className='flex  sm:flex-shrink flex-wrap mr-6'>
                                    {dashs.map((dash, index) => (
                                        <DashboardCard key={index} title={dash.title} src={dash.src} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className='grid gap-3 md:grid-cols-2'>
                                    <Order width="50%" height={350} />
                                    <Storemanager_barchart />
                                </div>
                            </div>

                        </div>
                        <div className='w-1/8 absolute right-6'>
                            <Calendar />
                            <Storemanager_piechart />
                        </div>

                    </div>
                </div>
            </div>
        </div>











    );

}

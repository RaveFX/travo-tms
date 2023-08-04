import React from 'react';
import { Link } from 'react-router-dom';
import people01 from '../../assets/people01.png'; // Use default import for the image
import DashboardStatsGrid from '../../components/DashboardStatsGrid';
import TransactionChart from '../../components/TransactionChart';

// Import images for the dashs array
import client from '../../assets/clients.png';
import complete from '../../assets/clients.png';
import bookmark from '../../assets/clients.png';
import menu from '../../assets/clients.png';
import Piechart from '../../components/Piechart';

const DashboardCard = ({ title, src, amount }) => {
    return (
        <div className="card bg-base-100 shadow-xl w-32 h-32 ml-5 rounded-lg my-2  bg-[#2b9d6c]">
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
                <div className="md:p-2 md:pb-8 w-[35vh] h-[35vh] dark:bg-primary bg-white rounded-md">
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

const DashboardTG = () => {
    const dashs = [
        { title: "Total Sale", src: client, amount: "124" },
        { title: "Total Expenses", src: complete, amount: "45" },
        { title: "Total customer", src: bookmark, amount: "40" },
        { title: "Total Orders", src: menu, amount: "20" },
    ];

    return (
        <div className='flex flex-row gap-4'>
            <div className=' flex flex-row '>
                <img src={people01} alt="people01" className='justify-start w-[60px] h-[60px]' />
                <div className=' mx-2 mr-[8vh]'>
                    <p className='text-3xl'>Hi, Sam store</p>
                    <p className=''>Store manager</p>
                </div>
            </div>
            <div className='flex  sm:flex-shrink flex-wrap mr-12'>
                {dashs.map((dash, index) => (
                    <DashboardCard key={index} title={dash.title} src={dash.src} />
                ))}
            </div>
            {/* Add the Calendar component here */}
            <div>
                {/* Replace this with your calendar component */}
                <p>Calendar</p>
                <Calendar />
            </div>
            {/* <DashboardStatsGrid />
            <TransactionChart /> */}
            <Piechart />
        </div>
    );
}

export default function Dashboard() {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardTG />

            {/* <TransactionChart /> */}
        </div>
    );
}

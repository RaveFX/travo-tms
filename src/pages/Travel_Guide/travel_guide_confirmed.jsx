import React from 'react'
// import Sidebar from '../../components/sidebar';
import Sidebar from '../../components/Travel_guide/sidebar1';

import TopNavbar from '../../components/Travel_guide/topNavbar';
import { Link } from 'react-router-dom';
import { TicketIcon } from '@heroicons/react/24/outline';

const topnav=[
    {path:"/travel_guide_profile"}
]

const Confirmed = () => {
    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='flex flex-grow flex-col'>
                <div>
                <div>
                    
                    {topnav.map((nav, index) => (
                                <TopNavbar key={index} path={nav.path}  />
                            ))}
                </div>
                </div>
                <div>
                    <div className='py-8 bg-primary'>
                        <div className='flex mx-auto container'>
                            <div className='w-3/4'>
                                <p className='text-2xl text-dimBlack'>Confirmed Requests</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className="mx-auto container bg-black dark:bg-white shadow rounded">
                                <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
                                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                                        <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                                            <p className="text-base text-gray-600 dark:text-gray-400" id="page-view">
                                                Viewing 1 - 20 of 60
                                            </p>
                                            <a className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded" onclick="pageView(false)">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="15 6 9 12 15 18" />
                                                </svg>
                                            </a>
                                            <a className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer" onclick="pageView(true)">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="9 6 15 12 9 18" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex items-center lg:border-r border-gray-300 dark:border-gray-200 pb-3 lg:pb-0 lg:px-6">
                                            <div className="relative w-32 z-10">
                                                <div className="pointer-events-none text-gray-600 dark:text-gray-400 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </div>
                                                <select aria-label="Selected tab" className="focus:outline-none border border-transparent focus:border-whiye focus:shadow-outline-gray text-base form-select block w-full py-2 px-2 xl:px-3 rounded text-gray-600 dark:text-gray-400 appearance-none bg-transparent">
                                                    <option>List View</option>
                                                    <option>Grid View</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="lg:ml-6 flex items-center">

                                        </div>
                                    </div>
                                </div>
                                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                                    <table className="min-w-full bg-white dark:bg-whiye ">
                                        <thead>
                                            <tr className="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 ">
                                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal ">
                                                </th>

                                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-24 text-sm tracking-normal ">Customer</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Contact</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Trip To</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Requested Date</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">Attendances</th>
                                                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal "></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="h-20 border-gray-300 dark:border-gray-200 border-b hover:bg-gray-200 cursor-pointer">
                                                <td className="pl-8 pr-6 text-center whitespace-no-wrap text-sm text-gray-600 dark:text-gray-400 tracking-normal ">
                                                </td>

                                                <td className="text-center  items-center  whitespace-no-wrap">
                                                    <div className="flex">
                                                        <div className="h-8 w-8">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                                       
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">07045869852</td>
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal">Kandy</td>
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal">02.03.20</td>
                                                <td className="text-center text-sm  whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal">20</td>
                                                <td className="text-center text-xl  whitespace-no-wrap text-black dark:text-green tracking-normal ">Done</td>
                                            

                                                
                                            </tr>

                                            <tr className="h-20 border-gray-300 dark:border-gray-200 border-b hover:bg-gray-200 cursor-pointer">
                                                <td className="pl-8 pr-6 text-center whitespace-no-wrap text-sm text-gray-600 dark:text-gray-400 tracking-normal ">
                                                </td>

                                                <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">0475831596</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">Jaffna</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">02.03.20</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">20</td>
                                                <td className="text-center text-xl  whitespace-no-wrap text-black dark:text-green tracking-normal ">Done</td>


                                                
                                            </tr>
                                            <tr className="h-20 border-gray-300 dark:border-gray-200 border-b hover:bg-gray-200 cursor-pointer">
                                                <td className="pl-8 pr-6 text-center whitespace-no-wrap text-sm text-gray-600 dark:text-gray-400 tracking-normal ">
                                                </td>

                                                <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">0112857596</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">Trincomalee</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">02.03.20</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">20</td>


                                               
                                            </tr>
                                            <tr className="h-20 border-gray-300 dark:border-gray-200 border-b hover:bg-gray-200 cursor-pointer">
                                                <td className="pl-8 pr-6 text-center whitespace-no-wrap text-sm text-gray-600 dark:text-gray-400 tracking-normal ">
                                                </td>
                                                <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">0778593215</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">Matara</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">02.03.20</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">20</td>
                                                <td className="text-center text-xl  whitespace-no-wrap text-black dark:text-green tracking-normal ">Done</td>


                                                
                                            </tr>
                                            <tr className="h-20 border-gray-300 dark:border-gray-200 border-b hover:bg-gray-200 cursor-pointer">
                                                <td className="pl-8 pr-6 text-center whitespace-no-wrap text-sm text-gray-600 dark:text-gray-400 tracking-normal ">
                                                </td>
                                                <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">0725487621</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">Galle</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">02.03.20</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">20</td>


                                                
                                            </tr>
                                            <tr className="h-20 border-gray-300 dark:border-gray-200 border-b hover:bg-gray-200 cursor-pointer">
                                                <td className="pl-8 pr-6 text-center whitespace-no-wrap text-sm text-gray-600 dark:text-gray-400 tracking-normal ">
                                                </td>
                                                <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">075847596</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">Kandy</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">02.03.20</td>
                                                <td className="text-sm text-center whitespace-no-wrap text-gray-600 dark:text-gray-400 tracking-normal ">20</td>
                                                <td className="text-center text-xl  whitespace-no-wrap text-black dark:text-green tracking-normal ">Done</td>  
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmed
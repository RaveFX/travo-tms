
import React, { useState } from 'react';
import CreditCardForm from '../../components/store/CreditCardForm'; // Replace with the correct path to your CreditCardForm component

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';


const CustomerTransaction = () => {
    return (


        <div className="flex">
            {/* Left Side: Transaction History Table */}
            <div className="w-full p-4">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <h1 className=' font-poppins font-extrabold mx-5 text-[#2C2738] text-sm'>Today</h1>
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500 text-[#B7BBB8]">
                                <tr>
                                    <th scope="col" className="px-6 py-4">User</th>
                                    <th scope="col" className="px-6 py-4">Transaction ID</th>
                                    <th scope="col" className="px-6 py-4">Time</th>
                                    <th scope="col" className="px-6 py-4">Payment</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500">
                                    <td className=" text-center  items-center  whitespace-no-wrap">
                                        <div className="flex">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Tharindi Senadeera</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1225</td>
                                    <td className="whitespace-nowrap px-6 py-4">17.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.10,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1226</td>
                                    <td className="whitespace-nowrap px-6 py-4">20.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.21,000</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                </tr>

                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                                    <td className="whitespace-nowrap px-6 py-4">12.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.22,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className=' font-poppins font-extrabold mx-5 mt-6 text-[#2C2738] text-sm'>07/08/2023</h1>
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500 text-[#B7BBB8]">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Customer</th>
                                    <th scope="col" className="px-6 py-4">Order ID</th>
                                    <th scope="col" className="px-6 py-4">Time</th>
                                    <th scope="col" className="px-6 py-4">Payment</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className=" text-center  items-center  whitespace-no-wrap">
                                        <div className="flex">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Tharindi Senadeera</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1225</td>
                                    <td className="whitespace-nowrap px-6 py-4">17.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.10,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-16 h-6 text-center bg-slate-50 rounded-lg border-slate-950">
                                            refund</div>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1226</td>
                                    <td className="whitespace-nowrap px-6 py-4">20.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.21,000</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                                    <td className="whitespace-nowrap px-6 py-4">12.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.22,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>

                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className=" text-center  items-center  whitespace-no-wrap">
                                        <div className="flex">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Tharindi Senadeera</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1225</td>
                                    <td className="whitespace-nowrap px-6 py-4">17.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.10,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1226</td>
                                    <td className="whitespace-nowrap px-6 py-4">20.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.21,000</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-16 h-6 text-center bg-slate-50 rounded-lg">
                                            refund</div>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">
                                    <td className="pr-6 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 ml-5">
                                                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                            </div>
                                            <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                                    <td className="whitespace-nowrap px-6 py-4">12.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.22,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>

    );
}

const Membership = () => {
    return (
        <div className="flex">
            {/* Left Side: Transaction History Table */}
            <div className="w-full p-4">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <h1 className=' font-poppins font-extrabold mx-5 text-[#2C2738] text-sm'>Today</h1>
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500 text-[#B7BBB8]">
                                <tr>
                                    {/* <th scope="col" className="px-6 py-4">Customer</th> */}
                                    <th scope="col" className="px-6 py-4">Transaction ID</th>
                                    <th scope="col" className="px-6 py-4">Time</th>
                                    <th scope="col" className="px-6 py-4">Payment</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                    <th scope="col" className="px-6 py-4"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1225</td>
                                    <td className="whitespace-nowrap px-6 py-4">17.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.10,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button className="w-16 h-6 text-center bg-green-600 rounded-lg text-white">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">

                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1226</td>
                                    <td className="whitespace-nowrap px-6 py-4">20.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.21,000</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button className="w-16 h-6 text-center bg-green-600 rounded-lg text-white">
                                            Download
                                        </button>
                                    </td>
                                </tr>

                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">

                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                                    <td className="whitespace-nowrap px-6 py-4">12.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.22,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button className="w-16 h-6 text-center bg-green-600 rounded-lg text-white">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 ">

                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                                    <td className="whitespace-nowrap px-6 py-4">12.08.2023</td>
                                    <td className="whitespace-nowrap px-6 py-4">Rs.22,500</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                                            Paid</div>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <button className="w-16 h-6 text-center bg-green-600 rounded-lg text-white">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>
    );
}

const TransactionHistory = () => {
    const [activeTab, setActiveTab] = useState('transactions'); // Default active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div>



                        <div className="flex">

                            <div className='w-full'>
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">

                                    <CustomerTransaction />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default TransactionHistory;


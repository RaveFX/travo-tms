



import React from 'react';
import Travel_tent from '../../assets/admin/travel_tent.jpg';

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';

import {
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

const Admin_AddAdverisments = () => {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div className='m-3'>
                        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-8 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                            <div className="md:flex items-center -mx-10">
                                <div className="flex p-4 ml-4">
                                    <Card className="w-96">
                                        <CardBody>
                                            {/* Product Image */}
                                            <img src={Travel_tent} alt="Product" className="max-w-full h-80" />
                                        </CardBody>
                                        <CardFooter className="flex items-center justify-between gap-4 p-2">
                                            {/* Price */}
                                            <div className="text-xl font-semibold">$99.99</div>
                                            {/* Color Dots */}
                                            <div className="flex gap-2">
                                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                            </div>
                                            {/* Rating */}
                                            <div className="flex items-center gap-1">
                                                <div className="text-yellow-400">&#9733;</div>
                                                <div className="text-yellow-400">&#9733;</div>
                                                <div className="text-yellow-400">&#9733;</div>
                                                <div className="text-yellow-400">&#9733;</div>
                                                <div className="text-gray-300">&#9733;</div>
                                            </div>
                                        </CardFooter>
                                        {/* Description Footer */}
                                        <CardFooter className=" p-2">

                                        </CardFooter>
                                    </Card>
                                </div>
                                <div className="w-full md:w-1/2 px-10  py-4 mb-4">
                                    <div className='ml-12'>
                                        <div className="mb-6">
                                            <h1 className="font-bold uppercase text-2xl mb-5">Advertisement ID:58</h1>
                                        </div>
                                        <div className='m-6'>
                                            <p className="text-sm"><b>Name:</b> Camping Tent</p>
                                            <p className="text-sm"><b>Price:</b> Rs.4000.00</p>
                                            <p className="text-sm"><b>Color:</b> Red,White,Yellow</p>
                                            <p className="text-sm"><b>Quantity:</b> 23</p>
                                            <p className="text-sm"><b>Quantity:</b> 23</p>
                                        </div>
                                        <div>
                                            <p className="text-sm">Experience the great outdoors in ultimate comfort with our premium camping tent. Crafted with durable materials and advanced weatherproof technology, it offers spacious accommodation for your adventures. Easy setup and versatile design make it perfect for families or solo explorers. Embrace nature without compromising on luxury. Your next unforgettable journey starts here.<a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                                        </div>
                                        <div>
                                            <div className="inline-block align-bottom m-2">
                                                <button className="bg-blue-300 opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Accept</button>
                                                <button className="bg-red-300 opacity-75 hover:opacity-100 text-gray-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>









    );
};

export default Admin_AddAdverisments;


















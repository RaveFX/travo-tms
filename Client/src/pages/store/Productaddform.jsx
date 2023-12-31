import React from 'react';

// import Shop from './shop';
import Sidebar from '../../components/store/sidebar';
import TopNavbar from '../../components/store/topNavbar';
import { Link } from 'react-router-dom';

export default function Products() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}


                    <div>
                        <div>
                            <div className="flex justify-center m-6">

                                <div className="grid grid-cols-2 w-full bg-gray-100  rounded-lg shadow-lg">


                                    {/* Right Side - Add Photos */}
                                    <div className="p-16 bg-white flex items-center justify-center m-4">
                                        <div className="bg-gray-400 p-16  text-white font-bold text-4xl cursor-pointer">
                                            {/* You can add your photo upload component here */}
                                            +
                                        </div>
                                    </div>

                                    {/* Left Side - Add Product Form */}
                                    <div className="p-10">
                                        <div className="p-10 bg-white ">
                                            <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
                                            <form>
                                                <div className="mb-4">
                                                    <div>
                                                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                                                            Product Name
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            id="productName"
                                                            name="productName"
                                                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                                                            placeholder="Enter product name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="productSize" className="block text-sm font-medium text-gray-700">
                                                        Product Size
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="productSize"
                                                        name="productSize"
                                                        className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                                                        placeholder="Enter product size"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                                                        Product Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="productPrice"
                                                        name="productPrice"
                                                        className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                                                        placeholder="Enter product price"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <div>
                                                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                                                            Description
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            id="productName"
                                                            name="productName"
                                                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                                                            placeholder="Enter product name"
                                                        />
                                                    </div>
                                                </div>

                                            </form>


                                            <div className="flex items-center justify-center p-4">
                                                <button className="px-4 py-2 bg-button1 text-white rounded-lg mr-4">
                                                    Save
                                                </button>
                                                <Link to="/store_stock">
                                                    <button className="px-4 py-2 bg-green text-white rounded-lg mr-4">
                                                        Cancel
                                                    </button>
                                                </Link>
                                                {/* <Link   className="text-blue-500 underline">
                                    Cancel
                                </Link> */}
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
}


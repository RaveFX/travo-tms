
import React from 'react'
import { Link } from 'react-router-dom';

export default function Stockdetails() {

    return (
        <div className="bg-white p-8 rounded-md w-full">


            <div className="flex items-center justify-between pb-6">
                <div>
                    <Link to="/productadd">
                        <button class="bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer m-1">New Product</button>
                    </Link>
                    <button class="bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer m-1">New Category</button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block" type="text" name="" id="" placeholder="search..." />
                    </div>
                    {/* <div>
                        <select className="bg-gray-50 outline-none ml-1 block" type="text" name="" id="" placeholder="search...">
                            <option >Travel Guide</option>
                            <option>Store Mnager</option>
                            <option>Vehicle Renter</option>
                            <option>Activity Manager</option>
                            <option>Hotel Manager</option>
                        </select>
                    </div> */}
                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Product Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Qauntity
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Colors
                                    </th>
                                    {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th> */}
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://media.istockphoto.com/id/1404685266/photo/black-abs-luggage-with-4-wheels-isolated-on-white.jpg?s=612x612&w=0&k=20&c=CcU6hlytSgX0bJRYflZIx_NCiO2nAa0e40RXeaQTMdg="
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Black bag
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">12</p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            Bag
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            Black,Red
                                        </p>
                                    </td>
                                    {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">On delivery</span>
                                        </span>
                                    </td> */}
                                    <td class="justify-center">
                                        <a href="/product_card">
                                            <button type="button" class="text-center focus:outline-none text-white bg-button1 transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More Info..</button>
                                        </a>
                                    </td>

                                </tr>
                                <tr>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://media.istockphoto.com/id/470801960/photo/rain-jacket.webp?b=1&s=170667a&w=0&k=20&c=erUj8jH3qGNcJYzPproJ11uewI76QxUaHZMMR3-GbgU="
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Jackets
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">Jacket</p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            20
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            yellow,green
                                        </p>
                                    </td>
                                    {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Pendding</span>
                                        </span>
                                    </td> */}
                                    <td class="justify-center">
                                        <a href="/product_card">
                                            <button type="button" class="text-center focus:outline-none text-white bg-button1 transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More Info..</button>
                                        </a>
                                    </td>

                                </tr>
                                <tr>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://media.istockphoto.com/id/1453988945/photo/yellow-bucket-hat-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=KiTFBMsBnptqQzuoRpB3XIJy0U2wh5lJhfbVAljgG30="
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Hat
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">Cap</p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            100
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            Black,red,white,yellow
                                        </p>
                                    </td>
                                    {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Pendding</span>
                                        </span>
                                    </td> */}
                                    <td class="justify-center">
                                        <a href="/product_card">
                                            <button type="button" class="text-center focus:outline-none text-white bg-button1 transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More Info..</button>
                                        </a>
                                    </td>

                                </tr>
                                <tr>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://media.istockphoto.com/id/1355329741/photo/smartphone-and-mini-tripod-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=T1voaiuVAkClbIq8qsXnOZHAibWLa3LeXGcCKkv4T7o="
                                                    alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Selfie stick
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">Others</p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">50</p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">black</p>
                                    </td>
                                    {/* <td class="px-5 py-5 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Cancel</span>
                                        </span>
                                    </td> */}
                                    <td class="justify-center">
                                        <a href="/product_card">
                                            <button type="button" class="text-center focus:outline-none text-white bg-button1 transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-butt font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More Info..</button>
                                        </a>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="text-sm text-indigo-50 transition duration-150 bg-green font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button className="text-sm text-indigo-50 transition duration-150 bg-green font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};










// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//     Button,
// } from "@material-tailwind/react";


// import React from 'react'

// export default function Renting() {
//     return (
//         <div className="flex">
//             <Card className="w-full max-w-[48rem] flex-row ">
//                 <CardHeader
//                     shadow={false}
//                     floated={false}
//                     className="m-0 w-2/5 shrink-0 rounded-r-none"
//                 >
//                     <img
//                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
//                         alt="card-image"
//                         className="h-full w-full object-cover"
//                     />
//                 </CardHeader>
//                 <CardBody>
//                     <Typography variant="h6" color="blue" className="mb-4 uppercase">
//                         startups
//                     </Typography>
//                     <Typography variant="h4" color="blue-gray" className="mb-2">
//                         Lyft launching cross-platform service this week
//                     </Typography>
//                     <Typography color="gray" className="mb-8 font-normal">
//                         Like so many organizations these days, Autodesk is a company in
//                         transition. It was until recently a traditional boxed software company
//                         selling licenses. Yet its own business model disruption is only part
//                         of the story
//                     </Typography>
//                     <a href="#" className="inline-block">
//                         <Button variant="text" className="flex items-center gap-2">
//                             Learn More
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                                 className="h-4 w-4"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                                 />
//                             </svg>
//                         </Button>
//                     </a>
//                 </CardBody>
//             </Card>
//         </div>
//     )
// }





import React from 'react';

const ProductOrderTable = () => {
    return (
        <div className="bg-white p-8 rounded-md w-full">
            <div className="flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">Renting Orders</h2>
                    <span className="text-xs">All Renting item</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block" type="text" name="" id="" placeholder="search..." />
                    </div>
                    {/* <div className="lg:ml-40 ml-10 space-x-8">
                        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"></button>
                        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"></button>
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
                                        Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Products
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        QRT
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
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
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            2
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">On delivery</span>
                                        </span>
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
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            1
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Pendding</span>
                                        </span>
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
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            1
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Pendding</span>
                                        </span>
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
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">1</p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span class="relative">Cancel</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
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

export default ProductOrderTable;


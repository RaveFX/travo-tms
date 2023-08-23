import React from 'react'

import Sidebar from '../../components/store/sidebar';
import TopNavbar from '../../components/store/topNavbar';


import Shop from '../../assets/store/shop.jpg'
import Nav from '../../components/store/product_navbar';

const cardsData = [
    {
        id: 1,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1681169152396-f22381eae362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Forest Tent',
        price: '$450',
    },
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Nikon camera',
        price: '$450',
    },
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/1372909823/photo/ultra-light-rainproof-windbreaker-jacket-isolated-on-white-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=GlRYsTVHHx-Mbm9odFc4hqN9_ZaR5Mk3sATloiNyT8o=',
        name: 'Jacket',
        price: '$450',
    },
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/154918134/photo/old-brown-boots-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=jx8xPHKfXMCWwp2lw7DdFiXM_BKXFiesW-pTR_ft124=',
        name: 'Boots',
        price: '$450',
    },
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/1397200531/photo/white-bucket-hat-isolated-on-yellow.webp?b=1&s=170667a&w=0&k=20&c=ZewL_WGNRbeoaZztI2hS2OyUAtl5j0pP8MA_nZtYDb8=',
        name: 'Hats',
        price: '$450',
    },




    // Add more card data as needed
];

export default function Myshop() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div>
                        <div >
                            <Nav />
                            <div class="relative m-4">
                                <img class="hidden sm:block w-full" src={Shop} alt="sofa" />
                                <img class="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                                <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                                    <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">Sam Store</p>
                                </div>
                            </div>
                            {/* <div class="lg:ml-auto mr-10 mt-10 flex space-x-8 justify-end">
                <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Product</button>
            </div> */}

                            <div className="relative inline-flex">
                                <svg
                                    className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 412 232"
                                >
                                    <path
                                        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                                        fill="#648299"
                                        fillRule="nonzero"
                                    />
                                </svg>
                                {/* <select
                    className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                    <option>Shoes</option>
                    <option>All products</option>
                    <option>Bags</option>
                    <option>tents</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Purple</option>
                    <option>Gray</option>
                    <option>White</option>
                </select> */}
                            </div>
                            <style>
                                {`
          .card-container {
            display: flex;
            color:red;
            justify-content: center;
            max-width: 10000px; /* Set the maximum width for the container */
          }

          .card {
            width: 220px; /* Set a fixed width for each card */
          }

        `}
                            </style>

                            <div className="card-container flex">
                                {cardsData.map((card) => (
                                    <article
                                        key={card.id}
                                        className="card rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 m-2">
                                        <a href="#">
                                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                                <img src={card.imageUrl} alt="Hotel Photo" />
                                                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                                        />
                                                    </svg>

                                                </div>
                                            </div>

                                            <div className="mt-1 p-2">
                                                <h2 className="text-slate-700">{card.name}</h2>
                                                <p className="mt-1 text-sm text-slate-400">{card.location}</p>

                                                <div className="mt-3 flex items-end justify-between">
                                                    <p className="text-lg font-bold text-blue-500">{card.price}</p>

                                                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">

                                                        <button className="text-sm">Edit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                    </article>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>



    )
}

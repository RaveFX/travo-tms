import { Typography, Avatar, Rating } from "@material-tailwind/react";
// import Sidebar from '../../components/sidebar';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Sidebar from '../../components/Travel_guide/sidebar1';

import TopNavbar from '../../components/Travel_guide/topNavbar';

export function rating() {
    const [reviews, setReview] = useState([]);
    const user_id = sessionStorage.getItem('user_id');


    useEffect(() => {
        loadReview();
    }, []);

    const loadReview = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/guide/reviews/${user_id}`)
        setReview(result.data);
    }
    const topnav = [
        { path: "/travel_guide_profile" }
    ]

    return (

        <div className='flex overflow-hidden'>
            <div><Sidebar /></div>

            <div className='h-screen flex  flex-grow flex-col overflow-y-auto flex-1'>
                <div>
                    <div>

                        {topnav.map((nav, index) => (
                            <TopNavbar key={index} path={nav.path} />
                        ))}
                    </div>
                </div>
                {reviews.map((review) => (
                    <div className=' flex sm:flex-row flex-wrap  w-full h-screen overflow-y-auto flex-1 my-5 xs:justify-center'>
                        <div className="w-[300px] bg-back m-3 p-5">
                            <div className="flex my-10 ">
                                <div className="w-1/2"><p></p></div>
                                <div className="w-1/2 justify-end">
                                    <Rating value={review.stars} readonly />
                                </div>
                            </div>
                            <div className="h-[300px]">
                                <p className="mb-6 font-medium">{review.review} </p>
                            </div>
                            <div className="flex">
                                <div className="w-1/6">
                                    <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                </div>
                                <div className="w-1/2">
                                    <p>{review.fname } {review.lname}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default rating



import React from 'react';

import Sidebar from '../../components/store/sidebar';
import TopNavbar from '../../components/store/topNavbar';

const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;

    return (
        <div className="flex">
            {[...Array(filledStars)].map((_, index) => (
                <svg
                    key={index}
                    className="w-4 h-4 fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 1.58a1 1 0 011.39 0l2.56 2.61a1 1 0 01.3 1.08l-.6 2.91a1 1 0 01-1.45.66L10 7.36a1 1 0 00-1.18 0l-2.42 1.4a1 1 0 01-1.45-.66l-.6-2.91a1 1 0 01.3-1.08L8.6 1.58a1 1 0 011.4 0zM10 17a1 1 0 01-.68-.26L5.44 13.1a1 1 0 01.74-1.68l3.51-.51a1 1 0 01.79.46l3.16 5.2a1 1 0 01-.68 1.56H10zm9-4a1 1 0 01-.68-.26L14.44 9.1a1 1 0 01.74-1.68l3.51-.51a1 1 0 01.79.46l3.16 5.2a1 1 0 01-.68 1.56H19z"
                        clipRule="evenodd"
                    />
                </svg>
            ))}
            {[...Array(remainingStars)].map((_, index) => (
                <svg
                    key={index}
                    className="w-4 h-4 fill-current text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 1.58a1 1 0 011.39 0l2.56 2.61a1 1 0 01.3 1.08l-.6 2.91a1 1 0 01-1.45.66L10 7.36a1 1 0 00-1.18 0l-2.42 1.4a1 1 0 01-1.45-.66l-.6-2.91a1 1 0 01.3-1.08L8.6 1.58a1 1 0 011.4 0zM10 17a1 1 0 01-.68-.26L5.44 13.1a1 1 0 01.74-1.68l3.51-.51a1 1 0 01.79.46l3.16 5.2a1 1 0 01-.68 1.56H10zm9-4a1 1 0 01-.68-.26L14.44 9.1a1 1 0 01.74-1.68l3.51-.51a1 1 0 01.79.46l3.16 5.2a1 1 0 01-.68 1.56H19z"
                        clipRule="evenodd"
                    />
                </svg>
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div className="flex ">
                        <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
                            <p>
                                Esther creates truly beautiful components,
                                you should definitely work with her. The end
                                results are always worth it. A great find!
                            </p>
                            <div className='mt-5 flex items-center'>
                                <img src='https://picsum.photos/60/60' alt="User" className='rounded-full' />
                                <div className="ml-3">
                                    <h3 className="font-semibold">Lana Del Rey</h3>
                                    <StarRating rating={4} />
                                </div>
                            </div>
                        </div>
                        <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
                            <p>
                                Esther creates truly beautiful components,
                                you should definitely work with her. The end
                                results are always worth it. A great find!
                            </p>
                            <div className='mt-5 flex items-center'>
                                <img src='https://picsum.photos/60/60' alt="User" className='rounded-full' />
                                <div className="ml-3">
                                    <h3 className="font-semibold">Lana Del Rey</h3>
                                    <StarRating rating={4} />
                                </div>
                            </div>
                        </div>

                        <div className="max-w-xs mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
                            <p>
                                Esther creates truly beautiful components,
                                you should definitely work with her. The end
                                results are always worth it. A great find!
                            </p>
                            <div className='mt-5 flex items-center'>
                                <img src='https://picsum.photos/60/60' alt="User" className='rounded-full' />
                                <div className="ml-3">
                                    <h3 className="font-semibold">Ariel</h3>
                                    <StarRating rating={5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    );
};

export default Testimonials;


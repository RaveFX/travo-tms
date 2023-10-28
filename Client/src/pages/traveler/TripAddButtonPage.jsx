
import Footers from "../../components/home-footer";
import Navingation_home from "../../components/homenavbar";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//import hero from "public/hero.png"

function TripAddButton() {

    const [trip_id, setTripId] = useState(null);
    const [uniqueLink, setUniqueLink] = useState(null);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (isLoading) {
            return;
        }
        const currentPath = window.location.pathname;

        if (currentPath.startsWith('/travo/text/')) {
            const pathParts = currentPath.split('/');
            const pathTripId = pathParts[3];
            const pathUniqueLink = pathParts[4];

            setIsLoading(true);


            axios.get(`http://localhost:8080/api/v1/trip/checkTrip/${pathTripId}/${pathUniqueLink}`)
                .then((response) => {
                    const exists = response.data;
                    console.log("Type of exists", typeof exists);
                    console.log("Exists", exists);
                    if (exists === 1) {
                        navigate(`/addtripsignin/${pathTripId}`);
                    } else {
                        setMessage('Something went wrong. Please try again later.............');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('Something went wrong. Please later.');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setMessage('Invalid URL');
        }
    };
    return (
        <div
            className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"
            style={{
                backgroundImage: "url('/addtrip.jpg')",
            }}
        >
            <Navingation_home />
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div class="text-center lg:w-5/12 w-full">
                    <h3 className="mt-3 mb-0 text-7xl font-bold leading-tight" style={{ color: 'black' }}>
                        Join with your friends
                    </h3>

                    <p className="text-2xl mb-8 text-white drop-shadow-md" style={{ color: 'black' }}>
                        Travo makes your traveling life easier by streamlining all your travel needs under a single roof!
                    </p>
                    <div className="flex justify-center mt-10 mb-3">

                        <div>
                            <button
                                className="h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold"
                                onClick={handleButtonClick}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Loading...' : 'Join trip'}
                            </button>

                            {trip_id && uniqueLink ? (
                                <div>
                                    <p>Trip ID: {trip_id}</p>
                                    <p>Unique Link: {uniqueLink}</p>
                                    {/* Additional content or redirection logic can go here */}
                                </div>
                            ) : (
                                <p>{message}</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <Footers />
        </div>
    );
}

export default TripAddButton;

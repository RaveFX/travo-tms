import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function TripAddButton() {
    const [tripId, setTripId] = useState(null);
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


            axios.get(`http://localhost:8080/api/v1/trips/checkTrip/${pathTripId}/${pathUniqueLink}`)
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
        <div>
            <button
                className="h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold"
                onClick={handleButtonClick}
                disabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Add to trip'}
            </button>

            {tripId && uniqueLink ? (
                <div>
                    <p>Trip ID: {tripId}</p>
                    <p>Unique Link: {uniqueLink}</p>
                    {/* Additional content or redirection logic can go here */}
                </div>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
}

export default TripAddButton;

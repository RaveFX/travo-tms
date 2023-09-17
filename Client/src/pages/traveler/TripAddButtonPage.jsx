import React, { useState } from 'react';
import axios from 'axios';

function TripAddButton() {
    const [tripId, setTripId] = useState(null);
    const [uniqueLink, setUniqueLink] = useState(null);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        // Prevent multiple clicks while loading
        if (isLoading) {
            return;
        }

        const currentPath = window.location.pathname;

        if (currentPath.startsWith('/travo/text/trip/')) {
            const pathParts = currentPath.split('/');
            const pathTripId = pathParts[4];
            const pathUniqueLink = pathParts[5];

            setIsLoading(true);

            // Make an API request to check if the tripId exists in the database
            axios
                .get(`http://localhost:8080/api/v1/trips/checkTrip/${pathTripId}/${pathUniqueLink}`)
                .then((response) => {
                    // if (response.data.exists && response.data.uniqueLink === pathUniqueLink) {

                    //     setTripId(pathTripId);
                    //     setUniqueLink(pathUniqueLink);

                    // } else {
                    //     setMessage('Something went wrong. Invalid URL.');
                    // }
                    const exists = response.data;
                    if (exists) {
                        // The trip ID exists, you can continue with your logic
                    } else {
                        // Handle the case where the trip ID does not exist
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('Something went wrong. Please try again later.');
                })
                .finally(() => {
                    // Set loading state to false after the API request is complete
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

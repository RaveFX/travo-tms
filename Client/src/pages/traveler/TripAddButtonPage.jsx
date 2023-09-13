import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@material-tailwind/react";




// const TripAddButtonPage = () => {
//     return <Button>Join to trip</Button>;
// };

// export default TripAddButtonPage;



function TripAddButtonPage({ tripId }) {
    const [joining, setJoining] = useState(false);

    const handleJoin = async () => {
        // Check if the user is logged in (you need to implement your own authentication)
        const isAuthenticated = checkAuthentication();

        if (!isAuthenticated) {
            // If not authenticated, redirect to login page
            window.location.href = '/login';
            return;
        }

        setJoining(true);

        try {
            // Send a request to join the trip
            await axios.post(`/api/trips/join/${tripId}`);
            // Redirect to the trip planner page after joining
            window.location.href = `/trip/${tripId}/planner`;
        } catch (error) {
            console.error('Error joining the trip:', error);
            setJoining(false);
        }
    };

    return (
        <Button onClick={handleJoin} disabled={joining}>Join to trip</Button>
        // <button onClick={handleJoin} disabled={joining}>
        //     {joining ? 'Joining...' : 'Join Trip'}
        // </button>
    );
}

export default TripAddButtonPage;

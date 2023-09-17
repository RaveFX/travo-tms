import React, { useEffect } from 'react';

function TripAddButton() {
    useEffect(() => {
        console.log("eeeee");
        const currentPath = window.location.pathname;

        if (currentPath.startsWith('/travo/text/trip/')) {
            const pathParts = currentPath.split('/');
            const tripId = pathParts[4];
            const uniqueLink = pathParts[5];

            // Implement your logic based on tripId and uniqueLink
            if (tripId === 'someValue' && uniqueLink === 'someLink') {
                // Redirect to a specific page or do something else
                window.location.href = '/specific-page';
            } else {
                // Handle other cases or display content based on the parameters
                // For example, display the tripId and uniqueLink
                console.log('Trip ID:', tripId);
                console.log('Unique Link:', uniqueLink);
            }
        } else {
            // Handle cases where the URL doesn't match the desired pattern
            console.log('Invalid URL');
        }
    }, []);

    return <div>This is the TripAddButton page.</div>;
}

export default TripAddButton;

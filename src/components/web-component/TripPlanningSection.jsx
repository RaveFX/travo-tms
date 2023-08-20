import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';

const ongoingTrips = [
  {
    id: 1,
    name: 'Summer Getaway',
    startDate: '2023-08-15',
    endDate: '2023-08-20',
  },
  {
    id: 2,
    name: 'Mountain Adventure',
    startDate: '2023-09-10',
    endDate: '2023-09-15',
  },
  // Add more ongoing trips
];

const OngoingTripsSection = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Ongoing Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ongoingTrips.map((trip) => (
          <Link key={trip.id} to={`/edit-trip/${trip.id}`}>
            <Card className="cursor-pointer">
              <CardHeader className="rounded-lg m-2" shadow={false} floated={false}>
                <Typography
                  color="blue-gray"
                  className="text-sm font-bold font-poppins"
                >
                  {trip.name}
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="small"
                  color="red"
                  className="font-bold text-xs mb-2 font-poppins opacity-75 mx-5"
                >
                  Start Date: {trip.startDate}
                </Typography>
                <Typography
                  variant="small"
                  color="red"
                  className="mb-2 text-xs w-[75%] bg-slate-300 p-1.5 font-poppins opacity-75 rounded-lg mx-6"
                >
                  End Date: {trip.endDate}
                </Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
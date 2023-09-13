import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SwiperCard from '../../components/web-component/SwiperCard';
import TabBar from '../../components/web-component/TabBar';
import PopupModal from '../../components/web-component/PopupModal';
import { Button } from "@material-tailwind/react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";


import axios from 'axios';

function Mytrips() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user_id = sessionStorage.getItem('user_id');



  const createTrip = async () => {
    try {
      // Send a POST request to create a trip for the user
      const response = await axios.post('http://localhost:8080/api/v1/trips/create', {
        trip_admin: user_id, // Pass the user_id as tripAdmin in the request body
        // Include any other necessary data related to the trip here
      });

      // After successfully creating the trip, you can handle the response from the backend if needed
      console.log('Trip created:', response.data);

      // Get the trip ID from the response (assuming it's available in the response data)
      const tripId = response.data.tripId;

      // Redirect to the specific page for the newly created trip using navigate
      navigate(`/traveler/trip-planner/${tripId}`); // Replace '/trip/${tripId}' with your actual route path
    } catch (error) {
      // Handle any errors, e.g., display an error message
      console.error('Error creating trip:', error);
    }
  }



  const data = [
    {
      label: "All Trips",
      value: "all trips",
      desc: ``,

    },
    {
      label: "Private Trips",
      value: "private",
      desc: ``,
    },
    {
      label: "Public Trips",
      value: "public",
      desc: ``,
    },
    {
      label: "My Saves",
      value: "saved",
      desc: ``,
    },
  ];
  //   const [activeTab, setActiveTab] = React.useState("all trips");
  const handleCreateTripClick = () => {
    setIsOpen(true);
  };

  const handleOpenCalander = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="My Trips" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
        <TopNavbar />
        <div className='flex justify-between'>
          <div className="w-[70%] pt-8 ">
            <TabBar data={data} />
          </div>
          <Button
            className='h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'
            onClick={handleCreateTripClick}>
            Create Trip
          </Button>
          {/* <Link to="/traveler/trip-planner/"> */}
          <Button onClick={createTrip} className='h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'>
            Create Trip
          </Button>

        </div>
        <SwiperCard />
        <PopupModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Mytrips;

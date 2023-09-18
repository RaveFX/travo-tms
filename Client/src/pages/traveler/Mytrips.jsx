import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperCard from '../../components/web-component/SwiperCard';
import TabBar from '../../components/web-component/TabBar';
import PopupModal from '../../components/web-component/PopupModal';
import { Button } from "@material-tailwind/react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import axios from "../../api/axios";

function Mytrips() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [tripDetails, setTripDetails] = useState([]);

  // const handleNavigate = () => {
  //   // Example: Navigate to '/other-page' when the button is clicked
  //   navigate('/planner');
  // };

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


useEffect(() => {
  const getTripDetails = async () => {
    try {
      let response = await axios.get(`/trips/all-trips`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.data);
      setTripDetails(response.data);

    } catch (err) {
      console.error(err);
    }
  };

  getTripDetails();
}, []);


const handleCreateTripClick = () => {
  setIsOpen(true);
};

const handleOpenCalander = () => {
  setIsOpen(true);
};
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar active="My Trips"/>
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
          </div>
          {tripDetails.length === 0 && <div className="flex justify-center items-center h-[500px]"> No Trips Found </div>}
          {tripDetails.length != 0 && <SwiperCard tripDetails={tripDetails}/>}
          <PopupModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}

export default Mytrips;

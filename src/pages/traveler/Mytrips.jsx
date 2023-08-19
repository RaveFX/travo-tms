import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperCard from '../web-component/SwiperCard';
import TabBar from '../web-component/TabBar';
import PopupModal from '../web-component/PopupModal';
import { Button } from "@material-tailwind/react";
import Sidebar from "../web-component/Sidebar";
import TopNavbar from "../web-component/Navbar";


function Mytrips() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
          <SwiperCard/>
          <PopupModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}

export default Mytrips;

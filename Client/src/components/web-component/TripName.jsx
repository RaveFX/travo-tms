import React,{useState} from "react";
import { SubscriptionPopover } from "./Invitation";
import MemberPopOver from "./Members";

import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  Avatar,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
import { PencilSquareIcon, UserCircleIcon, UserPlusIcon, CalendarDaysIcon} from "@heroicons/react/24/outline";


export function TripNameBar({ trip_name, description }) {
  
  const displayTripName = trip_name || 'Trip Name Goes here';
  const displayTripDescription = description || 'Description for the trip';

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [isMemberOpen, setMemberOpen] = useState(false);

  

  const handleAvatarClick = () => {
    setIsMemberOpen(true);
    setIsPopupOpen(true);
  };


  const navigate = useNavigate();

  const handleNavigate = () => {
    // Example: Navigate to '/other-page' when the button is clicked
    navigate('/trip-planner');
  };
  return (
    <>
    <Navbar className=" mx-auto max-w-[100%] px-4 py-3 rounded-none bg-[#E3E3E3] h-50 !shadow-0 shadow-md backdrop-saturate-0 backdrop-blur-0 bg-opacity-80 border border-none text-white mx-auto max-w-[100%] px-4 py-3 rounded-none">
      <div className="flex flex-wrap items-center justify-between gap-4 text-blue-gray-900">
        <div className="relative flex flex-col w-full gap-0.5 md:w-max rounded-full">
            <div className='flex justify-center'>
               <h1 className='text-2xl font-poppins font-extrabold m-1 text-[#578B6A]'>{displayTripName}</h1>
               <button><PencilSquareIcon  className='w-5 h-5 m-1'/></button>

            </div>
            <div className='flex'>
              <p className='text-1 font-poppins m-1 text-[#5F647E]'>{displayTripDescription}</p>
              <button className=''><PencilSquareIcon  className='w-4 h-4 m-1'/></button>
            </div>
                    
        </div>
        {/* {isSubSidebarOpen && <div className="flex flex-row items-center justify-between gap-y-4 m-7">
          <Button onClick={handleNavigate} className='!absolute rounded-full p-3 m-0 bg-[#57CC99] shadow-none focus:shadow-none hover:shadow-none active:shadow-none'>
            <CalendarDaysIcon className='w-[30px] h-[30px] stroke-[#FFFFFF]' />
          </Button>
          
        </div>} */}
              
        <div className="ml-auto flex flex-row gap-6 md:mr-4">
          <MemberPopOver className="z-[1000]"/>
          <SubscriptionPopover />
         
          {/* <Button className='bg-white hover:bg-[#F5F1F1] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] rounded-full w-[140px] h-[44px] p-0 m-0 relative -left-[12%] z-5 shadow-[0 2px 4px rgba(0,0,0,0.15)]' onClick={handleAvatarClick}>
            <div className='flex justify-center gap-4 m-0'>
              <UserPlusIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="3" />
              <p className='font-extrabold font-poppins text-[#000000] p-0 m-0'>Invite</p>
            </div>
          </Button> */}
        </div>
                
      </div>
    </Navbar>
    {/* <Invite /> */}
    {/* <Members isOpen={isMemberOpen} setIsOpen={setMemberOpen} ></Members> */}
  </>
  );
}
import React from 'react';
import Sidebar from '../../pages/web-component/Sidebar';
import TopNavbar from '../../pages/web-component/Navbar';
import Calendar from '../web-component/calander';
import { useNavigate } from 'react-router-dom';

import {
  Navbar,
  Badge,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { PencilSquareIcon, UserCircleIcon, UserPlusIcon } from "@heroicons/react/24/outline";

function TripPlanner() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Example: Navigate to '/other-page' when the button is clicked
    navigate('/other-page');
  };

  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar active="My Trips"/>
        <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
          <TopNavbar />
          <div className='flex justify-between'>
            <Navbar className="mx-auto max-w-[100%] px-4 py-3 rounded-none bg-[#E3E3E3] h-50 !shadow-0 z-0  shadow-md backdrop-saturate-0 backdrop-blur-0 bg-opacity-80 border border-none text-white mx-auto max-w-[100%] px-4 py-3 rounded-none">
              <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                <div className="relative flex flex-col w-full gap-2 md:w-max rounded-full">
                  <div className='flex justify-center'>
                    <h1 className='text-2xl font-poppins font-extrabold m-1 text-[#578B6A]'>Trip Name Goes here</h1>
                    <button><PencilSquareIcon  className='w-5 h-5 m-1'/></button>

                  </div>
                  <div className='flex'>
                    <p className='text-1 font-poppins m-1 text-[#5F647E]'>Description for the trip</p>
                    <button className=''><PencilSquareIcon  className='w-4 h-4 m-1'/></button>
                  </div>
                    
                </div>
              
                <div className="ml-auto flex md:mr-4">
                  <UserCircleIcon className="h-[50px] w-[50px]" />
                  <button className='bg-white rounded-full w-[160px] relative -left-[10%] z-5 drop-shadow-3 hover:bg-[#F5F1F1] hover:shadow-4'>
                    <div className='flex justify-center gap-4 m-3'>
                      <UserPlusIcon className='w-5 h-5' strokeWidth="3" />
                      <p className='font-extrabold font-poppins'>Invite</p>
                    </div>
                    
                  </button>
                </div>
                
              </div>
            </Navbar>
          </div>
          <Calendar />
      </div>
    </div>
  );
}

export default TripPlanner;

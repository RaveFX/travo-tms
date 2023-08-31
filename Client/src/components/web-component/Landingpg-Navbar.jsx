// src/TopNavbar.js
import React from 'react';
import {
  Typography,
} from "@material-tailwind/react";
const TopNavbarLanding = () => {

  
  return (
    <nav className="bg-[#FFFFFF] ">
      <div className="mx-auto w-full pr-2 pl-2 flex items-center justify-between">
        <div className="">
            <img src="/images/Lpg-logo.svg" alt="Logo" className="w-[112px] h-[62px]" />
        </div>
        <div className="flex space-x-[65px] font-poppins">
          <div>
            <a href="#" className="text-Black text-[#2AB57D] hover:font-bold">
              Trending
            </a>
          </div>
          <div>
            <a href="#" className="text-Black text-[#2AB57D] hover:font-bold">
              Community
            </a>
          </div>
          <div>
            <a href="#" className="text-Black text-[#2AB57D] hover:font-bold">
              About us
            </a>
          </div>
          <div>
            <a href="#" className="text-Black text-[#2AB57D] hover:font-bold">
              Contact
            </a>
          </div>
        </div>
        <div className='flex font-poppins'>
          <Typography color="black" className="font-bold text-[#57CC99] flex align-center" onClick="">Become a Service Provider</Typography>

        </div>
        <div className='flex justify-end gap-2'>
            <button className="text-Black px-4 py-2 rounded-full bg-[#2AB57D] text-[#FFFFFF]">
             Sign in
            </button>
            <button className="text-Black px-4 py-2 rounded-full bg-[#2AB57D] text-[#FFFFFF]">
             Sign up
            </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbarLanding;

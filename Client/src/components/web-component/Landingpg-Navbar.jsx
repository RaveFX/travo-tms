// src/TopNavbar.js
import React from 'react';

const TopNavbarLanding = () => {
  return (
    <nav className="bg-[#FFFFFF] ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
            <img src="/images/Lpg-logo.svg" alt="Logo" className="w-[112px] h-[62px]" />
        </div>
        <div className="flex space-x-[65px] font-poppins">
          <div>
            <a href="#" className="text-Black hover:text-[#2AB57D] hover:font-bold">
              Trending
            </a>
          </div>
          <div>
            <a href="#" className="text-Black hover:text-[#2AB57D] hover:font-bold">
              Community
            </a>
          </div>
          <div>
            <a href="#" className="text-Black hover:text-[#2AB57D] hover:font-bold">
              About us
            </a>
          </div>
          <div>
            <a href="#" className="text-Black hover:text-[#2AB57D] hover:font-bold">
              Contact
            </a>
          </div>
        </div>
        <div className='flex justify-end'>
            <button className="bg-white text-Black px-4 py-2 rounded-full hover:bg-[#2AB57D] hover:text-[#FFFFFF]">
            Sign in
            </button>
            <button className="bg-white text-Black px-4 py-2 rounded-full hover:bg-[#2AB57D] hover:text-[#FFFFFF]">
            Sign up
            </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbarLanding;

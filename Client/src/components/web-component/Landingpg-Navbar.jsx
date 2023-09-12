import React from "react";
import { Typography } from "@material-tailwind/react";

const TopNavbarLanding = () => {
  return (
    <nav className="bg-[#FFFFFF] p-2">
      <div className="mx-auto w-full flex items-center justify-between">
        <div className="w-[150px] h-[50px]">
          <img
            src="/images/Lpg-logo.svg"
            alt="Logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-x-10 font-poppins md:flex-row">
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
        <a href="#" className="flex font-poppins text-[#57CC99] items-center w-fit">
          <Typography color="black" className="font-bold ">
            Become a Service Provider
          </Typography>
        </a>
        <div className="flex items-center space-x-2 md:space-x-5">
          <button className="text-Black px-3 py-1 rounded-full bg-[#2AB57D] text-[#FFFFFF] text-s md:text-base">
            Sign in
          </button>
          <button className="text-Black px-3 py-1 rounded-full bg-[#2AB57D] text-[#FFFFFF] text-s md:text-base">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbarLanding;

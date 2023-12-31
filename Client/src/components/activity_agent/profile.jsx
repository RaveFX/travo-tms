import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <div className=" flex flex-wrap   justify-center m-5 ">
      <div className="container lg:w-1/2 xl:w-full sm:w-full md:w-2/3  bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className=" h-32 overflow-hidden">
          {/* <p className='justify-start '>Edit</p> */}
          <img
            className="w-full"
            src="https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full   "
            src="/activity_agent/ravindu.png"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">Ravindu Viranga</h2>
            <a
              className="text-gray-400 mt-2 hover:text-blue-500"
              href="#"
              target="BLANK()"
            >
              ravinduviranga20@gmail.com
            </a>
            <p className="mt-2 text-gray-500 text-sm">Anuradhapura </p>
          </div>
          <hr className="mt-6" />
          <div className="flex  bg-gray-50 ">
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              {/* <p><span className="font-semibold"></span> Edit Profile</p> */}
              <Popover placement="bottom">
                <PopoverHandler>
                  <Link to="./edit_profile">
                    <Button>Edit Profile</Button>
                  </Link>
                </PopoverHandler>
              </Popover>
            </div>
            <div className="border"></div>
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              {/* <p><span className="font-semibold"></span> Edit Profile</p> */}
              <Popover placement="bottom">
                <PopoverHandler>
                  <Link to="#">
                    <Button>Upgrade Profile</Button>
                  </Link>
                </PopoverHandler>
              </Popover>
            </div>
            <div className="border"></div>
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              {/* <p><span className="font-semibold"></span> Edit Profile</p> */}
              <Popover placement="bottom">
                <PopoverHandler>
                  <Link to="#">
                    <Button>Settings</Button>
                  </Link>
                </PopoverHandler>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

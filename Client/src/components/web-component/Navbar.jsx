// src/TopNavbar.js
import React, { useEffect, useState } from "react";
import { NotificationsMenu } from "./NotificationBell";
import axios from "../../api/axios";
import {
  Navbar,
  Badge,
  IconButton,
  Button,
  Input,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  BellIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TopNavbar() {
  const [userData, setUserData] = useState(null);
  const user_id = sessionStorage.getItem("user_id");
  const profileImage = sessionStorage.getItem("profileImage");

  const [hasNewNotification, setHasNewNotification] = useState(true);

  const navigate = useNavigate();

  const handleNavigate = () => {
    // Example: Navigate to '/other-page' when the button is clicked
    navigate("/traveler/change-role");
  };
  return (
    <Navbar className="font-poppins mx-auto max-w-[100%] px-4 py-3 rounded-none flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <div className="relative flex w-full gap-2 md:w-max rounded-full">
          <Input
            type="search"
            label="Type here..."
            className="pr-20 rounded-full style-none"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            className="!absolute right-1 top-1 rounded-full bg-[#57CC99] hover:shadow-none active:shadow-none"
          >
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="!absolute right-1 top-1 ml-auto flex gap-2 md:mr-4">
          {/* <Button variant="text" color="blue-gray" className='p-0 m-0 hover:shadow-none active:shadow-none focus:shadow-none'> */}
          <Typography
            color="black"
            className="text-sm font-bold text-[#57CC99] flex align-center mt-3.5"
            onClick={handleNavigate}
          >
            Become a Service Provider
          </Typography>
          <NotificationsMenu
            color="black"
            className="h-[60px] w-[60px] relative -top-[-14px] -right-[1px] hover:shadow-none active:shadow-none focus:shadow-none "
          />
          {hasNewNotification && (
            <Badge
              className="relative -top-[-15px] -right-[20px] bg-[#57CC99] z-6"
              style={{ top: "-40px", right: "-2px" }}
            />
          )}

          {/* </Button> */}

          <Link
            variant="text"
            color="blue-gray"
            className="p-0 m-0 hover:shadow-none active:shadow-none focus:shadow-none"
            to="/service_provider"
          >
            <Avatar
              variant="circular"
              alt="candice"
              src={`data:application/img;base64,${profileImage}`}
              className="w-9 h-9 p-0 m-0"
            />
          </Link>
        </div>
      </div>
    </Navbar>
  );
}

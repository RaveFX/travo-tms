import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  MapIcon,
  HeartIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  PowerIcon,
  ChevronLeftIcon,
  CheckIcon,
  ClipboardDocumentIcon,
  BookmarkIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export default function SideBar(props) {
  const { active } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [isIconRotated, setIsIconRotated] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
    setIsIconRotated((prevIsIconRotated) => !prevIsIconRotated);
  };

  const navList = [
    {
      icon: <RectangleGroupIcon className="h-5 w-5" />,
      name: "Dashboard",
      link: "/hotelagent_dashboard",
    },
    {
      icon: <MapIcon className="h-5 w-5" />,
      name: "Reservations",
      link: "/hotelagent_reservations",
    },
    {
      icon: <HeartIcon className="h-5 w-5" />,
      name: "Rooms",
      link: "/hotelagent_rooms",
    },
    {
      icon: <UserGroupIcon className="h-5 w-5" />,
      name: "Advertisements",
      link: "/community",
    },
    {
      icon: <BanknotesIcon className="h-5 w-5" />,
      name: "Transactions",
      link: "/hotelagent_transactions",
    },
    {
      icon: <StarIcon className="h-5 w-5" />,
      name: "Reviews",
      link: "/hotelagent_reviews",
    },
    {
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      name: "Settings",
      link: "/settings",
    },
  ];

  // const wValue = isSidebarOpen ? "w-[16.25rem]" : "w-[4rem]";

  return (
    <Card
      className={`${
        isSidebarOpen ? "w-[16.25rem]" : "w-[4rem]"
      } font-poppins bg-gradient-to-b from-[#377A85] to-[#72C075]  h-screen rounded-none transition-all duration-300 ease-in-out`}
    >
      <div className="mt-10 mb-10">
        <Typography variant="h5" color="white">
          <img
            src={isSidebarOpen ? "/logo.png" : "/minilogo.png"}
            alt="Logo"
            className={
              isSidebarOpen
                ? "max-w-[60%] h-15 ml-10 "
                : "mb-2 mt-4 ml-2 pb-4 w-12"
            }
          />
          {/* <img src="/images/logo.png" alt="Logo" className="" /> */}
        </Typography>
      </div>

      <button onClick={handleSidebarToggle} className="z-10 ">
        <ChevronLeftIcon
          className={`h-[24\px] w-[24px] bg-[#2AB57D] rounded-full z-10 gap-3 p-1 absolute -right-[0.7rem] ${
            isIconRotated
              ? "rotate-180 transition-all duration-300 ease-in-out"
              : "transition-all duration-300 ease-in-out"
          }`}
        />
      </button>
      {/* <button onClick={handleSidebarToggle}><ChevronLeftIcon className="h-[24px] w-[24px] bg-[#2AB57D] rounded-full p-1 ml-[250px] " /></button> */}

      <List
        className={`${
          isSidebarOpen ? "ml" : "ml-0"
        } text-white text-sm gap-1.5 self-center  flex `}
      >
        {navList.map((item, key) => (
          <>
            <Link
              to={item.link}
              className="h-16 w-[100%] !style:none"
              key={key}
            >
              <ListItem
                className={`gap-[2rem]   hover:bg-[#FFFFFF] hover:bg-opacity-30 ${
                  active === item.name ? "active" : ""
                }`}
              >
                {item.icon}
                <span className={`${isSidebarOpen ? "" : "hidden"}`}>
                  {item.name}
                </span>
              </ListItem>
            </Link>
          </>
        ))}
      </List>

      <List
        className={`!min-w-full Flex flex-col mt-40 text-white items-center`}
      >
        <ListItem
          className={`hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white`}
        >
          <ListItemPrefix>
            <PowerIcon className={`${isSidebarOpen ? "ml-10" : ""} h-5 w-5 `} />
          </ListItemPrefix>
          <span className={`${isSidebarOpen ? "ml-10" : "hidden"}`}>
            Log Out
          </span>
        </ListItem>
      </List>
    </Card>
  );
}

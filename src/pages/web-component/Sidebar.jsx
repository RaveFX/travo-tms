// // src/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



// Rest of your code...


// Rest of your code...


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
    ArrowSmallRightIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
  } from "@heroicons/react/24/outline";


  export default function Sidebar(props) {

    const {active} = props;

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const [isIconRotated, setIsIconRotated] = useState(false);

    const handleSidebarToggle = () => {
      setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
      setIsIconRotated((prevIsIconRotated) => !prevIsIconRotated)
    };

    const navList = [
      {icon : <RectangleGroupIcon className="h-5 w-5" />, name : "Dashboard", link : "/dashboard"},
      {icon : <MapIcon className="h-5 w-5" />, name : "My Trips", link : "/mytrips"},
      {icon : <HeartIcon className="h-5 w-5" />, name : "Favourite", link : "/favourite"},
      {icon : <UserGroupIcon className="h-5 w-5" />, name : "Community", link : "/community"},
      {icon : <BanknotesIcon className="h-5 w-5" />, name : "Transactions", link : "/transactions"},
      {icon : <Cog6ToothIcon className="h-5 w-5" />, name : "Settings", link : "/settings"},
    ]

    return (
      <Card
          className={`${
            isSidebarOpen ? 'w-[16.25rem]' : 'w-[6.5rem]'
          } bg-gradient-to-b from-[#377A85] to-[#72C075]  h-screen rounded-none transition-all duration-300 ease-in-out`}
        >
          
          <div className="">
              <Typography variant="h5" color="white">
                <img
                  src={isSidebarOpen ? '/images/logo.png' : '/images/minilogo.svg'}
                  alt="Logo"
                  className="mb-2 mt-4 pb-4"
                />
                {/* <img src="/images/logo.png" alt="Logo" className="" /> */}
            </Typography>
          </div>
          
          <button onClick={handleSidebarToggle} className='z-10 '>
          <ChevronLeftIcon
                className={`h-[24px] w-[24px] bg-[#2AB57D] rounded-full z-10 gap-3 p-1 absolute -right-[0.7rem] ${
                  isIconRotated ? 'rotate-180 transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out'
                }`}
              />
          </button>
          {/* <button onClick={handleSidebarToggle}><ChevronLeftIcon className="h-[24px] w-[24px] bg-[#2AB57D] rounded-full p-1 ml-[250px] " /></button> */}
          
          <List className={`!min-w-full text-white gap-1.5 flex justify-items-center`}>
            {
            navList.map((item, key) => (
              <>
                <Link to={item.link} className='w-[100%] !style:none' key={key}>
                  <ListItem className={`gap-[2rem] hover:bg-[#FFFFFF] hover:bg-opacity-30 ${active === item.name ? "active" : ""}`}>
                    {item.icon}
                    <span className={`${isSidebarOpen? "": "hidden"}`}>
                      {item.name}
                    </span>
                  </ListItem>
                </Link>
              </>
            ))
            }
          </List>
          <List className={`!min-w-full Flex flex-col mt-[150px] text-white items-center`}>
            <ListItem className={`hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white`}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              <span className={`${isSidebarOpen? "": "hidden"}`}>
                Log Out
              </span>
              
            </ListItem>
          </List>
        </Card>
    
    );
  }
 

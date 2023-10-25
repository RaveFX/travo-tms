// src/TopNavbar.js
import React, { useState } from 'react';
import { NotificationsMenu } from './NotificationBell';

import {
    Navbar,
    Badge,
    IconButton,
    Button,
    Input,
    Avatar,
    Typography,
  } from "@material-tailwind/react";
  import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
   
  export default function TopNavbar() {
    const role = sessionStorage.getItem('role');
    const user_id = sessionStorage.getItem('user_id');

    const [hasNewNotification, setHasNewNotification] = useState(true);
    return (
      <Navbar className="mx-auto max-w-[100%] px-4 py-6 rounded-none flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
          
        
          <div className="!absolute right-1 top-1 ml-auto flex gap-2 md:mr-4">
          
            {/* <Button variant="text" color="blue-gray" className='p-0 m-0 hover:shadow-none active:shadow-none focus:shadow-none'> */}
            <Typography color="black" className="text-sm font-bold text-[#57CC99] flex align-center mt-3" onClick="">Become a Service Provider</Typography>
            <NotificationsMenu color="black" className="h-[60px] w-[60px] relative -top-[-14px] -right-[1px] hover:shadow-none active:shadow-none focus:shadow-none "  />
              {hasNewNotification && (
              <Badge  className="relative -top-[-15px] -right-[20px] bg-[#57CC99] z-6" style={{ top: "-40px", right: "-2px" }}/>
            )}
              
            {/* </Button> */}
            
            <Link variant="text" color="blue-gray" className='p-0 m-0 hover:shadow-none active:shadow-none focus:shadow-none' to="/service_provider">
              <Avatar variant="circular" alt="candice" src='/traveler/Profile-Picture.svg' className='w-9 h-9 p-0 m-0'/>
            </Link>
          </div>
          
        </div>
      </Navbar>
    );
  }

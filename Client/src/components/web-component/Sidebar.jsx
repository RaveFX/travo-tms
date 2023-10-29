// // src/Sidebar.js
import React, { useState } from 'react';

import { Link,useNavigate } from 'react-router-dom';



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
  ShoppingCartIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  PowerIcon,
  ChevronLeftIcon,
  CheckIcon,
  ClipboardDocumentIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

// export default function Sidebar(props) {
//   const {
//     active,
//     isSubSidebarOpen,
//     setIsSubSidebarOpen,
//     setSubSidebarState,
//     subSidebarState,
//   } = props;
//   // console.log(subSidebarState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  export default function Sidebar(props) {
    const navigate = useNavigate();
  
  
    const handleLogout = () => {
      // Perform logout actions here, such as clearing user data from session/local storage
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('role');
      sessionStorage.setItem('isAuthenticated','false');
      navigate("/");
      
      // Redirect the user to the login page
      //history.push('/'); // Replace '/login' with your actual login route
    };

  const [isIconRotated, setIsIconRotated] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
    setIsIconRotated((prevIsIconRotated) => !prevIsIconRotated);
  };

  const handleSubSidebarToggle = () => {
    setIsSubSidebarOpen((prevIsSubSidebarOpen) => !prevIsSubSidebarOpen);
  };

  const navList = [
    {
      icon: <RectangleGroupIcon className="h-5 w-5" />,
      name: "Dashboard",
      link: "Dashboard",
    },
    {
      icon: <MapIcon className="h-5 w-5" />,
      name: "My Trips",
      link: "Mytrips",
      subItems: [
        {
          icon: <ClipboardDocumentIcon className="h-5 w-5" />,
          name: "Itinerary",
          link: "",
          state: 1,
        },
        {
          icon: <CheckIcon className="h-5 w-5" />,
          name: "Selections",
          link: "",
          state: 2,
        },
        {
          icon: <BookmarkIcon className="h-5 w-5" />,
          name: "Saves",
          link: "",
          state: 3,
        },
      ],
    },
    {
      icon: <ShoppingCartIcon className="h-5 w-5" />,
      name: "Travo Store",
      link: "Store",
    },
    {
      icon: <BanknotesIcon className="h-5 w-5" />,
      name: "Budget",
      link: "Budget",
    },
    {
      icon: <UserGroupIcon className="h-5 w-5" />,
      name: "Community",
      link: "community",
    },
    {
      icon: <BanknotesIcon className="h-5 w-5" />,
      name: "Transactions",
      link: "transactions",
    },
    {
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      name: "Settings",
      link: "settings",
    },
  ];

  return (
    <Card
      className={`${
        isSidebarOpen ? "w-[20rem]" : "w-[4rem]"
      } bg-gradient-to-b from-[#377A85] to-[#72C075]  h-screen rounded-none transition-all duration-300 ease-in-out`}
    >
      <div className="">
        <Typography variant="h5" color="white">
          <img
            src={isSidebarOpen ? "/images/logo.png" : "/images/minilogo.svg"}
            alt="Logo"
            className="mt-[2rem] mb-[2rem] gap-1 pb-4"
          />
          {/* <img src="/images/logo.png" alt="Logo" className="" /> */}
        </Typography>
      </div>

      <button onClick={handleSidebarToggle}  className=" ">
        <ChevronLeftIcon
          style={{ 
            zIndex: 9999,
            transform: isIconRotated ? "rotate(180deg)" : "rotate(0deg)",
           }}
          className={`h-[24px] w-[24px] bg-[#2AB57D] rounded-full  gap-3p-1 absolute right-[-1rem] top-[7rem] transition-all duration-300 ease-in-out` }
        />
      </button>
      {/* <button onClick={handleSidebarToggle}><ChevronLeftIcon className="h-[24px] w-[24px] bg-[#2AB57D] rounded-full p-1 ml-[250px] " /></button> */}

      <List
        className={`!min-w-full font-poppins text-white gap-1 flex justify-items-center ${
          isSidebarOpen ? "ml-0" : "ml-0"
        }`}
      >
        {navList.map((item, key) => (
          <React.Fragment key={key}>
            <Link
              to={`/traveler/${item.link}`}
              className="w-5!style:none"
              key={key}
            >
              <ListItem
                className={`gap-[1rem] hover:bg-[#FFFFFF] hover:bg-opacity-30 ${
                  active === item.name ? "active" : ""
                }`}
                onClick={
                  item.name === "My Trips" ? handleSubSidebarToggle : undefined
                }
              >
                {item.icon}
                <span className={`${isSidebarOpen ? "" : "hidden"}`}>
                  {item.name}
                </span>
              </ListItem>
            </Link>
            {item.name === "My Trips" && isSubSidebarOpen && (
              <div className="ml-[2rem] mt-1 space-y-1">
                {item.subItems.map((subItem, subKey) => (
                  <Link
                    to={subItem.link}
                    className="w-[100%] !style:none"
                    key={subKey}
                    onClick={() => setSubSidebarState(subItem.state)}
                  >
                    <ListItem
                      className={`gap-[1rem] hover:bg-[#FFFFFF] hover:bg-opacity-30 ${
                        subKey === subSidebarState - 1 ? "active" : ""
                      }`}
                    >
                      {subItem.icon}
                      <span className={`${isSidebarOpen ? "" : "hidden"}`}>
                        {subItem.name}
                      </span>
                    </ListItem>
                  </Link>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </List>
      <List
        className={`!min-w-fit font-poppins Flex flex-col ${
          isSubSidebarOpen ? "mt-[2rem]" : "mt-[8rem]"
        } ${isSidebarOpen ? "ml-5" : "ml-0"} text-white `}
      >
        <ListItem onClick={handleLogout}
          className={`hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white`}
        >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <span className={`${isSidebarOpen ? "" : "hidden"}`}>Log Out</span>
        </ListItem>
      </List>
    </Card>
  );
}

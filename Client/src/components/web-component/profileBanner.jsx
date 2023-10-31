import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export function Banner(props) {
  const children = props.children;

  const [userData, setUserData] = useState("");
  const [openSettings, setOpenSettings] = useState(false);
  const navigate = useNavigate();

  const user_id = sessionStorage.getItem("user_id");
  const profileImage = sessionStorage.getItem("profileImage");

  const toggleSettings = () => {
    setOpenSettings(!openSettings);
  };

  const navigateToProfile = () => {
    navigate("/community-profile"); // Use the URL path to your CreatePost component
  };

  const navigateToCreatePost = () => {
    navigate("/create-post"); // Use the URL path to your CreatePost component
  };

  const clickSearch = () => {
    console.log("Search Clicked");
    setSearching(!searching);
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        let response = await axios.get(`/traveler/details/${user_id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setUserData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getDetails();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);


  
  const handleItemClick = (item) => {
    // Handle the click event when an item in the search results is clicked
    console.log("Clicked on:", item.name);
    // You can add your custom logic here, such as navigation or other actions.
  };

  return (
    <div className="bg-white rounded-lg shadow-sm pb-4">
      <div className="absolute right-12 mt-4 rounded"></div>
      <div className="w-full h-[150px] coverImage"></div>
      <div className=" -mt-20">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row items-center">
            <img
              src={`data:application/img;base64,${profileImage}`}
              className="w-40 h-40 border-4 border-white rounded-full m-4"
              alt="Profile Image"
            />
            <Typography className="mt-4 text-3xl font-poppins font-black text-black">
              {userData.firstname} {userData.lastname}
            </Typography>
          </div>

          <div className="flex flex-row items-center">
          {children != null
              ? children
              : () => {
                  return null;
                }}
          </div>
        </div>
      </div>
    </div>
  );
}

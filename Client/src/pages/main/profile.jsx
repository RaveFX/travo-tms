import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { Button, Typography, Avatar } from "@material-tailwind/react";

function UserProfile() {
  const navigate = useNavigate();

  // You can fetch user data from an API or context
  const [userData, setUserData] = useState(null);
  const user_id = sessionStorage.getItem("user_id");
  const profileImage = sessionStorage.getItem("profileImage");

  // Fetch user data when the component mounts
  

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 mb-4">
        <TopNavbar />

        {userData ? (
          <div className="p-4">
            <Avatar
              variant="circular"
              alt="candice"
              src={`data:application/img;base64,${profileImage}`}
              className="w-20 h-20 p-0 m-0"
            />
            <Typography tag="h1" color="indigo" size="2xl" className="mt-4">
              {userData.firstname} {userData.lastname}
            </Typography>
            <Typography tag="p" color="gray" size="lg" className="mt-2">
              {userData.contact_num}
            </Typography>

            <Button
              color="indigo"
              size="lg"
              className="mt-4"
              onClick={() => navigate("/profile/settings")}
            >
              Edit Profile
            </Button>
          </div>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;

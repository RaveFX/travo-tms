import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faCar,
  faGlobe,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";

function RoleChange() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    // Handle the selected role here, e.g., update state or navigate to a new page
    // For simplicity, let's just log the selected role for now
    console.log(`Selected Role: ${role}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* <Sidebar active="Community" /> */}
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
        <TopNavbar />
        <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
          <div className="relative">
            <div className="absolute top-40 left-0 right-0 text-center p-0 bg-black-100 text-white text-shadow-20 z-[100]">
              <h1 className="text-4xl md:text-8xl font-semibold mb-4">
                Become a Service Provider
              </h1>
              <p className="text-white mb-8">
                Join our platform as a service provider and offer your travel
                planning expertise to our users.
              </p>
              <button className="bg-[#2AB57D] text-white px-4 py-2 font-semibold rounded hover:bg-[#2AB67D]">
                Become a Service Provider
              </button>
            </div>
            <div className=" absolute top-0 left-0 right-0 w-full h-[500px] z-0 object-cover bg-black opacity-70"></div>
            <video
              className="top-0 left-0 right-0 w-full h-[500px] z-0 object-cover bg-black-200"
              autoPlay
              loop
              muted
            >
              <source src="main/video.mp4" type="video/mp4" />
            </video>
          </div>
          {/* <div className="flex justify-center mt-[50px]">
            <h1 className="text-7xl font-bold text-[#57CC99]">
              Request to Become a Service Provider
            </h1>
            <div className=" absolute top-0 left-0 right-0 w-full h-[500px] z-0 object-cover bg-black opacity-70"></div>
            <video
              className="top-0 left-0 right-0 w-full h-[500px] z-0 object-cover bg-black-200"
              autoPlay
              loop
              muted
            >
              <source src="main/video.mp4" type="video/mp4" />
            </video>
          </div> */}
          <div className="flex justify-center mt-[150px]">
            {/* Role Selection Buttons */}
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Hotel Manager")}
            >
              <FontAwesomeIcon
                icon={faHotel}
                size="3x"
                className="flex flex-row mb-6"
              />
              Hotel Manager
            </button>
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Vehicle Owner")}
            >
              <FontAwesomeIcon
                icon={faCar}
                size="3x"
                className="flex flex-row mb-6"
              />
              Vehicle Owner
            </button>
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Travel Guide")}
            >
              <FontAwesomeIcon
                icon={faGlobe}
                size="3x"
                className="flex flex-row mb-6"
              />
              Travel Guide
            </button>
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Activity Agent")}
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                size="3x"
                className="flex flex-row mb-6"
              />
              Activity Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleChange;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faCar, faGlobe, faBriefcase } from "@fortawesome/free-solid-svg-icons";
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
            <div className="flex justify-center mt-[50px]">
                <h1 className="text-7xl font-bold text-[#57CC99]">Request to Become a Service Provider</h1>
            </div>
          <div className="flex justify-center mt-[150px]">
            {/* Role Selection Buttons */}
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Hotel Manager")}
            >
              <FontAwesomeIcon icon={faHotel} size="3x" className="flex flex-row mb-6" />
              Hotel Manager
            </button>
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Vehicle Owner")}
            >
              <FontAwesomeIcon icon={faCar} size="3x" className="flex flex-row mb-6" />
              Vehicle Owner
            </button>
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Travel Guide")}
            >
              <FontAwesomeIcon icon={faGlobe} size="3x" className="flex flex-row mb-6" />
              Travel Guide
            </button>
            <button
              className="bg-[#377A85] hover:scale-125 text-white font-bold py-9 px-12 rounded-lg m-8 flex flex-col items-center"
              onClick={() => handleRoleSelection("Activity Agent")}
            >
              <FontAwesomeIcon icon={faBriefcase} size="3x" className="flex flex-row mb-6" />
              Activity Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleChange;

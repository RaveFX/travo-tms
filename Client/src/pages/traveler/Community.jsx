import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";


function Community() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const handleNavigate = () => {
  //   // Example: Navigate to '/other-page' when the button is clicked
  //   navigate('/planner');
  // };


//   const [activeTab, setActiveTab] = React.useState("all trips");
const handleCreateTripClick = () => {
  setIsOpen(true);
};

const handleOpenCalander = () => {
  setIsOpen(true);
};
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar active="Community"/>
        <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
          <TopNavbar />
          {/* Cover Photo and Profile Picture Section */}
        <div className="relative overflow-hidden">
          <div
            className="bg-cover h-80 md:h-96"
            style={{ backgroundImage: `url('cover-photo.jpg')` }}
          >
            <div className="absolute bottom-0 left-4 md:left-6 pb-6 md:pb-8">
              <img
                src="profile-photo.jpg"
                alt="Profile"
                className="h-16 w-16 rounded-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;

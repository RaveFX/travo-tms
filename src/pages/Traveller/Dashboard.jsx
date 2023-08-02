import React from 'react';
import Sidebar from '../../pages/web-component/Sidebar';
import TopNavbar from '../../pages/web-component/Navbar';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Example: Navigate to '/other-page' when the button is clicked
    navigate('/other-page');
  };

  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar active="Dashboard"/>
        <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
          <TopNavbar />
          <div className='flex justify-between'>
              <h1 className='text-3xl font-poppins font-extrabold m-4 text-[#2AB57D]'>Dashboard</h1>
          </div>
          
      </div>
    </div>
  );
}

export default Dashboard;

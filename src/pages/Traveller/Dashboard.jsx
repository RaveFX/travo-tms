import React from 'react';
import Sidebar from '../../pages/web-component/Sidebar';
import TopNavbar from '../../pages/web-component/Navbar';
import CalanderMain from '../web-component/CalanderMain';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Example: Navigate to '/other-page' when the button is clicked
    navigate('/other-page');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="Dashboard" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20">
        <TopNavbar />
        <div className="flex flex-col p-4 space-y-4">
          <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D]">Dashboard</h1>
          
          {/* Grid layout for dashboard components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Component 1 */}
            <div className="bg-white p-4 shadow-md rounded-lg">
              {/* Content */}
            </div>
            
            {/* Component 2 */}
            <div className="bg-white p-4 shadow-md rounded-lg">
              {/* Content */}
            </div>
            
            {/* Component 3 */}
            <div className="bg-white p-4 shadow-md rounded-lg">
              {/* Content */}
              <CalanderMain />
            </div>
            
            {/* Add more components */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
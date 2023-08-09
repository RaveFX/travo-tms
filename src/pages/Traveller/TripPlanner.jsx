import React, { useState }  from 'react';
import Sidebar from '../../pages/web-component/Sidebar';
import TopNavbar from '../../pages/web-component/Navbar';
import Calendar from '../web-component/calander';
import BacknNext from '../web-component/BackNext';
import { TripNameBar } from '../web-component/TripName';
import { useNavigate } from 'react-router-dom';




function TripPlanner() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleBackClick = () => {
    // Navigate to the previous page or route when the "Back" button is clicked
    navigate('/mytrips');
  };

  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const handleNextClick = () => {
    // Navigate to the next page or route when the "Next" button is clicked
    //navigate('/next-page');
    setIsOpen(false);
    
    navigate('/itinerary');
  };

  
  return (
    <div className="flex h-screen overflow-hidden ">
        <Sidebar active="My Trips" isSubSidebarOpen={isSubSidebarOpen} setIsSubSidebarOpen={setIsSubSidebarOpen}/>
        <div className="flex flex-col w-screen bg-[#D9D9D9] bg-opacity-20 overflow-hidden ">
          <TopNavbar />
          <div className='flex justify-between'>
            <TripNameBar />
            {isMemberOpen && <Members isOpen={isMemberOpen} setIsOpen={setMemberOpen} />}
          </div>
          <div>
            <Calendar />
          </div>
          <div>
            <BacknNext className="flex justify-center overflow-hidden" onBackClick={handleBackClick} onNextClick={handleNextClick} /> 
          </div>

        </div>
    </div>
  );
}

export default TripPlanner;

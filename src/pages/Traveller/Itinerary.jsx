import React, { useState }  from 'react';
import Sidebar from '../web-component/Sidebar';
import TopNavbar from '../web-component/Navbar';
import  Members  from '../web-component/Members';
import { TripNameBar } from '../web-component/TripName';
import Calendar from '../web-component/calander';
import BacknNext from '../web-component/BackNext';
import { useNavigate } from 'react-router-dom';

function Itinerary() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleBackClick = () => {
    // Navigate to the previous page or route when the "Back" button is clicked
    navigate('/mytrips');
  };

  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(true);
  const [isMemberOpen, setIsMemberOpen] = useState(false);


  const handleNextClick = () => {
    // Navigate to the next page or route when the "Next" button is clicked
    //navigate('/next-page');
    setIsOpen(false);
    setIsSubSidebarOpen(true);
  };

  
  return (
    <div className="flex h-screen overflow-hidden ">
        <Sidebar active="Itinerary" isSubSidebarOpen={isSubSidebarOpen} setIsSubSidebarOpen={setIsSubSidebarOpen}/>
        <div className="flex flex-col w-screen bg-[#D9D9D9] bg-opacity-20 overflow-hidden ">
          <TopNavbar />
          <div className='flex justify-between'>
            <TripNameBar isSubSidebarOpen={isSubSidebarOpen} />
          </div>
          {isMemberOpen && <Members isOpen={isMemberOpen} setIsOpen={setMemberOpen} />}
        </div>
    </div>
  );
}

export default Itinerary;

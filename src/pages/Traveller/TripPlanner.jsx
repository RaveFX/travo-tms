import React, { useState }  from 'react';
import Sidebar from '../../pages/web-component/Sidebar';
import TopNavbar from '../../pages/web-component/Navbar';
import Chat from '../../pages/web-component/Chat'
import Calendar from '../web-component/calander';
import { PlanStepper } from '../web-component/Stepper';
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


  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const handleNextClick = () => {
    // Navigate to the next page or route when the "Next" button is clicked
    //navigate('/next-page');
    setIsOpen(false);
    
    navigate('/itinerary');
  };

  // let activeTitle;
  // switch (activeStep) {
  //   case 0:
  //     activeTitle = "My trips";
  //     break;
  //   case 1:
  //     activeTitle = "Itinerary";
  //     break;
  //   default:
  //     activeTitle = "";
  // }
  
  return (
    <div className="flex h-screen overflow-hidden ">
        <Sidebar active={activeStep === 0 ? "My Trips" : activeStep === 1 ? "Itinerary" : ""} isSubSidebarOpen={isSubSidebarOpen} setIsSubSidebarOpen={setIsSubSidebarOpen}/>
        <div className="flex flex-col w-screen bg-[#D9D9D9] bg-opacity-20 overflow-y-scroll ">
          <TopNavbar />
          <div className='flex justify-between'>
            <TripNameBar />
            {isMemberOpen && <Members isOpen={isMemberOpen} setIsOpen={setMemberOpen} />}
          </div>
          <div>
            {/* <Calendar /> */}
          </div>
          <div>
            <Chat />
            {/* <PlanStepper activeStep={activeStep} setActiveStep={setActiveStep} isSubSidebarOpen={isSubSidebarOpen} setIsSubSidebarOpen={setIsSubSidebarOpen}/> */}
            {/* <BacknNext className="flex justify-center overflow-hidden" onBackClick={handleBackClick} onNextClick={handleNextClick} />  */}
          </div>

        </div>
    </div>
  );
}

export default TripPlanner;

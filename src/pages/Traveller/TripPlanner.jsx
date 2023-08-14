import React, { useState } from "react";
import Sidebar from "../../pages/web-component/Sidebar";
import TopNavbar from "../../pages/web-component/Navbar";
import Chat from "../../pages/web-component/Chat";
import Calendar from "../web-component/calander";
import { PlanStepper } from "../web-component/Stepper";
import BacknNext from "../web-component/BackNext";
import { TripNameBar } from "../web-component/TripName";
import { useNavigate } from "react-router-dom";
import Notepad from "../web-component/Notepad";
import Map from "../web-component/Map";
import { SpeedDialPop } from "../web-component/SpeedPop";

import { Button, ButtonGroup } from "@material-tailwind/react";

function TripPlanner() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleBackClick = () => {
    // Navigate to the previous page or route when the "Back" button is clicked
    navigate("/mytrips");
  };

  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [subSidebarState, setSubSidebarState] = useState(1);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const handleNextClick = () => {
    // Navigate to the next page or route when the "Next" button is clicked
    //navigate('/next-page');
    setIsOpen(false);

    navigate("/itinerary");
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
      <Sidebar
        active={
          subSidebarState === 1
            ? "Itinerary"
            : subSidebarState === 2
            ? "Selections"
            : subSidebarState === 3
            ? "Saves"
            : activeStep === 0
            ? "My Trips"
            : ""
        }
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
        subSidebarState={subSidebarState}
        setSubSidebarState={setSubSidebarState}
      />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20  ">
        <TopNavbar />
        <div className="overflow-y-scroll">
          <div className="flex flex-row justify-between">
            <TripNameBar />
            {/* {isMemberOpen && (
              <Members isOpen={isMemberOpen} setIsOpen={setMemberOpen} />
            )} */}
          </div>
          <div className="flex flex-col w-full">
              <PlanStepper
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                isSubSidebarOpen={isSubSidebarOpen}
                setIsSubSidebarOpen={setIsSubSidebarOpen}
                subSidebarState={subSidebarState}
                setSubSidebarState={setSubSidebarState}
              >
                <div>
                  {/* <Map /> */}
                  {/* <Chat /> */}
                  <Notepad />
                  
                </div>
              </PlanStepper>
            {/* <BacknNext className="flex justify-center overflow-hidden" onBackClick={handleBackClick} onNextClick={handleNextClick} />  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripPlanner;

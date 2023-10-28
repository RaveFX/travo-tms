import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import Chat from "../../components/web-component/Chat";
import Calendar from "../../components/web-component/calander";
import { PlanStepper } from "../../components/web-component/Stepper";
import BacknNext from "../../components/web-component/BackNext";
import { TripNameBar } from "../../components/web-component/TripName";
import { useNavigate } from "react-router-dom";
import Notepad from "../../components/web-component/Notepad";
import Map from "../../components/web-component/Map";
import { SpeedDialPop } from "../../components/web-component/SpeedPop";



import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import {
  MapIcon,
  DocumentIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

//const trip_id = sessionStorage.getItem('trip_id');

function TripPlanner() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    loadDetails();
  }, []);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleBackClick = () => {
    // Navigate to the previous page or route when the "Back" button is clicked
    navigate("/mytrips");
  };

  const user_id = sessionStorage.getItem('user_id');
  console.log(user_id)

  const loadDetails = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/trip/tripDetails/${id}`)
    setDetails(result.data);
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

  const handleChatButtonClick = () => {
    setSelectedComponent(<Chat />);
  };

  const handleMapButtonClick = () => {
    if (!selectedComponent) {
      setSelectedComponent(<Map />);
    } else {
      setSelectedComponent(null);
    }
  };

  const handleNoteButtonClick = () => {
    setSelectedComponent(<Notepad />);
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      <Sidebar
        active="My Trips"
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
        subSidebarState={subSidebarState}
        setSubSidebarState={setSubSidebarState}
      />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 z-[10000] ">
        <TopNavbar />
        <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
          <div className="flex flex-row justify-between">
            <TripNameBar trip_name={details.trip_name} description={details.description} />

            {/* {isMemberOpen && (
              <Members isOpen={isMemberOpen} setIsOpen={setMemberOpen} />
            )} */}
          </div>
          <div className="flex flex-row items-center relative left-10 top-65 mt-4 mb-4 space-x-2">
            <Typography
              onClick={handleChatButtonClick}
              color="[#377A85]"
              size="regular"
              ripple="light"
              className="flex justify-center items-center text-white bg-[#377A85] rounded-full w-[50px] h-[50px] hover:shadow-none active:shadow-none focus:shadow-none "
            >
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
            </Typography>
            <Typography
              onClick={handleMapButtonClick}
              color="[#377A85]"
              size="regular"
              ripple="light"
              className="flex justify-center items-center text-white bg-[#377A85] rounded-full w-[50px] h-[50px] hover:shadow-none active:shadow-none focus:shadow-none  "
            >
              <MapIcon className="h-6 w-6 flex justify-center" />
            </Typography>
            <Typography
              onClick={handleNoteButtonClick}
              color="[#377A85]"
              size="regular"
              ripple="light"
              className="flex justify-center items-center text-white bg-[#377A85] rounded-full w-[50px] h-[50px] absoulute hover:shadow-none active:shadow-none focus:shadow-none"
            >
              <DocumentIcon className="h-6 w-6" />
            </Typography>
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
              <div>{selectedComponent}</div>
            </PlanStepper>


            {/* <BacknNext className="flex justify-center overflow-hidden" onBackClick={handleBackClick} onNextClick={handleNextClick} />  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripPlanner;

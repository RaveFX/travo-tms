import React from "react";
import Calendar from "./calander";
import Itinerary from "../Traveller/Itinerary";
import { Saves } from "../Traveller/Saves";
import Selections from "../Traveller/Selection";
import GuiedNVehicle from "./Guied-Vehicle";
import { FinalPlan } from "./FinalPlan";

import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  CalendarDaysIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export function PlanStepper(props) {
  // const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  // activeStep = props;

  const {
    activeStep,
    setActiveStep,
    isSubSidebarOpen,
    setIsSubSidebarOpen,
    subSidebarState,
    setSubSidebarState,
    active,
    children,
  } = props;
  let stepContent;
  switch (activeStep) {
    case 0:
      stepContent = <Calendar />;
      setIsSubSidebarOpen(false);
      break;
    case 1:
      // setSubSidebarState(1);

      subSidebarState == 1
        ? (stepContent = <Itinerary active="Itinerary" />)
        : subSidebarState == 2
        ? (stepContent = <Selections />)
        : subSidebarState == 3
        ? (stepContent = <Saves />)
        : null;

      setIsSubSidebarOpen(true);
      break;
    case 2:
      stepContent = <GuiedNVehicle />;
      break;
    case 3:
      stepContent = <FinalPlan />;
      break;
    default:
      stepContent = null;
  }

  return (
    <>
      <div className="flex flex-row w-full justify-around">
        {stepContent}
        {children}
      </div>

      <div className="flex w-[100%] px-40 py-2 gap-[6rem]">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          className="flex flex-col shadow-none justify-center items-center flex-shrink-0 text-white w-[4rem] h-[3rem] rounded-[5rem] bg-[#57CC99] drop-shadow-lg hover:shadow-none active:shadow-none focus:shadow-none"
        >
          Prev
        </Button>
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step
            onClick={() => setActiveStep(0)}
            className={`!bg-${
              activeStep === 0 || isLastStep ? "[#57CC99]" : "gray-300"
            }`}
          >
            <CalendarDaysIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                {/* Calander */}
              </Typography>
            </div>
          </Step>
          <Step
            onClick={() => setActiveStep(1) && setSubSidebarState(1)}
            className={`!bg-${
              activeStep === 1 || isLastStep ? "[#57CC99]" : "gray-300"
            }`}
          >
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                {/* Planner */}
              </Typography>
            </div>
          </Step>
          <Step
            onClick={() => setActiveStep(2)}
            className={`!bg-${
              activeStep === 2 || isLastStep === 2 ? "[#57CC99]" : "gray-300"
            }`}
          >
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                {/* Finnish */}
              </Typography>
            </div>
          </Step>
          <Step
            onClick={() => setActiveStep(3)}
            className={`!bg-${
              activeStep === 3 || isLastStep === 3 ? "[#57CC99]" : "gray-300"
            }`}
          >
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[2rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 3 ? "blue-gray" : "gray"}
              >
                {/* Finnish */}
              </Typography>
            </div>
          </Step>
        </Stepper>
        <Button
          onClick={handleNext}
          disabled={isLastStep}
          className="flex flex-col shadow-none justify-center items-center flex-shrink-0 text-white w-[4rem] h-[3rem] rounded-[5rem] bg-[#57CC99] drop-shadow-lg hover:shadow-none active:shadow-none focus:shadow-none"
        >
          Next
        </Button>
        {/* <div className="mt-10 flex justify-between"> */}

        {/* </div> */}
      </div>
    </>
  );
}

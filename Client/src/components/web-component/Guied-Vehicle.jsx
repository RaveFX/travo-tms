import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@material-tailwind/react";


function GuiedNVehicle() {

  const navigate = useNavigate();
  const handleGuideClick = () => {

    navigate("/traveler/hire-guied");
  };
  const handleVehicleClick = () => {

    navigate("/traveler/VehiclePage");
  };
  return (
    <>
      <div className="flex flex-row w-full items-center justify-center gap-[150px] my-24 ">
        <Button className="flex flex-col items-center justify-center w-[150px] h-[150px] text-white  bg-[#57CC99] normal-case shadow-none focus:shadow-none hover:shadow-none active:shadow-none"
          onClick={handleGuideClick}>
          <img className="items-center" src="/traveler/travelguied.svg" />
          <Typography>Travel Guide</Typography>
        </Button>
        <Button className="flex flex-col items-center  justify-center w-[150px] h-[150px] text-white bg-[#57CC99] normal-case shadow-none focus:shadow-none hover:shadow-none active:shadow-none"
          onClick={handleVehicleClick}>
          <img className="" src="/traveler/vehicle.svg" />
          <Typography>Rent a Vehicle</Typography>
        </Button>
      </div>
    </>
  );
}
export default GuiedNVehicle;
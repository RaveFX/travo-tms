import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {Button, Typography } from "@material-tailwind/react";


function GuiedNVehicle() {

    const navigate = useNavigate();
    const handleGuiedClick = () => {
      
      navigate("/hire-guied");
    };
    return (
      <>
        <div className="flex flex-row justify-center gap-[150px] mt-30 pt-20">
          <Button className="flex flex-col justify-center w-[150px] h-[150px] text-white  bg-[#57CC99] normal-case shadow-none focus:shadow-none hover:shadow-none active:shadow-none"
          onClick={handleGuiedClick}>
            <img className="" src="./public/images/travelguied.svg" />
            <Typography>Add Travel guied</Typography>
          </Button>
          <Button className="flex flex-col w-[150px] h-[150px] text-white bg-[#57CC99] normal-case shadow-none focus:shadow-none hover:shadow-none active:shadow-none">
            <img className="" src="./public/images/vehicle.svg" />
            <Typography>Rent a Vehicle</Typography>
          </Button>
        </div>
      </>
    );
}
export default GuiedNVehicle;

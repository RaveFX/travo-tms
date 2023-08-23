import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../../components/activity_agent/navbar2";
import Sidebar from "../../components/activity_agent/sidebar";
import { Button, CardBody } from "@material-tailwind/react";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import Rating from "../../components/activity_agent/rating";

function ReviewsDetails() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div>
            <TopNavbar />
          </div>
          <div>
            <div className="mx-5 my-10 flex">
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewsDetails;
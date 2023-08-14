import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/navbar2";
import Sidebar from "../components/sidebar";
import { Button, CardBody } from "@material-tailwind/react";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import ImageGrids from "../components/imagegrid";

function ImageGrid() {
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
              <ImageGrids />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGrid;
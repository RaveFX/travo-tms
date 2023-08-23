import React from "react";
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Spinner,
} from "@material-tailwind/react";

function Hotel_rooms() {
  return (
    <div className="flex h-screen ">
      <SideBar active="Reviews" />
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div className="flex justify-between h-[70%]">
          <img className="h-full w-full" src="/hotel_room2.jpg" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hotel_rooms;

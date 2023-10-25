import React from 'react';
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";

function Hotel_advertisments() {
  return (
    <div className="flex h-screen ">
      <SideBar active="Advertisements"/>
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div>Hotel_advertisments</div>
      </div>
    </div>
  )
}

export default Hotel_advertisments
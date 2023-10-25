import React from 'react';
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";

function Hotel_editRooms() {
  return (
    <div className="flex h-screen ">
      <SideBar active="Rooms"/>
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div>Hotel_editRooms</div>
      </div>
    </div>
  )
}

export default Hotel_editRooms
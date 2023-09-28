import React from "react";
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";

function Hotel_dashboard() {
  const role = sessionStorage.getItem('role');
  const user_id = sessionStorage.getItem('user_id');
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar active="Dashboard" />
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div className="flex justify-between">
          <h1 className="text-3xl font-poppins font-extrabold m-4 text-[#2C2738]">
            Hotel Dashboard - {user_id}
          </h1>
          
        </div>
      </div>
    </div>
  );
}

export default Hotel_dashboard;

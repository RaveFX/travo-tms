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
      <SideBar active="Rooms"/>
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
        <div  style={{height:'60%',backgroundImage: "url('/hotel/hero2.png')",display:'flex',justifyContent:'center',alignItems: 'center',position:'absolute'}}>
            <div style={{width:"40%", textAlign:'center'}}>
            <h1 style={{fontSize:'40px'}} className="font-bold font-poppins text-white pb-3">Rooms and Suites</h1>
            <h1 className="font-poppins text-white pb-3">The elegant luxury bedrooms in this gallery showcase custom interior 
            designs & decorating ideas. View pictures and find your
            perfect luxury bedroom design.</h1>
            </div>
            </div>
     <div style={{marginTop:'480px',marginLeft:'30px'}}>
     <h1 className=' font-poppins font-extrabold  mb-5 text-[#2C2738]'>Rooms</h1>
     <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div style={{width:'90%'}} className="bg-white shadow-md rounded-lg overflow-hidden mb-5 ">
      <img
        src='/hotel/room.png'
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">Deluxe Room</h2>
        <p className="text-gray-600">Spacious room with a city view</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-500">
            Rs.10000 / night
          </span>
          <button
            className="px-6 py-2  text-green rounded-full hover:bg-green hover:text-white"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
    

    <div style={{width:'90%'}} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
    <img
      src='/hotel/room.png'
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
    <p className="text-gray-500 text-sm">Room Id : 12</p>
      <h2 className="text-xl font-semibold">Deluxe Room</h2>
      <p className="text-gray-500">Spacious room with a city view</p>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-bold text-gray-500">
          Rs.10000 / night
        </span>
        <button
           className="px-6 py-2  text-green rounded-full hover:bg-green hover:text-white"
        >
          Edit
        </button>
      </div>
    </div>
  </div>

  <div style={{width:'90%'}} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
  <img
    src='/hotel/hero2.png'
    className="w-full h-40 object-cover"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold">Deluxe Room</h2>
    <p className="text-gray-600">Spacious room with a city view</p>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-sm font-bold text-gray-500">
        Rs.10000 / night
      </span>
      <button
        className="px-6 py-2  text-green rounded-full hover:bg-green hover:text-white"
      >
        Edit
      </button>
    </div>
  </div>
</div>

<div style={{width:'90%'}} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
<img
  src='/hotel/hero2.png'
  className="w-full h-40 object-cover"
/>
<div className="p-4">
  <h2 className="text-xl font-semibold">Deluxe Room</h2>
  <p className="text-gray-600">Spacious room with a city view</p>
  <div className="mt-4 flex justify-between items-center">
    <span className="text-sm font-bold text-gray-500">
      Rs.10000 / night
    </span>
    <button
      className="px-6 py-2  text-green rounded-full hover:bg-green hover:text-white"
    >
      Edit
    </button>
  </div>
</div>
</div>
<div style={{width:'90%'}} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
<img
  src='/hotel/hero2.png'
  className="w-full h-40 object-cover"
/>
<div className="p-4">
  <h2 className="text-xl font-semibold">Deluxe Room</h2>
  <p className="text-gray-600">Spacious room with a city view</p>
  <div className="mt-4 flex justify-between items-center">
    <span className="text-sm font-bold text-gray-500">
      Rs.10000 / night
    </span>
    <button
      className="px-6 py-2  text-green rounded-full hover:bg-green hover:text-white"
    >
      Edit
    </button>
  </div>
</div>
</div>
<div style={{width:'90%'}} className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
<img
  src='/hotel/hero2.png'
  className="w-full h-40 object-cover"
/>
<div className="p-4">
  <h2 className="text-xl font-semibold">Deluxe Room</h2>
  <p className="text-gray-600">Spacious room with a city view</p>
  <div className="mt-4 flex justify-between items-center">
    <span className="text-sm font-bold text-gray-500">
      Rs.10000 / night
    </span>
    <button
      className="px-6 py-2  text-green rounded-full hover:bg-green hover:text-white"
    >
      Edit
    </button>
  </div>
</div>
</div>
</div>
        </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hotel_rooms;

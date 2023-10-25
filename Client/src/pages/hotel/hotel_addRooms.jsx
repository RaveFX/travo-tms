import React from 'react';
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";
import { Button } from "@material-tailwind/react";

function Hotel_addRooms() {
  return (
    <div className="flex h-screen ">
      <SideBar active="Rooms"/>
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div style={{width:'95%',height:'80%',marginTop:'3%',marginLeft:'3%',backgroundColor:'#FAFAFA',borderRadius:'10px'}}>
        <h1 className=' font-poppins font-extrabold  mt-5 ml-5 text-[#2C2738]'>Add new room</h1>
        <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between',height:'100%'}}>
        <div style={{width:'45%',height:'60%',marginTop:'2%',marginLeft:'3%',backgroundColor:'#FFFFFF',borderRadius:'10px'}}>
        </div>
        <div style={{width:'45%',height:'80%',marginTop:'2%',marginRight:'3%',backgroundColor:'#FFFFFF',borderRadius:'10px'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Room Name : </h1>
        <input
                    type="text" style={{width:"30%", height:"20%" }}
                    className="block w-full rounded-md border-0 mt-5 ml-6 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="hotel_name"
                  />
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold ml-5 text-[#718096] text-sm'>Description : </h1>
        <input
                    type="text" style={{width:"70%", height:"30%" }}
                    className="block w-full rounded-md border-0 mt-5 ml-8  py-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="hotel_name"
                  />
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Occupancy : </h1>
        <select style={{width:"20%" }}
        name="category"
        className="block rounded-md border-0  mt-5  ml-8 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>Adults</option>
        <option value="Tours">1</option>
        <option value="Boat Tours">2</option>
        <option value="Surfing">3</option>
        <option value="Arts and Crafts">4</option>
        <option value="Yoga">5</option>
        <option value="Other">6</option>
      </select>
      <select style={{width:"20%" }}
        name="category"
        className="block rounded-md border-0  mt-5  ml-8 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>Children</option>
        <option value="Tours">1</option>
        <option value="Boat Tours">2</option>
        <option value="Surfing">3</option>
        <option value="Arts and Crafts">4</option>
        <option value="Yoga">5</option>
        <option value="Other">6</option>
      </select>
        </div>

        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>View : </h1>
        <select style={{width:"30%" }}
        name="category"
        className="block rounded-md border-0  mt-5  ml-20 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option></option>
        <option value="Tours">Sea</option>
        <option value="Boat Tours">City</option>
        <option value="Surfing">Forest</option>
        <option value="Arts and Crafts">Lake</option>
        <option value="Yoga">No View</option>
        <option value="Other">Other</option>
      </select>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Price : </h1>
        <input
                    type="text" style={{width:"30%", height:"20%" }}
                    className="block w-full rounded-md border-0 mt-5 ml-20 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="hotel_name"
                  />
        </div>
        <Button style={{marginTop:'18%',marginLeft:'70%'}} className="bg-green mt-5">Add Rooms</Button>
        </div>
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel_addRooms
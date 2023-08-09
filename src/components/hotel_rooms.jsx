import React from 'react'
import UserNav from './userNav'
import SideBar from './sidebar'

function Hotel_rooms() {
  return (
    <div className="flex h-screen ">
    <SideBar active="Reviews"/>
    <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
      <UserNav />
      <div className='flex justify-between'>
          <h1 className=' font-poppins font-extrabold my-4 mx-20 text-[#2C2738]'>Rooms</h1>
          </div>

          
    </div>
    </div>
  )
}

export default Hotel_rooms
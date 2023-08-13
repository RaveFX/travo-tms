import React from 'react'
import UserNav from '../../components/userNav'
import SideBar from '../../components/sidebar'



function Hotel_dashboard() {
    
  return (
    <div className="flex h-screen overflow-hidden">
    <SideBar active="Dashboard"/>
    <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
      <UserNav />
      <div className='flex justify-between'>
          <h1 className='text-3xl font-poppins font-extrabold m-4 text-[#2C2738]'>Dashboard</h1>
      </div>
      
  </div>
  </div>
  )
}

export default Hotel_dashboard
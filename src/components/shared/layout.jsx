import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'


export default function layout() {
  return (
    <div class="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div class="flex-1">
        <Header />
        <div >{<Outlet />}</div>
      </div>
    </div>
  )
}

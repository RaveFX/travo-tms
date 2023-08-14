import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Admin_sidebar';
import Header from './Admin_header';
import NavBar from './navbar';


export default function Admin_layout() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            {/* <SideBar2 /> */}
            <div className="flex flex-col flex-1">
                <Header />
                {/* <NavBar /> */}
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
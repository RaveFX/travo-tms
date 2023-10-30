
import React from "react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";


function Hotelselectionpage() {
    return (
        <div className="flex h-screen overflow-hidden ">
            <Sidebar
                active="Hotelselectionpage"
            />
            <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 z-[10000] ">
                <TopNavbar />
            </div>
        </div>
    );
}

export default Hotelselectionpage;










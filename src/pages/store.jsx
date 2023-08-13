import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/navbar2";
import Sidebar from "../components/sidebar";

function Store() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div class="flex">
          <aside class="h-screen sticky top-0">
            <Sidebar />
          </aside>

          <main>
            <TopNavbar />
          </main>
        </div>
      </div>
    </>
  );
}

export default Store;

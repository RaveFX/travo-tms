import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar2";
import Sidebar from "../components/sidebar";
import { Button } from "@material-tailwind/react";
import Calendar from "../components/calendar";

function Travdash() {
  return (
    <>
      <div className="font-poppins flex w-screen h-0 ">
        <div>
          <Sidebar />
        </div>
        <div className="w-screen">
          <Navbar2 />

          <section class="py-8">
            <div class=" w-[45%] px-4 mr-auto">
              <div class="px-7 py-6 bg-white rounded-xl drop-shadow-sm  ">
                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2 pt-6 mb-10 md:mb-0">
                    <h3 class="mb-1 text-2xl font-bold text-black">
                      <span class="text-green-600">Howdy!</span>
                      <span> Ravindu</span>
                    </h3>
                    <p class="mb-8 md:mb-16 text-sm font-medium text-green-500">
                      It's been a long time
                    </p>
                    <a
                      class="flex items-center text-white font-medium"
                      href="#"
                    >
                      <p class="text-black mr-2">Why wait?</p>
                      <Button className="bg-indigo-500 w-20 ">
                        Plan a trip
                      </Button>
                    </a>
                  </div>
                  <div class="w-full md:w-1/2 flex items-center">
                    <img
                      class="rounded-xl mx-auto h-48"
                      src="/ella.jpg"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Travdash;

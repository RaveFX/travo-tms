import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/navbar2";
import Sidebar from "../components/sidebar";
import { Carousel } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { ButtonGroup, Button } from "@material-tailwind/react";

function Plusminus() {
  return (
    <ButtonGroup fullWidth>
      <Button className=" bg-white w-2 h-10 text-center text-black text-xl">
        -
      </Button>
      <Button disabled className=" w-2 h-10 shadow-none text-black text-xl ">
        5
      </Button>
      <Button className="bg-white w-2 h-10 text-black text-xl">+</Button>
    </ButtonGroup>
  );
}

function ProductView() {
  return (
    <section class=" ">
      <div class="container mx-auto px-4">
        <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-2 lg:grid-cols-5 lg:gap-16">
          <div class="lg:col-span-3 lg:row-end-1">
            <div class="lg:flex lg:items-start">
              <div class="lg:order-2 lg:ml-5">
                <div class="max-w-sm bg-white  overflow-hidden rounded-lg">
                  <img
                    class="h-full w-full max-w-sm p-10 object-cover"
                    src="https://i.imgur.com/9YVGtNS.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div class="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    class="flex-0 bg-white aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-600 text-center"
                  >
                    <img
                      class="h-full w-full max-w-xs p-2 object-cover"
                      src="https://i.imgur.com/069JxkB.png"
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square bg-white mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      class="h-full w-full p-2  object-cover"
                      src="https://i.imgur.com/P1drqjM.png"
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    class="flex-0 aspect-square mb-3 bg-white h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      class="h-full w-full p-2 object-cover"
                      src="https://i.imgur.com/9YVGtNS.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 class="sm: text-xl font-bold text-gray-900 sm:text-xl">
              GoPro Hero 9 Black
            </h1>
            <div class="mt-1 flex items-center">
              <div class="flex items-center">
                <p class="text-sm font-medium text-gray-500">
                  Rented by : Shan Rentals
                </p>
              </div>
            </div>
            <div class="flex mt-5 items-end">
              <h1 class="text-2xl font-bold">Rs. 3500.00</h1>
              <span class="text-base">/Night</span>
            </div>
            <h2 class="mt-8 text-base text-gray-900"></h2>
            <p>No.of Units</p>
            <div className=" w-48 text-black mb-2">
              <Plusminus className="" />
            </div>
            <p>No.of Nights</p>
            <div className=" text-black">
              <Plusminus className="" />
            </div>
            <div class="mt-5 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-[#22577A] bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreProduct() {
  return (
    <>
      <div className="font-poppins  w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className=" fixed">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full ml-[18.5%]">
          <TopNavbar />

          <div>
            <div className="ml-10 mt-[2%] bg-white p-5 rounded-lg w-[93%]  flex">
              <h1 className="font-bold text-lg">Travo</h1>
              <h1 className="font-bold text-red-700 text-lg">Store</h1>
            </div>

            <div className="mt-5 ml-10 mb-5 flex"></div>
          </div>
          <div className="flex z-10">
            <div className="ml-10 flex">
              <ProductView />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreProduct;

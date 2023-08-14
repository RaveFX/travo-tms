import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/navbar2";
import Sidebar from "../components/sidebar";
import { Button, CardBody } from "@material-tailwind/react";

function Comptravs() {
  return (
    <div>
      <div class=" my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4">
        <div className="flex flex-row">
          <div>
            <div className="flex flex-row gap-10 mb-5">
              <div className="flex">
                <p className="text-sm">Colombo-Ella</p>
              </div>
              <div className="flex">
                <button class="cursor-pointer bg-slate-300 border py-2 px-8 text-center text-xs leading-tight transition-colors duration-150 ease-in-out hover:border-gray-500 rounded-lg">
                  Request
                </button>
              </div>
            </div>

            <div class="flex flex-col items-center space-y-4">
              <div class="flex -space-x-3">
                <img
                  class="h-12 w-12 rounded-full ring ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80"
                />
                <img
                  class="h-12 w-12 rounded-full ring ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <img
                  class="h-12 w-12 rounded-full ring ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <img
                  class="h-12 w-12 rounded-full ring ring-white"
                  src="https://images.unsplash.com/photo-1663996806932-357eddab9b50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 font-semibold text-white ring ring-white">
                  +13
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap mx-10">
        <div className="w-[100%]">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Matches
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Sent
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Received
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-[#22577A]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Meetups
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Comptravs />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function TabsRender() {
  return (
    <>
      <Tabs color="black" />;
    </>
  );
}

function Travelbuddy() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className=" fixed">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full ml-[18.5%]">
          <TopNavbar />

          <div>
            <div className="ml-10 mt-[2%] bg-white p-5 rounded-lg w-[93%]  flex">
              <h1 className="font-bold text-red-700 text-lg"> | TravelBuddy</h1>
            </div>

            <div className="flex flex-row">
              <div className="mt-5 ml-10 mb-5 flex"></div>
              <div className="mt-5 ml-10 mb-5 flex"></div>
            </div>
          </div>

          <div>
            <TabsRender />
          </div>

          <div className="flex z-10">
            <div className="ml-10 flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Travelbuddy;

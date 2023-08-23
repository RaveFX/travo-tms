import React from "react";
//import Newnav from "../../components/newnav";
//import Navingation_home from "../../components/homenavbar";
import { Card, CardBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ServiceProviders() {
  return (
    <div
      className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"
      style={{
        backgroundImage: "url('/main/photo2.jpg')",
        //  background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }}
    >
      <Navingation_home />
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <img src="/travo-white.png" alt="Sample image" />
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl ml-20">
              Join with us
            </h2>
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl ml-20">
              as a{" "}
            </h2>
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl ml-20">
              Service provider
            </h2>
          </div>
          <ul
            role="list"
            className="grid sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 pt-20"
          >
            <Link to="/hotel_register">
              <li>
                <card>
                  <img
                    className="h-40 w-40 rounded-md transition duration-300 ease-in-out hover:scale-110 bg-white p-2"
                    src="/main/hotel_agent.png"
                    alt=""
                  />
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    Hotel
                  </h3>
                </card>
              </li>
            </Link>
            <Link to="/activity_agent_register">
              <li>
                <card>
                  <img
                    className="h-40 w-40 rounded-md transition duration-300 ease-in-out hover:scale-110 bg-white p-2 "
                    src="/main/activity_register.png"
                    alt=""
                  />
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    Activities
                  </h3>
                </card>
              </li>
            </Link>

            <Link to="/guide_register">
              <li>
                <card>
                  <img
                    className="h-40 w-40 rounded-md transition duration-300 ease-in-out hover:scale-110 bg-white p-2"
                    src="/main/Guide_register.png"
                    alt=""
                  />
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    Travel Guide
                  </h3>
                </card>
              </li>
            </Link>

            <Link to="/vehicle_renter_register">
              <li>
                <card>
                  <img
                    className="h-40 w-40 rounded-md transition duration-300 ease-in-out hover:scale-110 bg-white p-2"
                    src="/main/vehicle_renter.png"
                    alt=""
                  />
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    Vehicle Renter
                  </h3>
                </card>
              </li>
            </Link>

            <Link to="/store_manager_register">
              <li>
                <card>
                  <img
                    className="h-40 w-40 rounded-md transition duration-300 ease-in-out hover:scale-110 bg-white p-2"
                    src="/main/store_manager.png"
                    alt=""
                  />
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    Store
                  </h3>
                </card>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviders;

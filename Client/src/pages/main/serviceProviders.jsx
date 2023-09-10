import React, { Component } from "react";
//import Newnav from "../../components/newnav";

import TopNavbar from '../../components/web-component/Navbar';
import { Card, CardBody } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ServiceProviders() {
  const navigate = useNavigate();
  const role = sessionStorage.getItem('role');
  const user_id = sessionStorage.getItem('user_id');
  const handleClickstore = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/auth/checkStore/${user_id}`
    );
    console.log(res);
    if (res.data.status === "Error") {
      navigate("/store_manager_register");
    }
    else if(res.data.status === "Active"){
      navigate("/store_dashboard");
    }
    else{
      navigate("/register_success");
    }
    
  };

  const handleClickGuide = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/auth/checkGuide/${user_id}`
    );
    console.log(res);
    if (res.data.status === "Error") {
      navigate("/guide_register");
    }
    else if(res.data.status === "Active"){
      navigate("/travel_guide_dashboard");
    }
    else{
      navigate("/register_success");
    }
    
  };

  const handleClickHotel = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/auth/checkHotel/${user_id}`
    );
    console.log(res);
    if (res.data.status === "Error") {
      navigate("/hotel_register");
    }
    else if(res.data.status === "Active"){
      navigate("/hotelagent_dashboard");
    }
    else{
      navigate("/register_success");
    }
    
  };

  const handleClickActivity = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/auth/checkActivityAgent/${user_id}`
    );
    console.log(res);
    if (res.data.status === "Error") {
      navigate("/activity_agent_register");
    }
    else if(res.data.status === "Active"){
      navigate("/agent_dashboard");
    }
    else{
      navigate("/register_success");
    }
    
  };
  
  const handleClickVehicle = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/auth/checkVehicleRenter/${user_id}`
    );
    console.log(res);
    if (res.data.status === "Error") {
      navigate("/vehicle_renter_register");
    }
    else if(res.data.status === "Active"){
      navigate("/vehicle_owner_dashboard");
    }
    else{
      navigate("/register_success");
    }
    
  };
  return (
    <div
      className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white overflow : scroll"
      style={{
        backgroundImage: "url('/main/photo2.jpg')",
        //  background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }}
    >
      <TopNavbar />
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
            
              <li>
              
                <card role="button" onClick={handleClickHotel}>
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
            
            
              <li>
              
                <card role="button" onClick={handleClickActivity}>
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
            

           
              <li>
              
                <card role="button" onClick={handleClickGuide}>
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
            

           
              <li>
              
                <card role="button" onClick={handleClickVehicle}>
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
            

            
              <li >
              
                <card role="button" onClick={handleClickstore}>
                
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
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviders;

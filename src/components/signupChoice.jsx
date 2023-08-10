import React from 'react'
import Newnav from "./newnav";
import {
    Card,
    CardBody
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function SignupChoice() {
  return (
    <div className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"style={{backgroundImage: "url('/photo3.jpg')"}}>
    <Newnav />
    <div className="py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <img
          src="/travo-white.png"
          alt="Sample image" />
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl ml-20">Sign-up As,</h2>

        <ul role="list" className="grid sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 pt-20">
        <Link to="/Signup">
      <li>
      <card>
      <img className="h-30 w-30 rounded-md transition duration-300 ease-in-out hover:scale-110" src="/store_manager.png" alt="" />
      <h3 className="text-base font-semibold leading-7 tracking-tight">Traveller</h3>
      </card>
      
      </li>
      </Link>
      <Link to="/service_providers">
      <li>
      <card>
      <img className="ml-6 h-30 w-30 rounded-md transition duration-300 ease-in-out hover:scale-110" src="/hotel_agent.png" alt="" />
      <h3 className="text-base font-semibold leading-7 tracking-tight">Service Provider</h3>
      </card>
      
      </li>
      </Link>
        
      </ul>
      </div>
     
    </div>
  </div>
        

        </div>
        
        
        
        
        
        
        
        
  )
}

export default SignupChoice
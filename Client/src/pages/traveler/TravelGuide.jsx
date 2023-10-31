import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { Rating } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


function TravelGuide() {
  const [guides, setGuide] = useState([]);

  useEffect(() => {
    loadGuide();
  }, []);

  const loadGuide = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/trip/guideList`)
    setGuide(result.data);
  }
  console.log(guides);
  

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="My Trips" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
        <TopNavbar />
        <div className="container mx-auto mt-8 overflow-hidden">
          <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D] mb-6 mx-6">
            Travel Guides
          </h1>

          <div className="overflow-y-auto h-[calc(100vh-150px)] mx-6 "
            style={{ scrollbarWidth: 'none' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {/* {guides.length > 0 ? ( */}
                {guides.map((guide) => (
                  // {guides.map((guide, index) => (
                  <div
                   
                    className="bg-white p-4 rounded-lg shadow border border-[#57CC99]"
                    onClick={""}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <img
                        src='../../../traveler/Profile-Picture.svg'
                        // alt={`${guide.fname}'s Photo`}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{guide.fname} {guide.lname}</h2>
                    <p className="mb-2">{guide.description}</p>
                    <div className="flex items-center mb-2">
                      {/* <span className="mr-2">{guide.ratings.toFixed(1)}</span> */}
                      <div className="flex items-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg> */}
                        <span className="ml-1 text-sm text-gray-500">
                          {guide.district}
                        </span>
                      </div>
                    </div>
                    {/* ... other details */}
                  </div>
                // ))) : (
                // <p>Loading...</p>)}
                ))}
            </div>
          </div>

          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuide;
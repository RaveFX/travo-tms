import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/20/solid'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""
          } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  

function TripSchedule() {
  const { id } = useParams();
  const [days, setDays] = useState([]);

  useEffect(() => {
    loadDays();
  }, []);

  const loadDays = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/trip/tripDates/${id}`);
      setDays(response.data);
    } catch (error) {
      console.error('Error loading days:', error);
    }
  };

  const [open, setOpen] = useState('0');

  const handleOpen = async (value) => {
    setOpen(open === value ? '0' : value);

  }

  return (
    <div className="flex overflow-hidden w-full">
        <div
          className="flex flex-col  h-fit bg-white bg-opacity-20 overflow-y-scroll w-full"
          style={{ scrollbarWidth: "none" }}
        >
        <div>
            <>
              <Tabs value={open} className="max-w-[40rem] m-8 mb-0 bg-transparent">
                <TabsHeader
                  className="bg-transparent"
                  indicatorProps={{
                    className: 'bg-[#57CC99] shadow-none rounded-full font-bold',
                  }}
                >
                  {days.map((day, index) => (
                    <Tab key={index + 1} value={index + 1} onClick={() => handleOpen(index + 1)}>
                      Day {index + 1}
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
              
              <div className="m-5 mt-7 pt-0 p-5">
                {days.map((day, index) => (
                  <Accordion key={index + 1} open={open === index + 1} icon={<Icon id={(index + 1).toString()} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen((index + 1).toString())}>
                      Day {index + 1}
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Schedule Your Trip
                        </Typography>
                      </div>
                      <div className="flex items-center p-4">
              <div className="flex-1 mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2 ">Start Time:</label>
                <input
                  type="time"
                  className="border rounded p-2 w-full"
                  
                />
              </div>
              <div className="flex-1 mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">End Time:</label>
                <input
                  type="time"
                  className="border rounded p-2 w-full"
                  
                />
              </div>
              <div className="flex-1 mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Select Location:</label>
                {/* Replace the options with the actual options you want to provide in the dropdown */}
                <select
                  className="border rounded p-2 w-full"
               
                >
                  <option value="">Select a location</option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                </select>
              </div>
              <button
                className="bg-[#57CC99] text-white rounded p-2 hover:bg-[#4DAF7C] focus:outline-none focus:ring focus:border-blue-300 mt-6"         
              >
                Add
              </button>
            </div>
                    
                                            
                    </AccordionBody>
                  </Accordion>
                ))}

              </div>

           
           </>
        </div>
        </div>
    </div>
  )
}

export default TripSchedule
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { MapPinIcon, HomeModernIcon, HeartIcon } from "@heroicons/react/24/outline";
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
  const [hotels, setHotels] = useState([]);
  const [activities,setActivities]=useState([]);
  const [attractions, setAttractions] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');

  const handleStartTimeChange = (e) => {
    const newStartTime = e.target.value;
    setStartTime(newStartTime);
    if (newStartTime >= endTime) {
      setError('Start time must be before end time');
    } else {
      setError('');
    }
  };

  const handleEndTimeChange = (e) => {
    const newEndTime = e.target.value;
    setEndTime(newEndTime);
    if (startTime >= newEndTime) {
      setError('Start time must be before end time');
    } else {
      setError('');
    }
  };

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
    const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedHotelList/${id}/${value}`)
    setHotels(result.data);

    const result2=await axios.get(`http://localhost:8080/api/v1/trip/selectedActivityList/${id}/${value}`)
    setActivities(result2.data);

    const result3=await axios.get(`http://localhost:8080/api/v1/trip/selectedAttractionList/${id}/${value}`)
    setAttractions(result3.data);

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
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <input
                  type="time" value={startTime} onChange={handleStartTimeChange}
                  className="border rounded p-2 w-full"
                  
                />
              </div>
              <div className="flex-1 mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">End Time:</label>
                <input
                  type="time" value={endTime} onChange={handleEndTimeChange}
                  className="border rounded p-2 w-full"
                  
                />
              </div>
              <div className="flex-1 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Select Location:</label>
                <select className="border rounded p-2 w-full">
                <option value="">Select a location</option>
                {attractions.map((attraction) => (
                  <option key={attraction.row_id} value={attraction.name}>
                    <span className="flex items-center">
                      <MapPinIcon className="w-5 h-5 mr-2 text-blue-500" /> {attraction.name}
                    </span>
                  </option>
                ))}
                {hotels.map((hotel) => (
                  <option key={hotel.row_id} value={hotel.hotel_name}>
                    <span className="flex items-center">
                      <HomeModernIcon className="w-5 h-5 mr-2 text-red-500" /> {hotel.hotel_name}
                    </span>
                  </option>
                ))}
                {activities.map((activity) => (
                  <option key={activity.row_id} value={activity.company_name}>
                    <span className="flex items-center">
                      <HeartIcon className="w-5 h-5 mr-2 text-green-500" /> {activity.company_name}
                    </span>
                  </option>
                ))}
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
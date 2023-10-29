import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MapPinIcon, BuildingOfficeIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';

import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";

   
  export function FinalPlan() {
    const { id } = useParams();
    const [days, setDays] = useState([]);
    const [schedulesMap, setSchedulesMap] = useState(new Map());


    useEffect(() => {
      const fetchData = async () => {
        await loadDays();
      };
    
      fetchData(); // Fetch days and schedules when the component mounts or when id changes
    }, [id]);
  
    const loadDays = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/trip/tripDates/${id}`);
        setDays(response.data);
        setSchedulesMap(new Map());
        response.data.forEach((day, dayIndex) => {
          loadSchedulesForDay(dayIndex+1);
        });
      } catch (error) { 
        console.error('Error loading days:', error);
      }
    };

    const loadSchedulesForDay = async (day) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/trip/scheduleByDay/${id}/${day}`);
        // Update the schedules state for the specific dayIndex
        setSchedulesMap(prevMap => new Map(prevMap.set(day, response.data)));
      } catch (error) {
        console.error('Error loading schedule:', error);
      }
    };

    


    return (
      <div className="w-[32rem] mt-10">
        {days.map((day, index) => (
          <Timeline>
          <TimelineItem className="">
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#22577A]" />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Day {index + 1}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                {day}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        
          {schedulesMap.get(index + 1) && (
          <div>
          {schedulesMap.get(index + 1).map((schedule, scheduleIndex) => (
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3 flex items-center">
              <TimelineIcon className="bg-[#22577A]" />
              {schedule.type === 'attraction' && <MapPinIcon className="h-5 w-5  " />} {/* Add margin-right (mr-2) for spacing */}
              {schedule.type === 'hotel' && <BuildingOfficeIcon className="h-5 w-5 " />}
              {schedule.type === 'activity' && <UserGroupIcon className="h-5 w-5 " />}
              <Typography variant="h6" color="blue-gray" className="leading-none">
                {schedule.location_name}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600 ml-10">
              {schedule.start_time} - {schedule.end_time}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          ))}
          </div>
          )}
          </Timeline>
          ))}


         
      </div>
    );
  }
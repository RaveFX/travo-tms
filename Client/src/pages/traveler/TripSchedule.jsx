import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
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
import { XMarkIcon } from "@heroicons/react/24/outline";
import Swal from 'sweetalert2';

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
  const user_id = sessionStorage.getItem('user_id');
  const [days, setDays] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [activities, setActivities] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationDay, setLocationDay] = useState('');
  const [locationDate, setLocationDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');
  const [schedules, setSchedules] = useState([{ schedule_id: 'schedule_id', location_name: 'location_name', start_time: 'start_time', end_time: 'end_time', error: '' }]);
  const [editedStartTime, setEditedStartTime] = useState('');
  const [editedEndTime, setEditedEndTime] = useState('');
  const [editedTimes, setEditedTimes] = useState({});


  const handleStartTimeEdit = (scheduleId, newStartTime) => {
    setEditedTimes((prevEditedTimes) => ({
      ...prevEditedTimes,
      [scheduleId]: { ...prevEditedTimes[scheduleId], start_time: newStartTime },
    }));
  };

  const handleEndTimeEdit = (scheduleId, newEndTime) => {
    setEditedTimes((prevEditedTimes) => ({
      ...prevEditedTimes,
      [scheduleId]: { ...prevEditedTimes[scheduleId], end_time: newEndTime },
    }));
  };



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
  // Assuming handleRemoveSchedule is used inside another async function, you should await its result like this:


  const handleRemoveSchedule = (schedule_id, scheduleDay) => {
    
    const response1 =  axios.get(`http://localhost:8080/api/v1/trip/check-admin-or-editor-role/${user_id}/${id}`);
    console.log(response1);
    
    // If user has access, navigate to the add item page
   if (response1.data) {
  
    Swal.fire({
      title: 'Are you sure?',
      text: 'Scheduled activity will be removed from the Schedule!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
      customClass: {
        container: 'custom-swal-container' // Define your custom class here
      },
      style: {
        zIndex: 9999 // Set a high z-index value
      }
    }).then(async (result) => {
      // If user confirms, proceed with the removal logic
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8080/api/v1/trip/removeScheduledActivity/${schedule_id}`)
          console.log("Schedule removed!");
          const response = await axios.get(`http://localhost:8080/api/v1/trip/scheduleByDay/${id}/${scheduleDay}`)
          setSchedules(response.data);

          const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleHotelList/${id}/${scheduleDay}`)
          setHotels(result.data);

          const result2 = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleActivityList/${id}/${scheduleDay}`)
          setActivities(result2.data);

          const result3 = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleAttractionList/${id}/${scheduleDay}`)
          setAttractions(result3.data);

        } catch (error) {
          console.error("Error removing schedule: ", error);
        }
      }
    });
    
  }
  else{
    Swal.fire({
      title: 'No Access',
      text: 'You do not have permission to remove items from this itinerary.',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
      customClass: {
        container: 'custom-swal-container' // Define your custom class here
      },
      style: {
        zIndex: 100000 // Set a high z-index value
      }
    });

  }
  
  };



  const handleLocationChange = (e) => {
    const selectedOption = e.target.value;
    const selectedTripDay = e.target.getAttribute('tripDay');
    const selectedDate = e.target.getAttribute('date');
    setLocationName(selectedOption);
    setLocationDay(selectedTripDay);
    setLocationDate(selectedDate);
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
    const response = await axios.get(`http://localhost:8080/api/v1/trip/scheduleByDay/${id}/${value}`);
    setSchedules(response.data);

    const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleHotelList/${id}/${value}`)
    setHotels(result.data);

    const result2 = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleActivityList/${id}/${value}`)
    setActivities(result2.data);

    const result3 = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleAttractionList/${id}/${value}`)
    setAttractions(result3.data);
  }




  const handleAddButtonClick = async () => {
    const responsez = await axios.get(`http://localhost:8080/api/v1/trip/check-admin-or-editor-role/${user_id}/${id}`);
      
      // If user has access, navigate to the add item page
    if (responsez.data) {
    if (locationName && startTime && endTime) {
      const selectedLocation = JSON.parse(locationName);
      const loadDay = locationDay;
      const newStartTime = new Date(`2023-01-01T${startTime}`);
      const newEndTime = new Date(`2023-01-01T${endTime}`);

      const isOverlap = schedules.some((schedule) => {
        const existingStartTime = new Date(`2023-01-01T${schedule.start_time}`);
        const existingEndTime = new Date(`2023-01-01T${schedule.end_time}`);
        return (
          (newStartTime >= existingStartTime && newStartTime < existingEndTime) ||
          (newEndTime > existingStartTime && newEndTime <= existingEndTime) ||
          (newStartTime <= existingStartTime && newEndTime >= existingEndTime)
        );
      });
      if (isOverlap) {
        setError('Schedule overlaps with existing activities. Please choose a different time.');
        return;
      }else if (startTime >= endTime) {
        setError('Start time must be before end time');
        return;
      }else{
      const data = {
        location_name: selectedLocation.location_Name,
        type: selectedLocation.location_Type,
        type_id: selectedLocation.location_Id,
        start_time: startTime,
        end_time: endTime,
        trip_id: id,
        day: locationDay,
        date: locationDate
      };
      console.log(data);
      try {
        // Make a POST request to your backend endpoint with the data
        await axios.post('http://localhost:8080/api/v1/trip/add-schedule', data);

        // Get updated schedules data after adding a new schedule
        const response = await axios.get(`http://localhost:8080/api/v1/trip/scheduleByDay/${id}/${loadDay}`);
        setSchedules(response.data);
        const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleHotelList/${id}/${loadDay}`)
        setHotels(result.data);

        const result2 = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleActivityList/${id}/${loadDay}`)
        setActivities(result2.data);

        const result3 = await axios.get(`http://localhost:8080/api/v1/trip/selectedScheduleAttractionList/${id}/${loadDay}`)
        setAttractions(result3.data);


        // Handle the response from the backend if needed
        console.log('Data successfully sent to the backend');
      } catch (error) {
        // Handle errors if the POST request fails
        console.error('Error sending data to the backend:', error);
      }
    }
    } else {
      // Handle validation or display an error message if any of the required fields are missing
      console.error('Please fill out all required fields.');
    }

  }
  else{
    Swal.fire({
      title: 'No Access',
      text: 'You do not have permission to remove items from this itinerary.',
      icon: 'error',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
      customClass: {
        container: 'custom-swal-container' // Define your custom class here
      },
      style: {
        zIndex: 100000 // Set a high z-index value
      }
    });

  }
  };

  const updateScheduleTime = async (scheduleId, newStartTime, newEndTime) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/trip/update-schedule-time`, {
        schedule_id: scheduleId,
        start_time: newStartTime,
        end_time: newEndTime,
      });
      console.log('Schedule time updated successfully:', response.data);
      const response1 = await axios.get(`http://localhost:8080/api/v1/trip/scheduleByDay/${id}/${loadDay}`);
      setSchedules(response1.data);
      // You can update the local state or perform any additional actions if necessary
    } catch (error) {
      console.error('Error updating schedule time:', error);
    }
  };






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
                    Day {index + 1} Schedule
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Schedule Your Trip
                      </Typography>
                    </div>


                    {schedules.map((schedule) => (


                      <div className="flex items-center p-4">
                        <div className="flex-1 mr-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2 ">Start Time:</label>
                          {error && <div style={{ color: 'red' }}>{schedule.error}</div>}
                          <input
                            type="time"
                            value={schedule.start_time}
                            className="border rounded p-2 w-full"
                          />
                        </div>
                        <div className="flex-1 mr-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2">End Time:</label>
                          <input
                            type="time"
                            value={schedule.end_time}
                            className="border rounded p-2 w-full"
                          />
                        </div>
                        <div className="flex-1 mr-2">
                          <label className="block text-gray-700 text-sm font-bold mb-2">Select Location:</label>
                          <div className="mr-4">{schedule.location_name}</div>

                        </div>

                        <button onClick={() => handleRemoveSchedule(schedule.schedule_id, index + 1)}
                          className={`rounded p-2 focus:outline-none focus:ring focus:border-blue-300 mt-6 bg-gray-200 hover:bg-red-70`}
                        >
                          <XMarkIcon className="w-4 h-4 stroke-yellow" />
                        </button>
                      </div>

                    ))}



                    <div className="flex items-center p-4">{error && <div style={{ color: 'red' }}>{error}</div>}</div>
                    <div className="flex items-center p-4">


                      <div className="flex-1 mr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ">Start Time:</label>

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
                        <select value={locationName} tripDay={index + 1} date={day} className="border rounded p-2 w-full" onChange={handleLocationChange}>
                          <option value="">Select a location</option>
                          {attractions.map((attraction) => (
                            <option value={JSON.stringify({ location_Name: attraction.name, location_Id: attraction.place_id, location_Type: 'attraction' })}>

                              {attraction.name}

                            </option>
                          ))}
                          {hotels.map((hotel) => (
                            <option value={JSON.stringify({ location_Name: hotel.hotel_name, location_Id: hotel.hotel_id, location_Type: 'hotel' })} >

                              {hotel.hotel_name}

                            </option>
                          ))}
                          {activities.map((activity) => (
                            <option value={JSON.stringify({ location_Name: activity.company_name, location_Id: activity.agent_id, location_Type: 'activity' })}>

                              {activity.company_name}

                            </option>
                          ))}
                        </select>

                      </div>

                      <button onClick={handleAddButtonClick}
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
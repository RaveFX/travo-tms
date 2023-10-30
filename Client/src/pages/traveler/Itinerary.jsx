import React, { useEffect, useState } from 'react'
import { StarIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.css'; // Import SweetAlert CSS
//import 'sweetalert2/dist/sweetalert2.min.js'; // Import SweetAlert JavaScrip
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

function Itinerary() {
  const { id } = useParams();
  const [days, setDays] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [activities, setActivities] = useState([]);
  const [attractions, setAttractions] = useState([]);


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

  const handleRemoveAttraction = (attraction) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Attraction will be removed from the Intinerary!',
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
          const day = attraction.day;
          await axios.delete(`http://localhost:8080/api/v1/trip/removeSelectedAttraction/${attraction.row_id}`)
          console.log("Attraction added removed!");
          const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedAttractionList/${id}/${day}`)
          setAttractions(result.data);

          //navigate(`/traveler/trip-planner/${id}`);
        } catch (error) {
          console.error("Error removing attraction: ", error);
        }
      }
    });
  };

  const handleRemoveHotel = (hotel) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Hotel will be removed from the Intinerary!',
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
          const day = hotel.day;
          await axios.delete(`http://localhost:8080/api/v1/trip/removeSelectedHotel/${hotel.row_id}`)
          console.log("Hotel added removed!");
          const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedHotelList/${id}/${day}`)
          setHotels(result.data);

          //navigate(`/traveler/trip-planner/${id}`);
        } catch (error) {
          console.error("Error removing hotel: ", error);
        }
      }
    });
  };

  const handleRemoveActivity = (activity) => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'Activity will be removed from the Intinerary!',
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
          const day = activity.day;
          await axios.delete(`http://localhost:8080/api/v1/trip/removeSelectedActivity/${activity.row_id}`)
          console.log("activity added removed!");
          const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedActivityList/${id}/${day}`)
          setActivities(result.data);

          //navigate(`/traveler/trip-planner/${id}`);
        } catch (error) {
          console.error("Error removing activity: ", error);
        }
      }
    });
  };


  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleBackClick = () => {
    // Navigate to the previous page or route when the "Back" button is clicked
    navigate("/mytrips");
  };

  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(true);
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const handleNextClick = () => {
    // Navigate to the next page or route when the "Next" button is clicked
    //navigate('/next-page');
    setIsOpen(false);
    setIsSubSidebarOpen(true);
  };

  const [open, setOpen] = useState('0');

  const handleOpen = async (value) => {
    setOpen(open === value ? '0' : value);
    const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedHotelList/${id}/${value}`)
    setHotels(result.data);

    const result2 = await axios.get(`http://localhost:8080/api/v1/trip/selectedActivityList/${id}/${value}`)
    setActivities(result2.data);

    const result3 = await axios.get(`http://localhost:8080/api/v1/trip/selectedAttractionList/${id}/${value}`)
    setAttractions(result3.data);

  }

  return (
    <>
      <div className="flex overflow-hidden w-full">
        <div
          className="flex flex-col  h-fit bg-white bg-opacity-20 overflow-y-scroll w-full"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex justify-between">
          </div>
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
                          Attractions
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                          {(
                            attractions.map((attraction) => (
                              <div
                                key={attraction.place_id}

                                className="bg-white p-4 rounded-lg shadow border relative"
                              >
                                <div className="flex items-center justify-center mb-2">
                                  {attraction.img_url ? (
                                    <img
                                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.img_url}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                                      alt={`${attraction.name} - Photo`}
                                      className="w-full h-44 rounded-md object-cover"
                                    />
                                  ) : (
                                    <img
                                      src="/main/no_image_available.jpeg" // Provide the path to your default image
                                      alt="Default Image"
                                      className="w-full h-44 rounded-md object-cover"
                                    />
                                  )}
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{attraction.name}</h2>
                                <p className="mb-2">Address: {attraction.address}</p>
                                <div className="flex items-center mb-2">

                                  <div className="flex items-center">
                                    <div className="absolute bottom-2 right-2">
                                      <Button className="bg-gray-300 text-[#FF5C5C]  rounded-full" onClick={() => handleRemoveAttraction(attraction)}>Remove</Button>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                        <Link to={`/traveler/attractions/${id}/${index + 1}`}><Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item
                        </Button>
                        </Link>
                      </div>

                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                          {/* <Link to={ }> */}
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                          {hotels.map((hotel) => (
                            <div
                              key={hotel.hotel_id}
                              className="bg-white p-4 rounded-lg shadow border relative "
                              onClick={""}
                            >
                              <div className="flex items-center justify-center mb-2">
                                <img
                                  src={`/main/${hotel.hotel_img}`}
                                  alt={`${hotel.hotel_name}'s Photo`}
                                  className="w-full h-44 rounded-md object-cover"
                                />
                              </div>
                              <h2 className="text-xl font-semibold mb-2">{hotel.hotel_name}</h2>
                              <p className="mb-2">{hotel.description}</p>
                              <div className="flex items-center mb-2">
                                <span className="mr-2 flex flex-row gap-1 justify-center">{hotel.total_reviews.toFixed(1)}<StarIcon className="w-4 h-4 strok-yellow" /></span>
                                <div className="flex items-center">
                                  <svg
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
                                  </svg>
                                  <span className="ml-1 text-sm text-gray-500">
                                    ({hotel.total_reviews}  reviews)
                                  </span>
                                  <div className="absolute bottom-2 right-2">
                                    <Button className="bg-gray-300 text-[#FF5C5C]  rounded-full" onClick={() => handleRemoveHotel(hotel)}>Remove</Button>
                                  </div>

                                </div>
                              </div>

                            </div>
                          ))}

                        </div>

                      <Link to={`/traveler/hotels/${id}/${index + 1}`}><Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button></Link>
                    </div>
                      {/* </Link> */}

                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Activities
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {activities.map((activity) => (
                          <div
                            key={activity.agent_id}
                            className="bg-white p-4 rounded-lg shadow border relative "
                            onClick={""}
                          >
                            <div className="flex items-center justify-center mb-2">
                              <img
                                src={`/main/${activity.activity_img}`}
                                alt={`${activity.company_name}'s Photo`}
                                className="w-full h-44 rounded-md object-cover"
                              />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{activity.company_name}</h2>
                            <p className="mb-2">{activity.description}</p>
                            <div className="flex items-center mb-2">
                              <span className="mr-2 flex flex-row gap-1 justify-center">{activity.total_reviews.toFixed(1)}<StarIcon className="w-4 h-4 strok-yellow" /></span>
                              <div className="flex items-center">
                                <svg
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
                                </svg>
                                <span className="ml-1 text-sm text-gray-500">
                                  ({activity.total_reviews}  reviews)
                                </span>
                                <div className="absolute bottom-2 right-2">
                                  <Button className="bg-gray-300 text-[#FF5C5C]  rounded-full" onClick={() => handleRemoveActivity(activity)}>Remove</Button>
                                </div>

                              </div>
                            </div>

                          </div>
                        ))}
                      </div>
                      <Link to={`/traveler/activities/${id}/${index + 1}`}><Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button></Link>
                    </div>
                  </AccordionBody>
                  </Accordion>
                ))}

            </div>
          </>


        </div>

      </div>
    </div >
    </>
  );
}

export default Itinerary;

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TabBar from '../../components/web-component/TabBar';
import PopupModal from '../../components/web-component/PopupModal';
import { Button } from "@material-tailwind/react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Swal from 'sweetalert2';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react";
import SwiperCard from '../../components/web-component/SwiperCard';




function Mytrips() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const user_id = sessionStorage.getItem('user_id');
  const [trips, setTrips] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/trip/tripList/${user_id}`)
    setTrips(result.data);
  }


  // const handleNavigate = () => {
  //   // Example: Navigate to '/other-page' when the button is clicked
  //   navigate('/planner');
  // };
  console.log(user_id);

  const createTrip = async () => {
    setIsOpen(true);
    try {
      const tripResponse = await axios.post('http://localhost:8080/api/v1/trips/create', {
        trip_admin: user_id,
      });

      console.log('Trip created:', tripResponse.data);
      const tripId = tripResponse.data.tripId;
      const unique_link = tripResponse.data.unique_link;

      const tripMembersResponse = await axios.post('http://localhost:8080/api/v1/trips/create-members', {
        user_id: user_id,
        trip_id: tripId,
      });

      console.log('Trip members created:', tripMembersResponse.data);
      navigate(`/traveler/trip-planner/${tripId}`);
    } catch (error) {
      console.error('Error creating trip:', error);
    }
  };

  const handleCardClick = (trip) => {
    console.log('Card clicked for trip:', trip);
  };

  // useEffect(() => {
  //   loadTripinfo();
  // }, []);

  // const loadTripinfo = async () => {
  //   const result = await axios.get(`http://localhost:8080/api/v1/trips/triplist/${user_id}`)
  //   setTripinfo(result.data);
  // }

  const data = [
    {
      label: "All Trips",
      value: "all trips",
      desc: ``,
    },
    {
      label: "Private Trips",
      value: "private",
      desc: ``,
    },
    {
      label: "Public Trips",
      value: "public",
      desc: ``,
    },
    {
      label: "My Saves",
      value: "saved",
      desc: ``,
    },
  ];

const handleEditTripClick = () => {
  setIsEditorOpen(true);
};

const handleOpenCalander = () => {
  setIsOpen(true);
};

const handleEditRolesClick = async(trip_id) => {
  const response = await axios.get(`http://localhost:8080/api/v1/trip/check-admin-or-editor-role/${user_id}/${trip_id}`);
  if (response.data) {   
  // Navigate to the edit roles page
  navigate(`/traveler/edit-roles/${trip_id}`);
  }else{
    Swal.fire({
      title: 'No Access',
      text: 'Only Trip Admin have the access to change settings of the trip',
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

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="My Trips" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
        <TopNavbar />
        <div>
          <div className='flex justify-between'>
            <div className="w-[70%] pt-8 ">
              <TabBar data={data} />
            </div>

            <Button onClick={createTrip} className='h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'>
              Create Trip
            </Button>
          </div>
          <div className='swiper container h-fit w-[1720px] hover:none'>
            <Swiper
              className='h-[100%] w-[100%]'
              slidesPerView={4}
              initialSlide={2}
              freeMode={true}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
                clickable: true,
              }}
              modules={[Navigation, FreeMode]}
            >

              {/* Swiper slides */}
              <div className='swiper-wrapper p-0 m-0 flex justify-center w-[1500px] absolute top-9 z-10 '>
              {
              trips.map((trips)=>(
                <SwiperSlide className='w-[100%]'>
               
                <Card className="mt-6 md:w-[283px] h-[467px]  p-3 hover:scale-105 hover:delay-300">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img src="/traveler/sigiriya.jpg" alt="Sigiriya" className="object-cover h-48 w-96" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                  {trips.trip_name}
                  </Typography>
                  
                  <Typography>
                  {trips.description}
                  </Typography>
                  <Typography className="flex flex-row ">
                    Start Date : {trips.start_date}
                  </Typography>
                  <Typography className="flex flex-row ">
                    End Date : {trips.end_date}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-between p-0">
                <Link to={`/traveler/trip-planner/${trips.trip_id}`}><Button className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] ">Check</Button></Link>
                  <Button onClick={() => handleEditRolesClick(trips.trip_id)} className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#E9E9E9] hover:bg-[#22577A]">Settings</Button>
                </CardFooter>
              </Card>
              
                </SwiperSlide>
              ))
              }
                </div>
                <div className="flex justify-center w-[100%] absolute bottom-7 z-10 ">
                <div className="flex items-end justify-between px-[1rem] w-auto h-auto ">
                  <div className="swiper-prev flex flex-col justify-center items-center flex-shrink-0 text-gray w-[3rem] h-[3rem] rounded-[5rem] bg-[#fff] drop-shadow-lg">
                    <ArrowLeftIcon className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-end justify-between px-[1rem] w-auto h-auto">
                  <div className="swiper-next flex flex-col justify-center items-center flex-shrink-0 text-white w-[3rem] h-[3rem] rounded-[5rem] bg-[#57CC99] drop-shadow-lg">
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
          <PopupModal isOpen={isOpen} setIsOpen={setIsOpen} />
          {/*<div className="trip-list">
            {tripinfo.map((tripinfo) => (
              <Link to={`/traveler/trip-planner/${tripinfo.tripId}`} >
                <button
                  className="h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold"
                  onClick={() => handleCardClick(tripinfo)}
                >
                  {tripinfo.tripId} {tripinfo.trip_admin}
                </button>
              </Link>
            ))}
            </div>*/}

        </div>
          <PopupModal isOpen={isOpen} setIsOpen={setIsOpen}/>
         

      </div>
    </div>
  );
}

export default Mytrips;
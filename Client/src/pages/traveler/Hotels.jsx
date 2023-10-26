import React, { useEffect, useState } from "react";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";
import TabBar from '../../components/web-component/TabBar';
import { Button,Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';


function HotelDetails() {
  const { id , day} = useParams();
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [subSidebarState, setSubSidebarState] = useState(1);
  const [hotels,setHotels]=useState([]);

useEffect(() => {
    loadHotels();
},[]); 


const loadHotels=async()=>{
    const result=await axios.get(`http://localhost:8080/api/v1/trip/hotelList`)
    setHotels(result.data);
}
const handleAddHotel = async (hotel) => {
  try {
    // Make a POST request to your backend API endpoint to store the attraction details
    await axios.post("http://localhost:8080/api/v1/trip/add-hotel", {
      hotel_id: hotel.hotel_id,
      trip_id: id,
      day : day
    });
    // Handle success, e.g., show a success message to the user
    console.log("Hotel added successfully!");
    // Display a success message using SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Hotel added successfully!',
      showConfirmButton: false,
      timer: 1500, // Automatically close after 1.5 seconds
      customClass: {
        // Apply a custom z-index to the SweetAlert modal
        
      },
    });
  } catch (error) {
    // Handle error, e.g., show an error message to the user
    console.error("Error adding hotel: ", error);
  }
};

  const data = [
    {
      label: "Closer",
      value: "all trips",
      desc: ``,
      
    },
    {
      label: "All",
      value: "private",
      desc: ``,
    },
    {
      label: "Selected",
      value: "public",
      desc: ``,
    },
    {
      label: "My Saves",
      value: "saved",
      desc: ``,
    },
  ];
  return (
    <div className="flex h-screen overflow-hidden ">
    <Sidebar
        active="My Trips"
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
        subSidebarState={subSidebarState}
        setSubSidebarState={setSubSidebarState}
      />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 z-[10000] ">
      <TopNavbar />
      <div className='flex justify-between'>
              <div className="w-[70%] pt-8 ">
                  <TabBar data={data} />
              </div>
             
          </div>
      <div className="container mx-4  overflow-hidden">
      <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D] mb-6">
        Hotels and Accommodations
      </h1>
      
      <div className="relative flex w-full gap-2 md:w-max rounded-full mr-10">
              <Input
                type="search"
                label="Type here..."
                className="pr-20 rounded-full style-none"
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button size="sm" className="!absolute right-1 top-1 rounded-full bg-[#57CC99] hover:shadow-none active:shadow-none">
                <MagnifyingGlassIcon className="h-4 w-4" />
              </Button>
          </div>
          </div>
      <div className="overflow-y-auto h-[calc(100vh-150px)] mr-4" style={{ scrollbarWidth: 'none' }}>
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
                <span className="mr-2 flex flex-row gap-1 justify-center">{hotel.total_reviews.toFixed(1)}<StarIcon  className="w-4 h-4 strok-yellow"/></span>
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
                    <Button className="bg-green" onClick={() => handleAddHotel(hotel)}>Add Hotel</Button>
                  </div>
                
                </div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
      <div className="mt-8"></div>
    </div>
    
  );
}

export default HotelDetails;

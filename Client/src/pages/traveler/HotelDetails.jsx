import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, MapPinIcon, PhoneIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const Hotel = () => {
  const navigate = useNavigate();

  const hotel = {
    coverPhoto: "/traveler/hotelcover.jpg",
    name: "Hotel XYZ",
    tagline: "Experience Luxury Like Never Before",
    location: {
      city: "Colombo",
      country: "Sri Lanka",
    },
    phoneNumber: "0775879320",
    priceRange: "$$$",
    rooms: [
      {
        photo: "/traveler/hotelroom1.jpg",
        name: "Luxury Suite",
        description: "Spacious suite with stunning views.",
        price: "$500",
      },
      {
        photo: "/traveler/hotelroom2.jpg",
        name: "Deluxe Room",
        description: "Comfortable room with modern amenities.",
        price: "$300",
      },
    ],
  };

  return (
    <div
      className="overflow-y-auto h-[calc(100vh-10px)] m-5"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="mx-auto m-0 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="mb-0">
          <ArrowLeftIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="relative mb-6 overflow-hidden">
          <img
            src={hotel.coverPhoto}
            alt="Hotel Cover"
            className="w-full h-[45vh] "
          />
          <div className="absolute top-40 left-0 right-0 text-center p-4 text-white">
            <h1 className="text-5xl font-semibold">{hotel.name}</h1>
            <p className="text-sm">{hotel.tagline}</p>
          </div>
        </div>
        <div className="w-[100%] flex justify-around gap-0 ">
          {/* <h2 className="text-xl font-semibold mb-4">Basic Details</h2> */}
          <div className="flex flex-row justify-center gap-[-4] bg-gray-300 p-5 w-fit text-black">
            <div className="flex items-center w-fit p-3 gap-3 ">
              <div className="rounded-full bg-gray-100 p-3 mr-3">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p>
                  {hotel.location.city}, {hotel.location.country}
                </p>
              </div>
            </div>
            <div className="flex items-center w-fit p-3 gap-3 ">
              <div className="rounded-full bg-gray-100 p-3 mr-3">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>{hotel.phoneNumber}</p>
              </div>
            </div>
            <div className="flex items-center w-fit p-3 gap-3 ">
              <div className="rounded-full bg-gray-100 p-3 mr-3">
                <CurrencyDollarIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Price Range</p>
                <p>{hotel.priceRange}</p>
              </div>
            </div>
            <button
              onClick={() => {} /* Add to selections */}
              className="bg-[#377A85] text-white px-4 py-2 w-fit h-fit p-3 rounded-full"
            >
              Add to Selections
            </button>
            {/* Additional details can be added here */}
          </div>
          <div className="mt-4 flex justify-between">
            {/* <button */}
              {/* onClick={() => {} /* Navigate to booking page */} 
              {/* className="bg-[#57CC99] text-white px-4 py-2 w-fit h-fit p-3 rounded-full" */}
            {/* > */}
              {/* Book Now */}
            {/* </button> */}
            
          </div>
        </div>
        <div
          className="mt-8 overflow-y-auto h-[calc(50vh-10px)]"
          style={{ scrollbarWidth: "none" }}
        >
          <h2 className="text-xl font-semibold mb-4">Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotel.rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow border border-[#57CC99]"
              >
                <img
                  src={room.photo}
                  alt={`Room ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                <p className="mb-2">{room.description}</p>
                <p>Price: {room.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

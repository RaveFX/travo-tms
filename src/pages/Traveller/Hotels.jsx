import React from "react";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";

function HotelDetails() {
  // Sample data for hotels and accommodations
  const hotels = [
    // ... populate with hotel objects
    {
      name: "Luxury Resort",
      description: "5-star resort with ocean view.",
      photo: "./public/images/hotel.svg", // Replace with actual photo filename
      ratings: 4.5,
      totalReviews: 120,
    },
    {
      name: "Cozy Inn",
      description: "Charming inn in the heart of the city.",
      photo: "./public/images/hotel.svg", // Replace with actual photo filename
      ratings: 4.8,
      totalReviews: 85,
    },
    {
        name: "Cozy Inn",
        description: "Charming inn in the heart of the city.",
        photo: "./public/images/hotel.svg", // Replace with actual photo filename
        ratings: 4.8,
        totalReviews: 85,
      },
      {
        name: "Cozy Inn",
        description: "Charming inn in the heart of the city.",
        photo: "./public/images/hotel.svg", // Replace with actual photo filename
        ratings: 4.8,
        totalReviews: 85,
      },
      {
        name: "Cozy Inn",
        description: "Charming inn in the heart of the city.",
        photo: "./public/images/hotel.svg", // Replace with actual photo filename
        ratings: 4.8,
        totalReviews: 85,
      },
      {
        name: "Cozy Inn",
        description: "Charming inn in the heart of the city.",
        photo: "./public/images/hotel.svg", // Replace with actual photo filename
        ratings: 4.8,
        totalReviews: 85,
      },
      {
        name: "Cozy Inn",
        description: "Charming inn in the heart of the city.",
        photo: "./public/images/hotel.svg", // Replace with actual photo filename
        ratings: 4.8,
        totalReviews: 85,
      },
      {
        name: "Cozy Inn",
        description: "Charming inn in the heart of the city.",
        photo: "./public/images/hotel.svg", // Replace with actual photo filename
        ratings: 4.8,
        totalReviews: 85,
      },
      {
      name: "Cozy Inn",
      description: "Charming inn in the heart of the city.",
      photo: "./public/images/hotel.svg", // Replace with actual photo filename
      ratings: 4.8,
      totalReviews: 85,
    },
    // ... add more hotels
  ];

  return (
    <div className="container mx-auto mt-8 overflow-hidden">
      <XMarkIcon
        className="w-8 h-8 cursor-pointer relative left-[95%]"
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D] mb-6">
        Hotels and Accommodations
      </h1>

      <div className="overflow-y-auto h-[calc(100vh-150px)]" style={{ scrollbarWidth: 'none' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow border border-[#57CC99]"
              onClick={""}
            >
              <div className="flex items-center justify-center mb-2">
                <img
                  src={hotel.photo}
                  alt={`${hotel.name}'s Photo`}
                  className="w-full h-44 rounded-md object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
              <p className="mb-2">{hotel.description}</p>
              <div className="flex items-center mb-2">
                <span className="mr-2 flex flex-row gap-1 justify-center">{hotel.ratings.toFixed(1)}<StarIcon  className="w-4 h-4 strok-yellow"/></span>
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
                    ({hotel.totalReviews}  reviews)
                  </span>
                </div>
              </div>
              {/* ... other details */}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8"></div>
    </div>
  );
}

export default HotelDetails;

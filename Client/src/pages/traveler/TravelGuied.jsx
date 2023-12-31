import React from "react";
import { useNavigate } from "react-router-dom";

import { Rating } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
function TravelGuide() {
  // Sample data for travel guides
  const travelGuides = [
    // ... populate with travel guide objects
    {
      name: "Kanishka Sewwandi",
      description: "Experienced guide for adventure trips.",
      photo: "/traveler/Female.svg", // Replace with actual photo filename
      ratings: 4.5,
      completedTrips: 120,
    },
    {
      name: "Samindu Cooray",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Male.svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
    {
      name: "Madushi Saumya",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Female(1).svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
    {
      name: "Kavishka ",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Male.svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
    {
      name: "Thanduni",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Male.svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
    {
      name: "Samuel",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Male.svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
    {
      name: "Samuel",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Male.svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
    {
      name: "Samuel",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Male.svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
    {
      name: "Samuel",
      description: "Local guide with knowledge of cultural sites.",
      photo: "/traveler/Male.svg", // Replace with actual photo filename
      ratings: 4.8,
      completedTrips: 85,
    },
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
        Travel Guides
      </h1>

      <div className="overflow-y-auto h-[calc(100vh-150px)]"
      style={{ scrollbarWidth: 'none' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {travelGuides.map((guide, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow border border-[#57CC99]"
              onClick={""}
            >
              <div className="flex items-center justify-center mb-2">
                <img
                  src={guide.photo}
                  alt={`${guide.name}'s Photo`}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{guide.name}</h2>
              <p className="mb-2">{guide.description}</p>
              <div className="flex items-center mb-2">
                <span className="mr-2">{guide.ratings.toFixed(1)}</span>
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
                    ({guide.completedTrips} trips)
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

export default TravelGuide;

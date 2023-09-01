// BecomeSellerPage.js

import React from "react";
import TopNavbarLanding from "../../components/web-component/Landingpg-Navbar";
const BecomeServiceProvider = () => {
  return (
    <div className="bg-gray-100 h-screen ">
      <TopNavbarLanding className="fixed"/>
      <div className="object-contain h-[90vh] overflow-y-scroll">
        {/* <div className="flex flex-col"> */}
          {/* <div className=" absolute top-40 left-0 right-0 w-full h-[600px] bg-black opacity-70"></div> */}
          <div className="relative">
            <div className="absolute top-40 left-0 right-0 text-center p-0 bg-black-100 text-white text-shadow-20 z-[1000]">
              <h1 className="text-[100px] font-semibold mb-4">
                Become a Service Provider
              </h1>
              <p className="text-white mb-8">
                Join our platform as a service provider and offer your travel
                planning expertise to our users.
              </p>
            </div>
            
            <video
              className="top-1 left-0 right-0 w-full  object-cover bg-black-200"
              autoPlay
              loop
              muted
            >
              <source src="main/video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {/* Hotel Category */}
              <div className="p-4 bg-white rounded-lg shadow-md text-center">
                <img
                  src="hotel-icon.png"
                  alt="Hotel Icon"
                  className="mx-auto w-16 h-16 mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">Hotel</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Select
                </button>
              </div>
              {/* Activity Agent Category */}
              <div className="p-4 bg-white rounded-lg shadow-md text-center">
                <img
                  src="activity-icon.png"
                  alt="Activity Icon"
                  className="mx-auto w-16 h-16 mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">Activity Agent</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Select
                </button>
              </div>
              {/* Travel Guide Category */}
              <div className="p-4 bg-white rounded-lg shadow-md text-center">
                <img
                  src="guide-icon.png"
                  alt="Guide Icon"
                  className="mx-auto w-16 h-16 mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">Travel Guide</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Select
                </button>
              </div>
              {/* Vehicle Renter Category */}
              <div className="p-4 bg-white rounded-lg shadow-md text-center">
                <img
                  src="vehicle-icon.png"
                  alt="Vehicle Icon"
                  className="mx-auto w-16 h-16 mb-2"
                />
                <h2 className="text-lg font-semibold mb-1">Vehicle Renter</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default BecomeServiceProvider;

// BecomeSellerPage.js

import React from "react";
import TopNavbarLanding from "../../components/web-component/Landingpg-Navbar";
const BecomeServiceProvider = () => {
  return (
    <div className="bg-gray-100 h-screen ">
      <TopNavbarLanding className="fixed" />
      <div
        className="object-contain h-[90vh] overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        {/* <div className="flex flex-col"> */}

        <div className="relative">
          <div className="absolute top-40 left-0 right-0 text-center p-0 bg-black-100 text-white text-shadow-20 z-[100]">
            <h1 className="text-4xl md:text-8xl font-semibold mb-4">
              Become a Service Provider
            </h1>
            <p className="text-white mb-8">
              Join our platform as a service provider and offer your travel
              planning expertise to our users.
            </p>
            <button className="bg-[#2AB57D] text-white px-4 py-2 font-semibold rounded hover:bg-[#2AB67D]">
              Become a Service Provider
            </button>
          </div>
          <div className=" absolute top-0 left-0 right-0 w-full h-[500px] z-0 object-cover bg-black opacity-70"></div>
          <video
            className="top-0 left-0 right-0 w-full h-[500px] z-0 object-cover bg-black-200"
            autoPlay
            loop
            muted
          >
            <source src="main/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <h4 className="flex justify-center mt-[20px] text-2xl md:text-3xl font-semibold mb-4">
            Join our growing Service provider community
          </h4>
        </div>

        <div className="flex justify-center mt-[20px] z-[1000]">
          <div className="grid grid-cols-2 gap-4 m-2 md:grid-cols-4">
            {/* Hotel Category */}
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img
                src="main/hotelOwner.jpg"
                alt="Hotel Icon"
                className="mx-auto w-fit h-fit mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">Hotel & Accomodation</h2>
              {/* <button className="bg-[#22577A] text-white px-4 py-2 rounded hover:bg-[#22578A]">
                Select
              </button> */}
            </div>
            {/* Activity Agent Category */}
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img
                src="main/activityAgent.jpg"
                alt="Activity Icon"
                className="mx-auto w-fit h-fit mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">Activity Agent</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Select
              </button>
            </div>
            {/* Travel Guide Category */}
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img
                src="main/travelGuied.jpg"
                alt="Guide Icon"
                className="mx-auto w-fit h-fit mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">Travel Guide</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Select
              </button>
            </div>
            {/* Vehicle Renter Category */}
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img
                src="main/vehicleRenter.jpg"
                alt="Vehicle Icon"
                className="mx-auto w-fit h-fit mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">Vehicle Renter</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Select
              </button>
            </div>
          </div>
        </div>
        {/* How It Works Section */}
        <div className="bg-white mt-8 p-8 rounded shadow-md text-center">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              
              <img
                src="main/request.png"
                alt="Step 1 Icon"
                className="w-16 h-16 mb-2"
              />
              <div className="text-2xl font-semibold mb-2">Fill the form</div>
              <p className="text-gray-600">
                Sign up as a service provider by clicking the "Become a Service Provider" button.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              
              <img
                src="main/send.png"
                alt="Step 2 Icon"
                className="w-16 h-16 mb-2"
              />
              <div className="text-2xl font-semibold mb-2">Send Request</div>
              <p className="text-gray-600">
                Complete your profile with information about your services.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              
              <img
                src="main/verified.png"
                alt="Step 3 Icon"
                className="w-16 h-16 mb-2"
              />
              <div className="text-2xl font-semibold mb-2">Get Verified</div>
              <p className="text-gray-600">
                Wait for approval from our team to start offering your services.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              
              <img
                src="main/paid.png"
                alt="Step 3 Icon"
                className="w-16 h-16 mb-2"
              />
              <div className="text-2xl font-semibold mb-2">Earn Money</div>
              <p className="text-gray-600">
                Wait for approval from our team to start offering your services.
              </p>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default BecomeServiceProvider;

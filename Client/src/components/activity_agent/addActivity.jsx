import React from "react";
import { Link } from "react-router-dom";

export default function Activityadd() {
  return (
    <div>
      <h5 class="text-3xl py-4">Add New Activity</h5>
      <div className="flex justify-center m-6">
        <div className="grid grid-cols-2 w-full bg-gray-100  rounded-lg shadow-lg">
          {/* Right Side - Add Photos */}
          <div className="p-10 bg-white flex items-center justify-center m-4">
            <div className="bg-gray-300 p-16  text-white font-bold text-4xl cursor-pointer">
              +
            </div>
          </div>

          {/* Left Side - Add Product Form */}
          <div className="p-10">
            <div className="p-10 bg-white ">
              <h2 className="text-xl font-semibold mb-2">Add New Activity</h2>
              <form>
                <div className="mb-4">
                  <div>
                    <label
                      htmlFor="activityName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Activity Name :
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="activityName"
                      name="activityName"
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                      placeholder="Enter activity name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description :
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    placeholder="Enter description"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="activityPrice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Activity Price
                  </label>
                  <input
                    type="number"
                    id="activityPrice"
                    name="activityPrice"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    placeholder="Enter activity price"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="facilities"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Facilities :
                  </label>
                  <input
                    type="text"
                    id="facilities"
                    name="facilities"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    placeholder="Enter facilities"
                  />
                </div>
              </form>

              <div className="flex items-center justify-center p-4">
                <button class="bg-blue-500 text-white hover:bg-green-700 font-bold py-1 px-2 border border-green-500 rounded mr-5">
                  Submit
                </button>
                {/* <Link to="/products" className="text-blue-500 underline">
                                    Cancel
                                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

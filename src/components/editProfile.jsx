import React from "react";
import { Rating, Button, Card, List, ListItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const EditProfile = ({ name, email, location }) => {
  return (
    <div className=" sm:m-10 ">
      {/* <Card className="w-96 h-full shadow-none  ">
                <List className='sm:flex-col flex-row  '>
                    <ListItem>My Profile</ListItem>
                    <ListItem>Setting</ListItem>
                    <ListItem>Settings</ListItem>
                </List>
            </Card> */}

      <p className="text-3xl">Edit Profile</p>
      <div className="flex flex-row  w-full lg:flex-row sm:p-5 p-2 ">
        <div className="grid flex-grow h-96 w-1/6 mr-5 card bg-base-300 border-black-200 border-2 rounded-xl items-center justify-center">
          <div className="">
            <p className="text-2xl mt-3">Personal Infomation</p>

            <div className="mt-6 flex-col ">
              <div className=" flex flex-row ">
                <div className="flex flex-col  pr-2">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    First Name
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Last Name
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <div className="flex flex-col  pr-2">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Email
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Phone
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-2">
                <div className="flex flex-col  pr-2">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Location
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col  pr-2">
                  {/* <label className="mb-3 text-sm leading-none text-gray-800">Location</label>
                                    <input type tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" /> */}
                </div>

                <div className="my-10 mx-8">
                  <button
                    type="button"
                    class="text-green bg-gray-300 hover:bg-black rounded-full  focus:ring-green font-medium text-sm px-5 
                                    py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <Link to="/vehicle_owner_dashboard">Save</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid flex-grow h-96 w-1/6 card bg-base-300 border-black-200 border-2 rounded-xl items-center justify-center">
          <div className="">
            <p className="text-2xl mt-3">Password</p>

            <div className="mt-6 flex-col ">
              <div className=" flex flex-col">
                <div className="flex flex-col  pr-2">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Current Password
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    New Password
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
              </div>

              <div className="flex flex-row mt-2">
                <div className="flex flex-col  pr-2">
                  <label className="mb-3 text-sm leading-none text-gray-800">
                    Retype Password
                  </label>
                  <input
                    type
                    tabIndex={0}
                    aria-label="Enter date of birth"
                    className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  />
                </div>
                <div className="flex flex-col  pr-2">
                  {/* <label className="mb-3 text-sm leading-none text-gray-800">Location</label>
                                    <input type tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" /> */}
                </div>

                <div className="my-10 mx-8">
                  <button
                    type="button"
                    class="text-green bg-gray-300 hover:bg-black rounded-full  focus:ring-green font-medium text-sm px-5 
                                    py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <Link to="/vehicle_owner_dashboard">Save</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

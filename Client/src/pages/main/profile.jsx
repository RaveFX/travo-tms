import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { Button, Typography, Avatar } from "@material-tailwind/react";

function UserProfile() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const user_id = sessionStorage.getItem("user_id");
  const profileImage = sessionStorage.getItem("profileImage");

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(`/traveler/details/${user_id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUserDetails();
  }, [user_id]);

  

  const save = () => {
    const updateUserData = async () => {
      try {
        const response = await axios.put(
          `/traveler/update/${user_id}`,
          userData,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
      } catch (err) {
        console.error(err);
      }
    };

    updateUserData();
  };

  const validatePhoneNumber = (event) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]{10}$/;
  
    if (!regex.test(inputValue)) {
      // Display an error message to the user.
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 mb-4">
        <TopNavbar />
        <form
          className="overflow-y-scroll min-h-screen p-4 mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex flex-row gap-[30px]">
            <Avatar
              variant="circular"
              alt="candice"
              src={`data:application/img;base64,${profileImage}`}
              className="w-20 h-20 p-0 m-0"
            />
            <h1 className="text-blueGray-400 text-lg pt-6 mt-3 mb-6 font-bold uppercase">
              {userData.firstname} {userData.lastname}
            </h1>
            <div className="p-4">
              <Button color="indigo" size="lg" onClick={save}>
                Save Changes
              </Button>
            </div>
          </div>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.username}
                  onChange={(event) =>
                    setUserData({ ...userData, username: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.email}
                  onChange={(event) =>
                    setUserData({ ...userData, email: event.target.value })
                  }
                  disabled
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.firstname}
                  onChange={(event) =>
                    setUserData({ ...userData, firstname: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.lastname}
                  onChange={(event) =>
                    setUserData({ ...userData, lastname: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mt-4 mb-2"
                  htmlFor="gender"
                >
                Gender
                </label>
                <div className="">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="gender"
                      value="male"
                      checked={userData.gender === "male"}
                      onChange={(event) =>
                        setUserData({ ...userData, gender: event.target.value })
                      }
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="gender"
                      value="female"
                      checked={userData.gender === "female"}
                      onChange={(event) =>
                        setUserData({ ...userData, gender: event.target.value })
                      }
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Contact Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.addressLine1}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      addressLine1: event.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="border-0 px-3 py-3 mt-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.addressLine2}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      addressLine2: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.city}
                  onChange={(event) =>
                    setUserData({ ...userData, city: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.district}
                  onChange={(event) =>
                    setUserData({ ...userData, district: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={userData.postal_code}
                  onChange={(event) =>
                    setUserData({
                      ...userData,
                      postal_code: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="lastname"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-[23.8rem] ease-linear transition-all duration-150"
                  value={userData.contact_num}
                  onChange={(event) =>{
                    setUserData({ ...userData, contact_num: event.target.value })
                  }}
                />
              </div>
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            About Me
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="aboutMe"
                >
                  About me
                </label>
                <textarea
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows="4"
                  value={userData.aboutMe}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;

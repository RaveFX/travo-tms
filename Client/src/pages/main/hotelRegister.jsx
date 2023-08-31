import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavWhite from "../../components/main/navWhite";

function HotelRegister() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    dob: "",
    longitude: "",
    latitude: "",
    hotel_name: "",
    brn: "",
    contact_num: "",
  });
  const [errors, setErrors] = useState({});

  const {
    email,
    password,
    longitude,
    latitude,
    hotel_name,
    brn,
    contact_num,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!user.hotel_name) {
      validationErrors.hotel_name = "Hotel Name is required";
    }

    if (!user.brn) {
      validationErrors.brn = "BRN is required";
    } else if (!/^[0-9]{9}[A-Za-z]$/.test(user.brn)) {
      validationErrors.brn = "Invalid BRN format";
    }

    const res1 = await axios.get(
      `http://localhost:8080/api/v1/auth/checkBRN/${user.brn}`
    );
    if (res1.data.status === "Error") {
      validationErrors.brn = "BRN already exists";
    }
    console.log(res1);

    if (!user.contact_num) {
      validationErrors.contact_num = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(user.contact_num)) {
      validationErrors.contact_num = "Invalid contact number format";
    }

    if (!user.longitude) {
      validationErrors.longitude = "Address is required";
    }

    if (!user.latitude) {
      validationErrors.latitude = "Address is required";
    }

   
    // if (!user.email) {
    //   validationErrors.email = "Email is required";
    // } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    //   validationErrors.email = "Invalid email format";
    // }

    // const res = await axios.get(
    //   `http://localhost:8080/api/v1/auth/checkEmail/${user.email}`
    // );
    // if (res.data.status === "Error") {
    //   validationErrors.email = "Email already exists";
    // }
    // console.log(res);

    // if (!user.password) {
    //   validationErrors.password = "Password is required";
    // } else if (user.password.length < 6) {
    //   validationErrors.password = "Password must be at least 6 characters";
    // }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await axios.post(
        "http://localhost:8080/api/v1/auth/register/hotel/855",
        user
      );
      navigate("/register_success");
    }
  };

  return (
    <div className="py-1 sm:py-20 overflow : scroll">
      <NavWhite />
      <div className="mx-auto grid max-w-9xl gap-x-8 gap-y-20 px-6 lg:px-0 lg:mr-20  xl:grid-cols-2">
        <div className="max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="grid xl:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Hotel
                </h2>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Input your information
                </h2>
              </div>
              <div>
                <p className="mt-2 text-sm leading-8 text-gray-600">
                  We need you to help us with some basic information for your
                  account creation. Here are our terms and conditins. Please
                  read them carefully.
                </p>
              </div>
            </div>
          </div>
          <form
            className="mx-auto mt-16 max-w-xl sm:mt-20"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
              <div>
                <label
                  htmlFor="hotel_name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Hotel name
                </label>
                {errors.hotel_name && (
                  <p className="text-red-500">{errors.hotel_name}</p>
                )}
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="hotel_name"
                    value={hotel_name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="brn"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  BRN
                </label>
                {errors.brn && <p className="text-red-500">{errors.brn}</p>}
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="brn"
                    value={brn}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
              <div>
                <label
                  htmlFor="contact_num"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact number 
                </label>
                {errors.contact_num && (
                  <p className="text-red-500">{errors.contact_num}</p>
                )}
                <div className="mt-2.5">
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="contact_num"
                    value={contact_num}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12"></div>
            <div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
                <div>
                  <label
                    htmlFor="longitude"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Longitude
                  </label>
                  {errors.longitude && (
                    <p className="text-red-500">{errors.longitude}</p>
                  )}
                  <div className="mt-2.5">
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="longitude"
                      value={longitude}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="latitude"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Latitude
                  </label>
                  {errors.latitude && (
                    <p className="text-red-500">{errors.latitude}</p>
                  )}
                  <div className="mt-2.5">
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="latitude"
                      value={latitude}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            
              
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="lg:fixed top-0 right-0 max-w-3xl mt-20">
          <img className="" src="/main/hotel_agent.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HotelRegister;

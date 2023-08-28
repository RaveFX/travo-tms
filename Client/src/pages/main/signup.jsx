import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import Newnav from "../../components/newnav";
import Navingation_home from "../../components/homenavbar";

function Signup() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { fname, lname, email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!user.fname) {
      validationErrors.fname = "First Name is required";
    }

    if (!user.lname) {
      validationErrors.lname = "Last Name is required";
    }

    if (!user.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      validationErrors.email = "Invalid email format";
    }

    const res = await axios.get(
      `http://localhost:8080/api/v1/auth/checkEmail/${user.email}`
    );
    if (res.data.status === "Error") {
      validationErrors.email = "Email already exists";
    }
    console.log(res);

    if (!user.password) {
      validationErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await axios.post("http://localhost:8080/api/v1/auth/register", user);
      navigate("/signin");
    }
  };

  return (
    <div
      className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"
      style={{
        backgroundImage: "url('/main/signup.png')",
        //  background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }}
    >
      <Navingation_home />
      <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-16 md:space-x-20  my-2 mx-5 md:mx-0 md:my-0 font-poppins">
        <div className="md:w-1/3 max-w pt-20 pr-20">
          <img src="/travo-white.png" alt="Sample image" />
          <h1 className="font-bold pb-3">TRAVO offers you</h1>
          <h1>Collaboration and sharing with fellow travelers</h1>
          <h1>Trip planning and itinerary management</h1>
          <h1>Weather updates and travel notifications</h1>
          <h1>Local guides and tips</h1>
          <h1>Travel budgeting and expense tracking</h1>
          <h1>Real-time hotel booking</h1>
          <h1>Local guides and tips</h1>
          <h1 className="pt-3">and much more!</h1>
        </div>
        <div className="bg-white  max-w-sm mt-20 p-10  rounded-lg  ">
          <div className="text-center font-bold text-gray-800 md:text-left pb-10">
            <label className="mr-1">Signup</label>
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-2">
              <label for="fname" className="block text-sm  text-gray-800">
                First Name
              </label>
              {errors.fname && <p className="text-red-500">{errors.fname}</p>}
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="fname"
                value={fname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label for="lname" className="block text-sm  text-gray-800">
                Last Name
              </label>
              {errors.lname && <p className="text-red-500">{errors.lname}</p>}
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="lname"
                value={lname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label for="email" className="block text-sm  text-gray-800">
                Email
              </label>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label for="password" className="block text-sm  text-gray-800">
                Password
              </label>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;

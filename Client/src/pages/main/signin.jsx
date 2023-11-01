import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
//import Newnav from "../../components/newnav";
import { Alert } from "@material-tailwind/react";
import Navingation_home from "../../components/homenavbar";

function Signin() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  sessionStorage.setItem('isAuthenticated','false');

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    if (email === "" || password === "") {
      setError("Email and Password are required");
      return;
    }

    e.preventDefault();

    try {
      const response = await axios.post(
        "/auth/authenticate",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const responseData = response.data;
      console.log(response.data.role);

      
        const user_id = response.data.id;
        const role = response.data.role;
        sessionStorage.setItem('user_id', user_id);
        sessionStorage.setItem('role',role);
        sessionStorage.setItem('isAuthenticated','true');


      
        navigate("/traveler/dashboard");
    } catch (err) {
      if (!err?.response) {
        setError("No Server Response");
      } else if (err.response?.status === 403) {
        setError("Invalid Email or Password");
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <div
      className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"
      style={{
        backgroundImage: "url('/main/login.png')",
        //  background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }}
    >
      <Navingation_home />
      <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-16 md:space-x-20  my-2 mx-5 md:mx-0 md:my-0 font-poppins">
        <div className="md:w-1/3 max-w pt-20 pr-20">
          <img src="/travo-white.png" alt="Sample image" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white  max-w-sm mt-20 p-10  rounded-lg ">
            <div className="text-center  text-gray-800 md:text-left pb-10">
              <h1 className="mr-1 font-bold text-center pb-10">LOGIN</h1>
            </div>
            {error && <p className="text-red mb-2">{error}</p>}

            <div className="mb-2">
              <label for="email" className="block text-sm  text-gray-800">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
              />
            </div>
            <div className="mb-2">
              <label for="password" className="block text-sm  text-gray-800">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="password"
              />
            </div>

            <div className="mt-4 flex justify-between font-semibold text-sm p-5">
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4 "
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
                label="Login"
              >
                Login
              </button>
        
            </div>

            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              <Link
                className="text-red hover:underline hover:underline-offset-4"
                to="/signup"
              >
              Don't have an account? Sign-up
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Signin;
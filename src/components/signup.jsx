import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Signup () {
  let navigate=useNavigate()
  
  const [user,setUser]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    dob:"",
    acc_status:"",
    gender:"",
    mobile_num:"",
    number:"",
    street:"",
    city:"",
    postal_code:"",
    registration_date:"",
    role:""

  })

  const{fname,lname,email,password}=user
  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value});

  };

  const onSubmit=async(e)=>{
       e.preventDefault();
       await axios.post("http://localhost:8080/api/v1/auth/register",user)
       navigate("/")
  };

  return (
    <div className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"style={{
      backgroundImage: "url('/signup.png')",
      //  background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
    <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-16 md:space-x-20  my-2 mx-5 md:mx-0 md:my-0 font-poppins">
      <div className="md:w-1/3 max-w pt-20 pr-20">
        <img
          src="/travo-white.png"
          alt="Sample image" />
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
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-2">
                        <label
                            for="fname"
                            className="block text-sm  text-gray-800"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="fname"
                            value={fname}
                            onChange={(e)=>onInputChange(e)}
                        />
        </div>
        <div className="mb-2">
                        <label
                            for="lname"
                            className="block text-sm  text-gray-800"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="lname"
                            value={lname}
                            onChange={(e)=>onInputChange(e)}
                        />
          </div>
          <div className="mb-2">
          <label
              for="email"
              className="block text-sm  text-gray-800"
          >
              Email
          </label>
          <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
          />
          </div>
          <div className="mb-2">
          <label
              for="password"
              className="block text-sm  text-gray-800"
          >
              Password
          </label>
          <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              value={password}
              onChange={(e)=>onInputChange(e)}
          />
         </div>

        
        
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Signup</button>
        </div>

        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Are you a Service Provider? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/serviceProviders">Register</Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Signup

import React from 'react'
import { Link } from 'react-router-dom'


function Signin () {
  // const [user,setUser]=useState({
  //   email:"",
  //   password:"",

  // })
  // const{email,password}=user
  // const onInputChange=(e)=>{
  //   setUser({...user,[e.target.name]: e.target.value});

  // };

  // const onSubmit=async(e)=>{
  //      e.preventDefault();
  //      await axios.post("http://localhost:8080/api/v1/auth/authenticate",user)
      
  // };

  return (
    <div className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"style={{
      backgroundImage: "url('/login.png')",
      //  background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
    <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-16 md:space-x-20  my-2 mx-5 md:mx-0 md:my-0 font-poppins">
      <div className="md:w-1/3 max-w pt-20 pr-20">
        <img
          src="/travo-white.png"
          alt="Sample image" />
          
      </div>
      <div className="bg-white  max-w-sm mt-20 p-10  rounded-lg ">
        <div className="text-center  text-gray-800 md:text-left pb-10">
          <h1 className="mr-1 font-bold text-center pb-10">LOGIN</h1>
         
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
            
        />
       </div>

        
        <div className="mt-4 flex justify-between font-semibold text-sm p-5">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4 " href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Signup</button>
        </div>
       
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/signup_as">Register</Link>
        </div>
      </div>
    </section>
    </div>
    
  )
}

export default Signin

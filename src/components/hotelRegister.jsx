import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Newnav from "./newnav";


function HotelRegister() {

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
    role:"",
    hotel_name:"",
    brn:"",
    contact_num:"",
    acc_name:"",
    acc_num:"",
    bank:"",
    branch:""

  })

  const{fname,lname,email,password,dob,mobile_num,number,street,city,postal_code,hotel_name,brn,contact_num,acc_name,acc_num,bank,branch}=user

  const onInputChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value});

};

const onSubmit=async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/api/v1/auth/registerhotelagent",user)
  navigate("/")
};

  return (
    <div className="py-1 sm:py-20">
    <Newnav />
    <div className="mx-auto grid max-w-9xl gap-x-8 gap-y-20 px-6 lg:px-0 lg:mr-20  xl:grid-cols-2">
    <div className="max-w-3xl">
    <div className="mx-auto max-w-2xl text-center">
    <div className="grid xl:grid-cols-2">
    <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hotel Agent </h2>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Input your information</h2>
        </div>
        <div>
        <p className="mt-2 text-sm leading-8 text-gray-600">
        We need you to help us with some basic information for your account creation. Here are our terms and conditins. Please read them carefully.
        </p>
        </div>

        </div>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={(e)=>onSubmit(e)}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="fname" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="fname"
                value={fname}
                onChange={(e)=>onInputChange(e)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lname" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="lname"
                value={lname} 
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            
          </div>
        </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="email"
                value={email} 
                onChange={(e)=>onInputChange(e)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile_num" className="block text-sm font-semibold leading-6 text-gray-900">
              Mobile number
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="mobile_num"
                value={mobile_num} 
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            
           </div>
           </div>
           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
           <div>
            <label htmlFor="dob" className="block text-sm font-semibold leading-6 text-gray-900">
              DOB
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                name="dob"
                value={dob} onChange={(e)=>onInputChange(e)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12"></div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
          <div>
            <label htmlFor="hotel_name" className="block text-sm font-semibold leading-6 text-gray-900">
              Hotel name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="hotel_name"
                value={hotel_name} 
                onChange={(e)=>onInputChange(e)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="brn" className="block text-sm font-semibold leading-6 text-gray-900">
              BRN
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="brn"
                value={brn} 
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            
           </div>
           </div>
           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
           <div>
            <label htmlFor="contact_num" className="block text-sm font-semibold leading-6 text-gray-900">
              Contact number - hotel
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="contact_num"
                value={contact_num} 
                onChange={(e)=>onInputChange(e)}
              />
            </div>
            </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12"></div>
            <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
            <div>
              <label htmlFor="number" className="block text-sm font-semibold leading-6 text-gray-900">
                No
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="number"
                  value={number} 
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="street" className="block text-sm font-semibold leading-6 text-gray-900">
                Street
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="street"
                  value={street} 
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              
             </div>
             </div>
             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
             <div>
               <label htmlFor="city" className="block text-sm font-semibold leading-6 text-gray-900">
                 City
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   name="city"
                   value={city} 
                   onChange={(e)=>onInputChange(e)}
                 />
               </div>
             </div>
             <div>
               <label htmlFor="postal_code" className="block text-sm font-semibold leading-6 text-gray-900">
                 Postal code
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   name="postal_code"
                   value={postal_code} 
                   onChange={(e)=>onInputChange(e)}
                 />
               </div>
               
              </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12"></div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
             <div>
               <label htmlFor="acc_num" className="block text-sm font-semibold leading-6 text-gray-900">
                 Account number
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   name="acc_num"
                   value={acc_num} 
                   onChange={(e)=>onInputChange(e)}
                 />
               </div>
             </div>
             <div>
               <label htmlFor="acc_name" className="block text-sm font-semibold leading-6 text-gray-900">
                 Account holder
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   name="acc_name"
                   value={acc_name} 
                   onChange={(e)=>onInputChange(e)}
                 />
               </div>
               
              </div>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
             <div>
               <label htmlFor="bank" className="block text-sm font-semibold leading-6 text-gray-900">
                 Bank
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   name="bank"
                   value={bank} onChange={(e)=>onInputChange(e)}
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
             <div>
               <label htmlFor="branch" className="block text-sm font-semibold leading-6 text-gray-900">
                 Branch name
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   name="branch"
                   value={branch} onChange={(e)=>onInputChange(e)}
                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
               
              </div>
              </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12"></div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2.5">
                  <input
                    type="password"
                    name="password"
                    value={password} onChange={(e)=>onInputChange(e)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cpassword" className="block text-sm font-semibold leading-6 text-gray-900">
                  Confirm password
                </label>
                <div className="mt-2.5">
                  <input
                    type="password"
                    name="cpassword"
                
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
    <img className="" src="/hotel_agent.png" alt="" />
    </div>
    </div>
    </div>
  )
}

export default HotelRegister
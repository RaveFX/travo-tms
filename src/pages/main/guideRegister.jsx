import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavWhite from '../../components/navWhite'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const nicRegex=/^\d{10}(?:\d{2}|-\d{2}v)$/;
const mobileRegex=/^(?:\+94|0)(?:\d{9})$/;
const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


function GuideRegister() {
  let navigate=useNavigate()

  const [user,setUser]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    gender:"",
    mobile_num:"",
    addressLine1:"",
    addressLine2:"",
    city:"",
    distrct:"",
    nic:"",
    qualifications:"",
    

  });
  const [errors, setErrors] = useState({});


  
  const{fname,lname,email,password,mobile_num,addressLine1,addressLine2,city,gender,nic,qualifications,district}=user

  const onInputChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value});

};

const onSubmit=async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/api/v1/auth/register/guide",user)
  navigate("/")
};
  return (
    <div className="py-1 sm:py-20">
    <NavWhite />
    <div className="mx-auto grid max-w-9xl gap-x-8 gap-y-20 px-6 lg:px-0 lg:mr-20 xl:grid-cols-2">
    <div className="max-w-3xl">
    <div className="mx-auto max-w-2xl text-center">
    <div className="grid xl:grid-cols-2">
    <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Travel Guide </h2>
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
            {errors.fname && <p className="text-red-500">{errors.fname}</p>}
            <div className="mt-2.5">
              <input
                type="text"
                name="fname"
                value={fname}
                onChange={(e)=>onInputChange(e)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lname" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            {errors.lname && <p className="text-red-500">{errors.lname}</p>}
            <div className="mt-2.5">
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={(e)=>onInputChange(e)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
        </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
          <div>
            <label htmlFor="nic" className="block text-sm font-semibold leading-6 text-gray-900">
              NIC
            </label>
            {errors.nic && <p className="text-red-500">{errors.nic}</p>}
            <div className="mt-2.5">
              <input
                type="text"
                name="nic"
                value={nic}
                onChange={(e)=>onInputChange(e)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
           </div>
          
          <div>
            <label htmlFor="mobile_num" className="block text-sm font-semibold leading-6 text-gray-900">
              Mobile number
            </label>
            {errors.mobile_num && <p className="text-red-500">{errors.mobile_num}</p>}
            <div className="mt-2.5">
              <input
                type="text"
                name="mobile_num"
                value={mobile_num}
                onChange={(e)=>onInputChange(e)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
           </div>
           </div>
           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
           <div>
           <label htmlFor="gender" className="block text-sm mt-5 font-semibold leading-6 text-gray-900">
              Gender
            </label>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
            <div className="mt-2.5">
               <select
               name="gender"
               value={gender} 
               onChange={(e)=>onInputChange(e)}
               className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             >
             <option>{gender}</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               
             </select>
               </div>  
               </div>
               </div>
       <div className="border-b border-gray-900/10 pb-12"></div>    

       <div className="col-span-full pt-12">
       <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
         Resume
       </label>
       <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
         <div className="text-center">
           <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
           <div className="mt-4 flex text-sm leading-6 text-gray-600">
             <label
               htmlFor="file-upload"
               className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
             >
               <span>Upload a file</span>
               <input id="file-upload" name="file-upload" type="file" className="sr-only" />
             </label>
             <p className="pl-1">or drag and drop</p>
           </div>
           <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
         </div>
       </div>
     </div>
     
   

          
          <div className="border-b border-gray-900/10 pb-12"></div>
          
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
            <div>
              <label htmlFor="addressLine1" className="block text-sm font-semibold leading-6 text-gray-900">
                Address Line 1
              </label>
              {errors.addressLine1 && <p className="text-red-500">{errors.addressLine1}</p>}
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="addressLine1"
                  value={addressLine1} 
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="addressLine2" className="block text-sm font-semibold leading-6 text-gray-900">
              Address Line 2
              </label>
              {errors.addressLine2 && <p className="text-red-500">{errors.addressLine2}</p>}
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="addressLine2"
                  value={addressLine2} 
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
               {errors.city && <p className="text-red-500">{errors.city}</p>}
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
               <label htmlFor="district" className="block text-sm font-semibold leading-6 text-gray-900">
                 District
               </label>
               {errors.district && <p className="text-red-500">{errors.district}</p>}
               <div className="mt-2.5">
               <select
               name="district"
               value={district} 
               onChange={(e)=>onInputChange(e)}
               className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             >
             <option>{district}</option>
               <option value="Ampara">Ampara</option>
               <option value="Anuradhapura">Anuradhapura</option>
               <option value="Badulla">Badulla</option>
               <option value="Batticaloa">Batticaloa</option>
               <option value="Colombo">Colombo</option>
               <option value="Galle">Galle</option>
               <option value="Gampaha">Gampaha</option>
               <option value="Hambantota">Hambantota</option>
               <option value="Jaffna">Jaffna</option>
               <option value="Kalutara">Kalutara</option>
               <option value="Kandy">Kandy</option>
               <option value="Kegalle">Kegalle</option>
               <option value="Kilinochchi">kilinochchi</option>
               <option value="Kurunegala">Kurunegala</option>
               <option value="Mannar">Mannar</option>
               <option value="Matale">Matale</option>
               <option value="Matara">Matara</option>
               <option value="Monaragala">Monaragala</option>
               <option value="Mullaitivu">Mullaitivu</option>
               <option value="Nuwara Eliya">Nuwara Eliya</option>
               <option value="Polonnaruwa">Polonnaruwa</option>
               <option value="Puttalam">Puttalam</option>
               <option value="Ratnapura">Ratnapura</option>
               <option value="Trincomalee">Trincomalee</option>
               <option value="Vavuniya">Vavuniya</option>
             </select>
               </div>
               
              </div>
              </div>
             

              
              
             
          

            

          <div className="border-b border-gray-900/10 pb-12"></div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-10">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <div className="mt-2.5">
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            {errors.password && <p className="text-red-500">{errors.password}</p>}
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                value={password} onChange={(e)=>onInputChange(e)}
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
    <div className="lg:fixed top-0 right-0 mt-20 max-w-3xl">
    <img className="" src="/Guide_register.png" alt="" />
    </div>
    </div>
    </div>
  )
}

export default GuideRegister
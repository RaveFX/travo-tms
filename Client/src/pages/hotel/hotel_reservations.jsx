import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";
import { Link } from "react-router-dom";

function Hotel_reservations() {
  const user_id = sessionStorage.getItem('user_id');
  const [reservations,setReservations]=useState([]);

    useEffect(() => {
        loadReservations();
    },[]); 

    const loadReservations=async()=>{
        const result=await axios.get(`http://localhost:8080/api/v1/hotel/reservations/${user_id}`)
        setReservations(result.data);
    }
  return (
    <div className="flex h-screen ">
    <SideBar active="Reservations"/>
    <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
      <UserNav />
      <div className='flex justify-between'>
          <h1 className=' font-poppins font-extrabold mt-4 mx-5 text-[#2C2738]'>Reservations</h1>
      </div>
          <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
              <h1 className=' font-poppins font-extrabold mx-5 text-[#2C2738] text-sm'>Today</h1>
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500 text-[#B7BBB8]">
                    <tr>
                      <th scope="col" className="px-6 py-4">Customer</th>
                      <th scope="col" className="px-6 py-4">Date</th>
                      <th scope="col" className="px-6 py-4">Reservation ID</th>
                      <th scope="col" className="px-6 py-4">Check-In</th>
                      <th scope="col" className="px-6 py-4">Payment</th>
                      <th scope="col" className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    reservations.map((reservations)=>(
                      <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-gray-100">
                      <td className=" text-center  items-center  whitespace-no-wrap">
                                                    <div className="flex">
                                                        <div className="h-8 w-8 ml-5">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">{reservations.user_id}</p>
                                                    </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{reservations.date}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{reservations.reservation_id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{reservations.checkin_date}</td>
                      <td className="whitespace-nowrap px-6 py-4">{reservations.payment}</td>
            
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                      </td>
                     
                      
                    </tr>

                    ))
                  }
                    
                    
                    
                    </tbody>
                    </table>
                    <h1 className=' font-poppins font-extrabold mx-5 mt-6 text-[#2C2738] text-sm'>07/08/2023</h1>
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500 text-[#B7BBB8]">
                    <tr>
                      <th scope="col" className="px-6 py-4">Customer</th>
                      <th scope="col" className="px-6 py-4">Reservation ID</th>
                      <th scope="col" className="px-6 py-4">Check-In</th>
                      <th scope="col" className="px-6 py-4">Payment</th>
                      <th scope="col" className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                    <tbody>
                    <Link to="/hotelagent_reservation_details">
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className=" text-center  items-center  whitespace-no-wrap">
                                                    <div className="flex">
                                                        <div className="h-8 w-8 ml-5">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Tharindi Senadeera</p>
                                                    </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1225</td>
                      <td className="whitespace-nowrap px-6 py-4">17.08.2023</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs.10,500</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-16 h-6 text-center bg-slate-50 rounded-lg border-slate-950">
                      Cancelled</div>
                      </td>
                    </tr>
                    </Link>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="pr-6 whitespace-no-wrap">
                      <div className="flex items-center">
                          <div className="h-8 w-8 ml-5">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                          </div>
                          <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                      </div>
                     </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1226</td>
                      <td className="whitespace-nowrap px-6 py-4">20.08.2023</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs.21,000</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                      </td>
                    </tr>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8 ml-5">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                      <td className="whitespace-nowrap px-6 py-4">12.08.2023</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs.22,500</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                      </td>
              
                    </tr>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className=" text-center  items-center  whitespace-no-wrap">
                                                    <div className="flex">
                                                        <div className="h-8 w-8 ml-5">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Tharindi Senadeera</p>
                                                    </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1225</td>
                      <td className="whitespace-nowrap px-6 py-4">17.08.2023</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs.10,500</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                      </td>
                    </tr>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="pr-6 whitespace-no-wrap">
                      <div className="flex items-center">
                          <div className="h-8 w-8 ml-5">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                          </div>
                          <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                      </div>
                     </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1226</td>
                      <td className="whitespace-nowrap px-6 py-4">20.08.2023</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs.21,000</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-16 h-6 text-center bg-slate-50 rounded-lg">
                      Cancelled</div>
                      </td>
                    </tr>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8 ml-5">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                      <td className="whitespace-nowrap px-6 py-4">12.08.2023</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs.22,500</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                      </td>
      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
          

                                 
    </div>
    </div>
  )
}

export default Hotel_reservations
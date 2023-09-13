import React from "react";
import UserNav from "../../components/main/userNav";
import SideBar from "../../components/main/sidebar";
import { Link } from "react-router-dom";

function Hotel_reseravationDetails() {
  return (
    <div className="flex h-screen ">
      <SideBar active="Reservations" />
      <div className="flex flex-col w-full bg-[#FFFFFF] bg-opacity-20 ">
        <UserNav />
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',height:'100%'}}>
        <div style={{width:'40%'}}>
        <h1 className=' font-poppins font-extrabold mt-4 mx-5 text-[#2C2738]'>Reservations</h1>
        <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500 text-[#B7BBB8]">
                    <tr>
                      <th scope="col" className="px-6 py-4">Customer</th>
                      <th scope="col" className="px-6 py-4">Reservation ID</th>
                      <th scope="col" className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                    <tbody>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-gray-100">
                      <td className=" text-center  items-center  whitespace-no-wrap">
                                                    <div className="flex">
                                                        <div className="h-8 w-8 ml-5">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Tharindi Senadeera</p>
                                                    </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1225</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-16 h-6 text-center bg-slate-50 rounded-lg border-slate-950">
                      Cancelled</div>
                      </td>
                    </tr>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-gray-100">
                      <td className="pr-6 whitespace-no-wrap">
                      <div className="flex items-center">
                          <div className="h-8 w-8 ml-5">
                              <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                          </div>
                          <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                      </div>
                     </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1226</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                      </td>
                    </tr>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600 hover:bg-gray-100">
                      <td className="pr-6 whitespace-no-wrap">
                                                    <div className="flex items-center">
                                                        <div className="h-8 w-8 ml-5">
                                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_3.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                                        </div>
                                                        <p className="ml-2 text-gray-600 dark:text-gray-400 tracking-normal  text-sm">Carrie Anthony</p>
                                                    </div>
                                                </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1227</td>
                      <td className="whitespace-nowrap px-4 py-2">
                      <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                      </td>
              
                    </tr>
                    
                    
                    
                  </tbody>
                </table>
        </div>
        <div style={{width:'60%',backgroundColor:'#FAFAFA',borderRadius:'10px'}}>
        <h1 className='ml-10 font-poppins font-extrabold mt-4 mx-5 text-[#2C2738]'>Reservation ID : </h1>
        <div style={{backgroundColor:'white',height:'40%',borderRadius:'10px',marginTop:'20px',width:'90%',marginLeft:'20px'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-extrabold  ml-5 text-[#2C2738] text-sm'>Reservation Details : </h1>
        <div className="border-b border-gray-900/10 pb-4"></div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div style={{width:'50%'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Booking ID : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>1023</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Room ID : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>10</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Check-In : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>10/10/2023</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Payment : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>Rs.10,000</h1>
        </div>
        </div>
        <div style={{width:'50%'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Booking Date : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>1023</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Room Type : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>Grand</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Check-Out : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>23/10/2023</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Reservation Status : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>Active</h1>
        </div>
        
        </div>
        </div>
        </div>
        <div style={{backgroundColor:'white',height:'40%',borderRadius:'10px',marginTop:'20px',width:'50%',marginLeft:'20px'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-extrabold mt-4 mx-5 text-[#2C2738] text-sm'>Customer Details : </h1>
        <div className="border-b border-gray-900/10 pb-4"></div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Full Name : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>Tharindi Senadeera</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Mobile : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>071 887 3049</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Email : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>tia.tharindi@gmail.com</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Trip ID : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'>1023</h1>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#718096] text-sm'>Notes : </h1>
        <h1 style={{paddingTop:'20px'}} className=' font-poppins font-bold  ml-5 text-[#A0AEC0] text-sm'></h1>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel_reseravationDetails;

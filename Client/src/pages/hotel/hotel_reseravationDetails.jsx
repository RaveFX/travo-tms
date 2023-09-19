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
        <div class="gap-8 columns-2 ...">
          <div class="columns-1">
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
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="w-16 h-6 text-center bg-slate-50 rounded-lg border-slate-950">
                      Cancelled</div>
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
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="w-14 h-6 text-center bg-green-400 rounded-lg">
                      Active</div>
                  </td>

                </tr>



              </tbody>
            </table>
          </div>
          <div className="bg-slate-300 h-full">
            <h1>column2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel_reseravationDetails;

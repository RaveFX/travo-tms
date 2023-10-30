import React from "react";
import { Link } from "react-router-dom";

export default function ImageGrid() {
  return (
    <section class="py-2">
      <h1 class="mb-1 ml-8 m  font-poppins text-4xl font- text-gray-900">
        Activities<span class="text-blue-600"></span>
      </h1>
      <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              <img src="/activity_agent/safari.jpg" alt="Hotel Photo" />
            </div>
            <div class="mt-1 p-2">
              <h2 class="text-slate-700">Safari</h2>
              <Link to="./view_activity">
                <button class="bg-blue-500 text-white hover:bg-green-700 font-bold py-1 px-2 border border-green-500 rounded mr-5">
                  View
                </button>
              </Link>
              <div class="mt-3 flex items-end justify-between"></div>
            </div>
          </a>
        </article>

        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <a href="#">
            <div class="relative h-[53%] flex items-end overflow-hidden rounded-xl">
              <img src="/activity_agent/surfing.jpg" alt="Hotel Photo" />
            </div>
            <div class="mt-1 p-2">
              <h2 class="text-slate-700">Surfing</h2>
              <button class="bg-blue-500 text-white hover:bg-green-700 font-bold py-1 px-2 border border-green-500 rounded mr-5">
                View
              </button>
            </div>
          </a>
        </article>

        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
          <a href="#">
            <div class="relative flex items-end overflow-hidden rounded-xl">
              {/* <button class="p-10 bg-white flex items-center justify-center m-4 ">
                +
         </button> */}
              <div className="ml-10 p-4 bg-white flex items-center justify-center m-4">
                <div className="bg-gray-300 p-16 ml-5 rounded-xl  text-white font-bold text-4xl cursor-pointer">
                  +
                </div>
              </div>
            </div>
            <div class=" ml-12 p-2">
              <Link to="./add_activity">
                <button class="bg-blue-500 text-white hover:bg-green-700 font-bold py-1 px-2 border border-green-500 rounded mr-5 mx-10">
                  Add Activity
                </button>
              </Link>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}

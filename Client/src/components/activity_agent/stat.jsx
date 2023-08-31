import React from "react";
import { Link } from "react-router-dom";

const Stat = () => {
    return (
<section class="bg-blue-40 text-blue-800">
  <div class="mx-auto flex max-w-screen-xl flex-col px-4 sm:flex-row sm:px-8 lg:px-20">
    <div class="mt-20 flex flex-col sm:w-2/3 sm:pr-10">
      <div class="">
        <p class="mb-2 hidden h-1.5 w-14 bg-blue-600 sm:block"></p>
        <h1 class="block whitespace-nowrap text-center text-4xl font-black text-gray-800 sm:text-left">Growth Trends</h1>
      </div>
      <img class="my-10 hidden w-full max-w-2xl rounded-xl border-8 border-gray-200 bg-white object-contain p-8 sm:block" src="/images/mJmFgUtDi9jIUfYBFjqZC.svg" alt="" />
      <p class="hidden text-gray-600 sm:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vitae laborum repellendus placeat temporibus eligendi qui maiores doloremque dignissimos dolorem, veniam magni, rem officia?</p>
    </div>
    <div class="mt-8 flex-col items-end space-y-3 rounded-xl px-4 py-4 sm:w-1/3 md:ml-auto lg:flex">
      <div class="bg flex w-full flex-col items-center justify-center rounded-xl bg-blue-600 px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
        <div class="p-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div class="text-center">
          <p class="text-4xl font-bold">1420</p>
          <p class="text-sm">Monthly Users</p>
        </div>
      </div>
      <div class="bg flex w-full flex-col items-center justify-center rounded-xl bg-blue-600 px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
        <div class="p-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <div class="text-center">
          <p class="text-4xl font-bold">550</p>
          <p class="text-sm">Graduates</p>
        </div>
      </div>
      <div class="bg flex w-full flex-col items-center justify-center rounded-xl bg-blue-600 px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
        <div class="p-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div class="text-center">
          <p class="text-4xl font-bold">240</p>
          <p class="text-sm">Fortune 500 Employed</p>
        </div>
      </div>
    </div>
  </div>
</section>
);
};
export default Stat;


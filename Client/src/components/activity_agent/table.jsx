import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <table class="min-w-full border-collapse block md:table">
      <thead class="block md:table-header-group">
        <h1 class="text-3xl py-4">Activity Schedule</h1>
        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Activity
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Reserved Date
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="block md:table-row-group">
        <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Activity</span>
            Surfing
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">
              Reserved Date
            </span>
            14/06/21
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
            <Link to="./details">
              <button class="bg-gray-300 hover:bg-green-700 font-bold py-1 px-2 border border-green-500 rounded mr-5">
                View
              </button>
            </Link>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Accept
            </button>
          </td>
        </tr>
        <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Activity</span>
            Cycling
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">
              Reserved Date
            </span>
            14/06/21
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
            <Link to="./details">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded mr-5">
                View
              </button>
            </Link>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Accept
            </button>
          </td>
        </tr>
        <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Activity</span>
            Safari
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">
              Reserved Date
            </span>
            14/06/21
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
            <Link to="./details">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded mr-5">
                View
              </button>
            </Link>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Accept
            </button>
          </td>
        </tr>
        <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Activity</span>
            Surfing
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">
              Reserved Date
            </span>
            14/06/21
          </td>
          <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
            <Link to="./details">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded mr-5">
                View
              </button>
            </Link>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Accept
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

// src/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative justify max-w-xs ">
      <input
        type="text"
        className="border border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 top-3 h-4 w-4 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 12a5 5 0 110-10 5 5 0 010 10z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBar;

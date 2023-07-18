// src/TopNavbar.js
import React from 'react';
import SearchBar from '../components/searchbar';

const TopNavbar = () => {
  return (
    <div className="bg-blue-100 p-4 w-[100%] h-[72px]">
        <div className="flex items-center justify-between">
            <div>
                <SearchBar/>
            </div>
            <div>
                <div className="flex space-x-4">
                    <div className='flex flex-row justify-items-center gap-[10px]'>
                        <img src="/images/notification-bing.svg" alt="Logo" className="" />
                        <img src="/images/Profile Picture.svg" alt="Logo" className="" />
                        <div className='font-poppins font-medium text-base justify-center'>Natashia Bunny</div>
                    </div>

                    {/* <li>
                    <a href="#" className="text-white hover:text-blue-300">About</a>
                    </li>
                    <li>
                    <a href="#" className="text-white hover:text-blue-300">Contact</a>
                    </li> */}
                </div>
            </div>
          
        
        </div>
    </div>
  );
};


export default TopNavbar;

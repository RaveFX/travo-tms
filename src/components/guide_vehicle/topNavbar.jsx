// src/TopNavbar.js
import React from 'react';
import SearchBar from '../components/searchbar';
import { Link } from 'react-router-dom';
import { people01 } from '../assets'



const TopNavbar = ({path}) => {
  return (
    <div className="bg-blue-100 p-4 w-[100%] h-[72px]">
        <div className="flex items-center justify-between">
            <div>
                <SearchBar/>
            </div>
            <div>
                <div className="flex space-x-4">
                    <div className='flex flex-row justify-items-center gap-[10px]'>
                        <img src="../public/notification.svg" alt="Logo" className="" />
                        <Link to={path}>
                        <img src={people01} 
                        alt="Logo" className="w-8 rounded-full cursor-pointer"  />
                        </Link>
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

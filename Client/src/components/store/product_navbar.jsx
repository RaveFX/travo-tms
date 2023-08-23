

import React from 'react';
import { Link } from 'react-router-dom';

const product_navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 fixed w-full z-10">
      <div className="flex items-center justify-between px-6 py-1">
        <div className="text-white font-bold text-lg">
          <Link to="/store_stock">
            <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              Stock
            </button>
          </Link>
        </div>
        <div className="flex flex-grow justify-center gap-4">
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Tents
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Bags
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Jackets
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Cameras
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Shoes
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Hats
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Boots
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Cameras
          </button>
          {/* Add more buttons for other categories */}
        </div>
      </div>
    </nav>
  );
};

export default product_navbar;

// src/TopNavbar.js
import React, { useState } from 'react';
// import SearchBar from './Searchbar';

// const TopNavbar = () => {
//   return (
//     <div className="p-4 w-[100%] h-[72px]">
//         <div className="flex items-center justify-between">
//             <div>
//                 <SearchBar/>
//             </div>
//             <div>
//                 <div className="flex space-x-4">
//                     <div className='flex flex-row justify-center gap-[10px]'>
//                         <img src="/images/notification-bing.svg" alt="Logo" className="h-[24px] w-[24px]" />
//                         <img src="/images/Profile Picture.svg" alt="Logo" className="h-[24px] w-[24px]" />
//                         <div className='font-poppins font-medium text-base justify-center'>Natashia Bunny</div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     </div>
//   );
// };


// export default TopNavbar;

import {
  Navbar,
  Badge,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [hasNewNotification, setHasNewNotification] = useState(true);
  return (
    <Navbar className="mx-auto max-w-screen-full px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <div className="relative flex w-full gap-2 md:w-max rounded-full">
          <Input
            type="search"
            label="Type here..."
            className="pr-20 rounded-full style-none"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded-full bg-[#57CC99]">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="ml-auto flex gap-2 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-[30px] w-[30px]" />
          </IconButton>
          {hasNewNotification && (
            <Badge className="absolute -top-2 -right-1 bg-[#57CC99]" style={{ top: "9px", right: "20px" }} />
          )}
          <IconButton variant="text" color="blue-gray" className="h-[35px] w-[35px]">
            <UserCircleIcon className="h-[30px] w-[30px]" />
          </IconButton>
        </div>

      </div>
    </Navbar>
  );
}

import React, { useState } from 'react';
import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Header() {
    return (
        <div class="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
            <div className='relative'>
                {/* <HiOutlineSearch fontsize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' /> */}

                <MagnifyingGlassIcon className="h-4 w-4 " />

                <input type="text" placeholder='Search...' className='text-sm focus:outline-none active: outline h-10 w-[24rem] border-gray-300 rounded-sm pl-11 pr-4' />
            </div>

            <div>side button</div>
        </div>
    )
}


// import {
//     Navbar,
//     Badge,
//     IconButton,
//     Button,
//     Input,
// } from "@material-tailwind/react";
// import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// export default function Header() {
//     const [hasNewNotification, setHasNewNotification] = useState(true);
//     return (
//         <Navbar className="mx-auto max-w-screen-full px-4 py-3">
//             <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
//                 <div className="relative flex w-full gap-2 md:w-max rounded-full">
//                     <Input
//                         type='text'
//                         label="Type here..."
//                         className="pr-20 rounded-full style-none"
//                         containerProps={{
//                             className: "min-w-[288px]",
//                         }}
//                     />
//                     <Button size="sm" className="!absolute right-1 top-3 rounded-full bg-[#57CC99]">
//                         <MagnifyingGlassIcon className="h-4 w-4" />
//                     </Button>
//                 </div>

//                 <div className="ml-auto flex gap-2 md:mr-4">
//                     <IconButton variant="text" color="blue-gray">
//                         <BellIcon className="h-[30px] w-[30px]" />
//                     </IconButton>
//                     {hasNewNotification && (
//                         <Badge className="absolute -top-2 -right-1 bg-[#57CC99]" style={{ top: "9px", right: "20px" }} />
//                     )}
//                     <IconButton variant="text" color="blue-gray" className="h-[35px] w-[35px]">
//                         <UserCircleIcon className="h-[30px] w-[30px]" />
//                     </IconButton>
//                 </div>

//             </div>
//         </Navbar>
//     );
// }



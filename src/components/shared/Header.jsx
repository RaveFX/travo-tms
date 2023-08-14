// // src/TopNavbar.js
// import React, { useState } from 'react';


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
//         <Navbar className="mx-auto max-w-[100%] px-4 py-3 rounded-none">
//             <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
//                 <div className="relative flex w-full gap-2 md:w-max rounded-full">
//                     <Input
//                         type="search"
//                         label="Type here..."
//                         className="pr-20 rounded-full style-none"
//                         containerProps={{
//                             className: "min-w-[288px]",
//                         }}
//                     />
//                     <Button size="sm" className="!absolute right-1 top-1 rounded-full bg-[#57CC99] hover:shadow-none active:shadow-none">
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
//                     <IconButton variant="text" color="blue-gray">
//                         <UserCircleIcon className="h-[30px] w-[30px]" />
//                     </IconButton>
//                 </div>

//             </div>
//         </Navbar>
//     );
// }




import React, { useState } from "react";
import people01 from '../../assets/people01.png'


import {
    Navbar,
    Avatar,
    Badge,
    IconButton,
    Button,
    Input,
} from "@material-tailwind/react";
import {
    BellIcon,
    UserCircleIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function TopNavbar() {
    const [hasNewNotification, setHasNewNotification] = useState(true);
    return (
        <Navbar className=" font-poppins shadow-sm rounded-none">
            <div className="flex items-start flex-wrap justify-between gap-y-4 ">
                <div className="relative flex w-full gap-2 md:w-max rounded-full">
                    <Input
                        type="search"
                        className="p-5 outline-0 text-black  bg-[#f8fbff] shadow-md rounded-full style-none"
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                    />
                    <Button
                        size="sm"
                        className="!absolute right-1 top-1 rounded-full bg-[#57CC99] hover:shadow-none active:shadow-none"
                    >
                        <MagnifyingGlassIcon className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex items-center gap-5">
                    <Link to="/storemanager_profile">
                        <div>
                            <BellIcon className=" fill-black h-10" />
                        </div>
                    </Link>
                    <div>
                        <Link to="/storemanager_profile">
                            <Avatar
                                className="rounded-full"
                                // src={people01}
                                alt="avatar"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/storemanager_profile">
                            <h2 className="text-sm font-semibold text-gray-700">
                                Sam store
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <Avatar  src="/hichcha.jpg" alt="avatar" /> */}
        </Navbar>
    );
}

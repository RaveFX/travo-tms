// src/TopNavbar.js
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
                    <Link to="/Travdash">
                        <div>
                            <BellIcon className=" fill-black h-10" />
                        </div>
                    </Link>
                    <div>
                        <Link to="/Travdash">
                            <Avatar
                                className="rounded-full"
                                src="https://media.istockphoto.com/id/1485163882/photo/speech-bubble-with-financial-chart-icon.jpg?s=612x612&w=0&k=20&c=B-e9uCZauH3JAODUIvI7ncdfDRdIQe6drjsJ_HVdYE4="
                                alt="avatar"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/Travdash">
                            <h2 className="text-sm font-semibold text-gray-700">
                                Sam Store
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <Avatar  src="/hichcha.jpg" alt="avatar" /> */}
        </Navbar>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    RectangleGroupIcon,
    MapIcon,
    HeartIcon,
    UserGroupIcon,
    Cog6ToothIcon,
    BanknotesIcon,
    PowerIcon,
} from "@heroicons/react/24/outline";

export default function Admin_sidebar() {
    return (
        <Card className="bg-gradient-to-b from-[#377A85] to-[#72C075] w-[260px] h-screen rounded-none">
            <div className="mb-2 pb-2">
                <Typography variant="h5" color="white">
                    <img src="/images/logo.png" alt="Logo" className="" />
                </Typography>
            </div>
            <List className="text-white gap-3">
                <Link to="/admin">
                    <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
                        <ListItemPrefix>
                            <RectangleGroupIcon className="h-5 w-5 " />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>
                <Link to="/admin/admin_requests">
                    <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
                        <ListItemPrefix>
                            <BanknotesIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Requests
                    </ListItem>
                </Link>
                <Link to="/admin/admin_users">
                    <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
                        <ListItemPrefix>
                            <UserGroupIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Users
                    </ListItem>
                </Link>
                <Link to="/admin/admin_transaction">
                    <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
                        <ListItemPrefix>
                            <MapIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Transactions
                    </ListItem>
                </Link>
                <Link to="/admin/admin_advertisments">
                    <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
                        <ListItemPrefix>
                            <MapIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Advertising
                    </ListItem>
                </Link>

                {/* <Link to="/setting">
                    <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
                        <ListItemPrefix>
                            <MapIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Setting
                    </ListItem>
                </Link> */}



            </List>
            <List className="Flex flex-col mt-[90px] text-white">
                <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}

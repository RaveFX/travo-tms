// // src/Sidebar.js
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

export default function Sidebar() {
  return (
    <Card className="bg-gradient-to-b from-[#377A85] to-[#72C075] w-[260px] h-screen rounded-none ">
      <div className="mb-2 pb-4">
        <Typography variant="h5" color="white">
          <img src="/images/logo.png" alt="Logo" className="" />
        </Typography>
      </div>
      <List className="text-white gap-5">
        <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
          <ListItemPrefix>
            <RectangleGroupIcon className="h-5 w-5 " />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
          <ListItemPrefix>
            <MapIcon className="h-5 w-5" />
          </ListItemPrefix>
          Products
        </ListItem>
        <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
          <ListItemPrefix>
            <HeartIcon className="h-5 w-5" />
          </ListItemPrefix>
          Favourite
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          Community
        </ListItem>
        <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
          <ListItemPrefix>
            <BanknotesIcon className="h-5 w-5" />
          </ListItemPrefix>
          Transaction
        </ListItem>
        <ListItem className="hover:bg-[#FFFFFF] hover:bg-opacity-30 active:bg-[#2AB57D] focus:bg-[#2AB57D] active:text-white focus:text-white">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>
      <List className="Flex flex-col mt-[150px] text-white">
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


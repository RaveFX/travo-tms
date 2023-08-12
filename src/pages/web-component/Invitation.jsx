import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";

import {UserPlusIcon, ClipboardDocumentIcon, CheckIcon} from "@heroicons/react/24/outline";
 
export function SubscriptionPopover() {

  const [IsLinkCopy, setIsLinkCopy] = useState(false);
  const handleLinkCopyClick = () => {
    setIsLinkCopy(prevState => !prevState);
    
  };
  return (
    <Popover placement="bottom" className="bg-[#ffffff]">
      <PopoverHandler className="flex flex-row gap-3 bg-white font-extrabold font-poppins text-[#000000] hover:bg-[#F5F1F1] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] rounded-full w-[140px] h-[44px] relative -left-[12%] z-5 shadow-[0 2px 4px rgba(0,0,0,0.15)]">
        <Button onClick={handleLinkCopyClick}>
          <UserPlusIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="3" />
          Invite
        </Button>
      </PopoverHandler>
      <PopoverContent className="gap-3 bg-white font-extrabold font-poppins text-[#000000]  z-[1000] ">
        <Typography variant="h6" color="blue-gray" className="mb-6">
          Invite your friends!
        </Typography>
        <div className="flex gap-2">
          <Input  value={"joinwithus@sdkfjbwoef"} disabled/>
          <Button className={` ${ IsLinkCopy ? 'bg-[#57CC99] disabble' : 'bg-[#F5F1F1]'} font-poppins text-[#000000] hover:bg-[#57CC99] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)] shadow-[0 2px 4px rgba(0,0,0,0.15)]`}  onClick={handleLinkCopyClick}>
            {!IsLinkCopy && <	ClipboardDocumentIcon className='w-5 h-5 stroke-[#000000] m-0 p-0' strokeWidth="2"/>}
            {IsLinkCopy && <div className="flex flex-row justify-between p-0 m-0"> <CheckIcon className='w-[4.8rem] h-4 stroke-[#000000] m-0 p-0' strokeWidth="3"/><p className="font-size-1 mr-2">coppied</p></div>}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
import { Button } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
 
export default function BacknNext({ onBackClick, onNextClick }) {
  return (
    <div className="flex justify-center w-[87%] absolute bottom-8 z-10">
      <div className="flex items-end justify-between px-[1rem] w-auto h-auto ">
        <Button className="flex flex-col justify-center items-center flex-shrink-0 text-gray w-[3rem] h-[3rem] rounded-[5rem] bg-[#fff] drop-shadow-lg hover:shadow-lg active:shadow-none focus:shadow-none" onClick={onBackClick}>
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-end justify-between px-[1rem] w-auto h-auto">
        <Button className="flex flex-col justify-center items-center flex-shrink-0 text-white w-[3rem] h-[3rem] rounded-[5rem] bg-[#57CC99] drop-shadow-lg hover:shadow-lg active:shadow-none focus:shadow-none" onClick={onNextClick}>
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>            
  );
}
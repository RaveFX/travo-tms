import { Button } from "@material-tailwind/react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
 
export default function BacknNext() {
  return (
    <div className="flex items-center gap-4">
      <Button className="flex items-center gap-3 w-[40px] h-[40px] rounded-full px-0">
        <ArrowSmallLeftIcon strokeWidth={2} className="w-[40px] h-[40px]" /> 
      </Button>
      <Button className="flex items-center gap-3 w-[40px] h-[40px] rounded-full px-0">
        <ArrowSmallLeftIcon strokeWidth={2} className="w-[40px] h-[40px]" /> 
      </Button>
      
    </div>
  );
}
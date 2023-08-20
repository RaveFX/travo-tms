import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
   
  export default function Cardtrip() {
    return (
      <Card className="mt-6 md:w-[283px] h-[467px]  p-3 hover:scale-105 hover:delay-300">
        <CardHeader color="blue-gray" className="relative h-56">
            <img src="/images/sigiriya.jpg" alt="Sigiriya" className="object-cover h-48 w-96" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Trip to Sigiriya
          </Typography>
          <Typography className="flex flex-row ">
            <img src="/images/Profile Picture.svg" alt="Logo" className="h-[24px] w-[24px] mr-[5px]" />
            @username from Matara
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life
            in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-between p-0">
          <Button className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] ">Watch</Button>
          <Button className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#E9E9E9] hover:bg-[#22577A]">Edit</Button>
        </CardFooter>
      </Card>
    );
  }
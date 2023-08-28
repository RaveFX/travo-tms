import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Saves() {
    return (
      <Card className="m-10 top-40 p-3 w-100 h-60 ">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            You haven't Save anything yet
          </Typography>
          <Typography>
            To save, Explore for hotels, restaurants and things to do, then tap the save icon
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button 
          className="h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'">Read More</Button>
        </CardFooter>
      </Card>
    );
  }
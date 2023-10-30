import React from "react";
import TopNavbar from '../../components/web-component/Navbar'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Spinner,
} from "@material-tailwind/react";

const BackgroundBlogCard = () => {
  return (
    
    <Card
      shadow={false}
      className="relative grid h-screen w-screen  items-end justify-center overflow-hidden text-center rounded-none"
    >
      
      <CardBody className="relative py-14 px-6 md:px-12 bottom-[250px] flex flex-col items-center justify-center">
        <img src="../../../public/traveler/success.png"/>
        <Typography
          variant="h3"
          color="black"
          className="mb-3 font-medium leading-[1.5] text-center"
        >
          Your Payment is Successful
        </Typography>
        <Typography
          color="black"
          className="mb-3 font-thin  text-md leading-[1.5] w-72 text-center"
        >
          Thank you for using our service.
        </Typography>
        {/* <Typography className="flex justify-center items-center">
          <Spinner />
        </Typography> */}
      </CardBody>
    </Card>
  );
};

// function Register_success() {
//   return (
//     <div>
//     <TopNavbar />
//       <BackgroundBlogCard />
//     </div>
//   );
// }

export default BackgroundBlogCard;

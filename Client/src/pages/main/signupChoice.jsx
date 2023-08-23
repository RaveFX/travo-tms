import React from "react";
//import Newnav from "../../components/newnav";
//import Navingation_home from "../../components/homenavbar";
import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Shopitem() {
  return (
    <div className=" flex ml-10 flex-wrap gap-5">
      {shopItems.map((item) => (
        <Card key={item.id} className="w-56 hover:scale-105">
          <CardHeader className="rounded-lg m-2" shadow={false} floated={false}>
            <img
              src={item.imageSrc}
              alt="card-image"
              className="h-40 w-full object-cover bg-slate-100"
            />
          </CardHeader>
          <CardBody>
            <div className="font-poppins flex mx-10">
              <Typography
                color="blue-gray"
                className="text-sm font-bold font-poppins"
              >
                {item.name}
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0 ">
            <Link to={item.links}>
              <Button
                ripple={false}
                fullWidth={true}
                className="w-full font-poppins h-12 bg-white text-black shadow-none  focus:scale-105 focus:shadow-none active:scale-100"
              >
                {item.buttonname}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

const shopItems = [
  {
    imageSrc: "/main/store_manager.png",
    buttonname: "Traveller",
    links: "/Signup",
  },
  {
    imageSrc: "/main/hotel_agent.png",
    buttonname: "Service Provider",
    links: "/service_providers",
  },
];

function SignupChoice() {
  return (
    <div
      className="font-poppins relative overflow bg-cover bg-no-repeat w-screen h-screen text-white"
      style={{ backgroundImage: "url('/main/photo3.jpg')" }}
    >
      <Navingation_home />
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl">
            <img
              src="/travo-white.png"
              alt="Sample image"
              className="w-[60%] mt-16"
            />
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl ml-20">
              Sign-up As,
            </h2>
          </div>
          <div className="mt-24">
            <Shopitem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupChoice;

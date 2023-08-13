import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../components/navbar2";
import Sidebar from "../components/sidebar";
import { Button, CardBody } from "@material-tailwind/react";

import Cardss from "../components/card";
import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const shopItems = [
  {
    id: 1,
    name: "Hotels",
    price: "Book your stay with us",
    imageSrc:
      "https://www.resort98acres.com/wp-content/uploads/2013/04/slider-5.jpg",
    buttonname: "Book Now",
  },
  {
    id: 2,
    name: "Vehicles",
    price: "Rent your vehicle with us",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1661775983935-579b5c94e2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww&w=1000&q=80",
    buttonname: "Book Now",
  },
  {
    id: 2,
    name: "Camping Items",
    price: "Camping items for rent",
    imageSrc:
      "https://www.beyondthetent.com/wp-content/uploads/2023/03/Cool-Camping-Gear.jpg",
    buttonname: "Book Now",
  },
  {
    id: 2,
    name: "Travel Guides",
    price: "Guides for your trip",
    imageSrc:
      "https://cdn-production.checkfront.com/wp-content/uploads/2022/05/img_6273f0e0deafc.jpg",
    buttonname: "Book Now",
    links: "/GuideProfile",
  },

  // Add more items as needed
];

function Shopitem() {
  return (
    <div className=" flex ml-10 flex-wrap gap-5">
      {shopItems.map((item) => (
        <Card key={item.id} className="w-48">
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
            <Typography
              variant="small"
              color="red"
              className="font-bold text-xs mb-2 font-poppins opacity-75 mx-5"
            >
              {item.price}
            </Typography>
            <Typography
              variant="small"
              color="red"
              className="mb-2 text-xs w-[75%] bg-slate-300 p-1.5 font-poppins opacity-75 rounded-lg mx-6"
            >
              {item.availability}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 bg-indigo-500 rounded-b-lg">
            <Link to={item.links}>
              <Button
                ripple={false}
                fullWidth={true}
                className="w-full font-poppins h-12 bg-[#22577A] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
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

function Travdash() {
  return (
    <>
      <div className="font-poppins flex bg-[#F6F8FA] w-full">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="w-screen ml-[18.25%]">
          <TopNavbar />

          <section class="py-8 w-[55%]">
            <div class=" mx-10 mr-auto">
              <div class="px-7 py-6 bg-white rounded-xl drop-shadow-sm  ">
                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2 pt-6 mb-10 md:mb-0">
                    <h3 class="mb-1 text-2xl font-bold text-black">
                      <span class="text-green-600">Howdy!</span>
                      <span> Ravindu</span>
                    </h3>
                    <p class="mb-8 md:mb-16 text-sm font-medium text-green-500">
                      How are you today?
                    </p>
                    <a
                      class="flex items-center text-white font-medium"
                      href="#"
                    >
                      <p class="text-black mr-2">Why wait?</p>
                      <Button className="bg-indigo-500  ">Plan a trip</Button>
                    </a>
                  </div>
                  <div class="w-full md:w-1/2 flex items-center">
                    <img
                      class="rounded-xl w-96 h-48"
                      src="/ella.jpg"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="ml-10 font-bold  mb-3">Other Options</div>
          <div className="">
            {/* <Cardss />
            <Cardss />
            <Cardss />
            <Cardss /> */}
            <Shopitem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Travdash;

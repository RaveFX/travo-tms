import React from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../../components/navbar-general";
import Sidebar from "../../components/web-component/Sidebar";
// import { Carousel } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const shopItems = [
  {
    id: 1,
    name: "Insta360 One",
    price: "Rs.1500.00/N",
    imageSrc: "https://i.imgur.com/FWW6xG5.png",
    availability: "",
  },
  {
    id: 2,
    name: "GroPro Hero 9 Black",
    price: "Rs.2500.00/N",
    imageSrc: "https://i.imgur.com/9YVGtNS.png",
    availability: "",
  },
  {
    id: 2,
    name: "GroPro Hero 11 Black",
    price: "Rs.3500.00/N",
    imageSrc: "https://i.imgur.com/069JxkB.png",
    availability: "",
  },
  {
    id: 2,
    name: "GroPro Session",
    price: "Rs.1500.00/N",
    imageSrc: "https://i.imgur.com/5b6Jy5K.png",
    availability: "",
  },
  {
    id: 2,
    name: "DJI Osmo Action",
    price: "Rs.2500.00/N",
    imageSrc: "https://i.imgur.com/P1drqjM.png",
    availability: "",
  },
  {
    id: 2,
    name: "Midland Xtra-Talk",
    price: "Rs.3500.00/N",
    imageSrc: "https://i.imgur.com/CmcEm33.png",
    availability: "",
  },
  {
    id: 2,
    name: "GroPro Hero 9 Black",
    price: "Rs.4500.00/N",
    imageSrc: "https://i.imgur.com/FxDexN9.png",
    availability: "",
  },
  {
    id: 2,
    name: "GroPro Hero 9 Black",
    price: "Rs.6500.00/N",
    imageSrc: "https://i.imgur.com/Ept5gHN.png",
    availability: "",
  },
  {
    id: 2,
    name: "GroPro Hero 9 Black",
    price: "Rs.5500.00/N",
    imageSrc: "https://i.imgur.com/REDBls7.png",
    availability: "",
  },
  {
    id: 2,
    name: "GroPro Hero 9 Black",
    price: "Rs.1500.00/N",
    imageSrc:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    availability: "",
  },
  // Add more items as needed
];

function Shopitem() {
  return (
    <div className=" flex flex-wrap gap-5">
      {shopItems.map((item) => (
        <Card key={item.id} className="w-48">
          <CardHeader className="rounded-lg m-2" shadow={false} floated={false}>
            <img
              src={item.imageSrc}
              alt="card-image"
              className="h-40 w-full object-contain bg-slate-100"
            />
          </CardHeader>
          <CardBody>
            <div className="ml-3 mr-3 flex items-center justify-between">
              <Typography color="blue-gray" className="font-lg">
                {item.name}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="red"
              className="font-bold mb-2 font-poppins opacity-75 ml-3"
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
            <Link to="/StoreProduct">
              <Button
                ripple={false}
                fullWidth={true}
                className="w-full font-poppins h-12 bg-[#22577A] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function Store() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className=" fixed">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full ml-[18.5%]">
          <TopNavbar />

          <div>
            <div className="ml-10 mt-[2%] bg-white p-5 rounded-lg w-[93%]  flex">
              <h1 className="font-bold text-lg">Travo</h1>
              <h1 className="font-bold text-red-700 text-lg">Store</h1>
            </div>

            <div className="mt-5 ml-10 mb-5 flex"></div>
          </div>
          <div className="flex z-10">
            <div className="ml-10 flex">
              <Shopitem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;

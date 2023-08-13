import React, { useState } from "react";
import Sidebar from "../components/sidebarv2";
import TopNavbar from "../components/navbar2";
import { useNavigate } from "react-router-dom";

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
    <div className=" flex flex-wrap gap-10">
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
            <Button
              ripple={false}
              fullWidth={true}
              className="w-full font-poppins h-12 bg-indigo text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function Store() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  //   const handleBackClick = () => {
  //     // Navigate to the previous page or route when the "Back" button is clicked
  //     navigate("/Budget");

  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  //   const handleNextClick = () => {
  //     // Navigate to the next page or route when the "Next" button is clicked
  //     //navigate('/next-page');
  //     setIsOpen(false);

  //     navigate("/Travdash");
  //   };

  // let activeTitle;
  // switch (activeStep) {
  //   case 0:
  //     activeTitle = "My trips";
  //     break;
  //   case 1:
  //     activeTitle = "Itinerary";
  //     break;
  //   default:
  //     activeTitle = "";
  // }
  return (
    <div className="flex h-screen overflow-hidden ">
      <Sidebar
        active={
          activeStep === 0 ? "My Trips" : activeStep === 1 ? "Itinerary" : ""
        }
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
      />
      <div className="flex flex-col w-screen bg-[#D9D9D9] bg-opacity-20  ">
        <TopNavbar />
        <div className="overflow-y-scroll">
          <div className="flex justify-between"></div>
          <div>{/* <Calendar /> */}</div>
          <div>
            <Shopitem />
            {/* <BacknNext className="flex justify-center overflow-hidden" onBackClick={handleBackClick} onNextClick={handleNextClick} />  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;

import React, { useState } from "react";
// import Sidebar from "../web-component/Sidebar";
// import TopNavbar from "../web-component/Navbar";


// import { TripNameBar } from "../web-component/TripName";
// import Calendar from "../web-component/calander";
// import BacknNext from "../web-component/BackNext";
import { Link, useNavigate } from "react-router-dom";
// import Members from "../web-component/Members";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Itinerary() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleBackClick = () => {
    // Navigate to the previous page or route when the "Back" button is clicked
    navigate("/mytrips");
  };

  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(true);
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const handleNextClick = () => {
    // Navigate to the next page or route when the "Next" button is clicked
    //navigate('/next-page');
    setIsOpen(false);
    setIsSubSidebarOpen(true);
  };

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const data = [
    {
      label: "Day 01",
      value: "1",
      //   desc: ,
    },
    {
      label: "Day 02",
      value: "2",
    },
    {
      label: "Day 03",
      value: "3",
    },
    {
      label: "Day 04",
      value: "4",
    },
    {
      label: "Day 05",
      value: "5",
    },
  ];

  const travelData4 = [
    {
      name: "Cafe Aroma Inn",
      images: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80",
        "https://www.spring.org.uk/images/man-8-1.jpg",

        // Add other image URLs here
      ],
    },
    {
      name: "Kandy City Hotel by Earl's",
      images: [
        "https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg",
        "https://wl-brightside.cf.tsp.li/resize/728x/jpg/337/af8/e797ca5cab85b8864dd49a290b.jpg",

        // Add other image URLs here
      ],
    },
    {
      name: "Kandy View Hotel",
      images: [
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg",

        // Add other image URLs here
      ],
    },
    {
      name: "Kandy View Hotel",
      images: [
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg",

        // Add other image URLs here
      ],
    },
    // Add more objects for other items
  ];

  return (
    <>
      <div className="flex overflow-hidden w-full">
        <div
          className="flex flex-col  h-fit bg-white bg-opacity-20 overflow-y-scroll w-full"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex justify-between">
          </div>
          <div>
            <>
              <Tabs value="1" className="max-w-[60rem] m-8 mb-0 bg-transparent">
                <TabsHeader
                  className="bg-transparent"
                  indicatorProps={{
                    className:
                      "bg-[#57CC99] shadow-none rounded-full font-bold",
                  }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => handleOpen(value)}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>

              <div className="m-5 mt-7 pt-0 p-5">
                <Accordion
                  open={open === "1"}
                  icon={<Icon id={"1"} open={open} />}
                >
                  <AccordionHeader onClick={() => handleOpen("1")}>
                    Day 1
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Attractions
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Hotels
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">

                      <div className="flex flex-row h-25 w-75">
                        {travelData4.map((item, index) => (
                          <div
                            key={index}
                            className="my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4"
                          >
                            <div className="flex flex-row">
                              <div>

                                <div className="flex flex-row gap-10 mb-5">
                                  <div className="flex">
                                    <p className="text-sm">{item.name}</p>
                                  </div>
                                  <div className="flex">
                                    <input
                                      type="checkbox"
                                      className="cursor-pointer"
                                      id="acceptCheckbox" // Give it a unique ID
                                      name="acceptance" // Use the same 'name' for checkboxes in the same group
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h3>5</h3>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                  <div className="flex  -space-x-3">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>


                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Link to="/traveler/Hotelselectionpage">
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Activities
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === "2"}
                  icon={<Icon id={"2"} open={open} />}
                >
                  <AccordionHeader onClick={() => handleOpen("2")}>
                    Day 2
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Attractions
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Hotels
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Activities
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === "3"}
                  icon={<Icon id={"3"} open={open} />}
                >
                  <AccordionHeader onClick={() => handleOpen("3")}>
                    Day 3
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Attractions
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Hotels
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Activities
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === "4"}
                  icon={<Icon id={"4"} open={open} />}
                >
                  <AccordionHeader onClick={() => handleOpen("4")}>
                    Day 4
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Attractions
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Hotels
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Activities
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === "5"}
                  icon={<Icon id={"5"} open={open} />}
                >
                  <AccordionHeader onClick={() => handleOpen("5")}>
                    Day 5
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Attractions
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 ">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Hotels
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 ">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                    <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                      <Typography className="pl-4 text-white font-bold">
                        Activities
                      </Typography>
                    </div>
                    <div className="flex flex-col justify-center gap-4 ">
                      <Typography className="w-fit ml-[38%] opacity-[50%]">
                        You haven't add item yet
                      </Typography>
                      <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                        Add item
                      </Button>
                    </div>
                  </AccordionBody>
                </Accordion>

              </div>
            </>


          </div>

        </div>
      </div>
    </>
  );
}

export default Itinerary;

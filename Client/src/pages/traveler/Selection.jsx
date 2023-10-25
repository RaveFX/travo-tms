import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import Members from "../web-component/Members";
import axios from 'axios';

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

function Selections() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleBackClick = () => {
    // Navigate to the previous page or route when the "Back" button is clicked
    navigate("/mytrips");
  };

  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(true);
  const [isMemberOpen, setIsMemberOpen] = useState(false);


  const handleNextClick = () => {
    setIsOpen(false);
    setIsSubSidebarOpen(true);
  };

  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);




  const [hotelpolllist, setHotelpolllist] = useState([]);
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/');
  const pathTripId = pathParts[3];

  console.log(pathTripId);

  useEffect(() => {
    loadHotelpolllist();
  }, []);

  const loadHotelpolllist = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/trips/hoteLlist/${pathTripId}`)
    setHotelpolllist(result.data);

    const updatevote = await axios.get(`http://localhost:8080/api/v1/trips/updateTotalVotes/${pathTripId}/${hotelId}/${isChecked}`)
    setHotelpolllist(updatevote.data);
  }

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

  return (

    <>
      <div className="flex overflow-hidden w-full">
        <div
          className="flex flex-col w-full h-fit bg-white bg-opacity-20 overflow-y-scroll w-full"
          style={{ scrollbarWidth: "none" }}
        >

          <div className="flex justify-between">

          </div>
          <div className="flex flex-row ">

            <>

              <div className="w-full">
                <Tabs value="1" className="max-w-[50rem] m-8 mb-0 bg-transparent">
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

                <div className="m-5 mt-0 pt-0 p-5">
                  <Accordion
                    open={true}
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
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>

                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8 ">
                        <div className="flex flex-row h-25 w-75">

                          {hotelpolllist.map((hotel) => (
                            <div key={hotel.hotelId} className="my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4">
                              <div className="flex flex-row">
                                <div>
                                  <div className="flex flex-row gap-10 mb-5">
                                    <div className="flex">
                                      <p className="text-sm">{hotel.hotel_name}</p>
                                    </div>
                                    <div className="flex">
                                      <input
                                        type="checkbox"
                                        className="cursor-pointer"
                                        id={`acceptCheckbox-${hotel.hotel_id}`} // Use a unique ID based on hotelId
                                        name="acceptance" // Use the same 'name' for checkboxes in the same group
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <h3>{hotel.total_votes}</h3>
                                  </div>
                                  <div className="flex flex-col items-center space-y-4">
                                    <div className="flex -space-x-3">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                        </div>


                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Link to="/traveler/Hotelselectionpage">
                          <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                            Add item from Saves
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
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
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
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>

                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>
                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Activities
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
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
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>

                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>
                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Activities
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
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
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>

                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>
                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Activities
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
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
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>

                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 ">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>
                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Activities
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 ">
                        <Typography className="w-fit ml-[38%] opacity-[50%]">
                          Add item for make poll
                        </Typography>
                        <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item from Saves
                        </Button>
                      </div>
                    </AccordionBody>
                  </Accordion>

                </div>
              </div>
            </>


            {/* <MemberPopup isMemberOpen={isMemberOpen} setIsMemberOpen={setIsMemberOpen}/> */}
            {/* {isMemberOpen && <Members isMemberOpen={isMemberOpen} setIsMemberOpen={setIsMemberOpen}/>} */}
          </div>
          <div>
            {/* <BacknNext className="flex justify-center overflow-hidden" onBackClick={handleBackClick} onNextClick={handleNextClick} />  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Selections;

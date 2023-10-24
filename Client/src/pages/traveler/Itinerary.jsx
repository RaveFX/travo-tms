import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
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
      className={`${
        id === open ? "rotate-180" : ""
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
  const { id } = useParams();
  const [days, setDays] = useState([]);

  useEffect(() => {
    loadDays();
  }, []);

  const loadDays = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/trip/tripDates/${id}`);
      setDays(response.data);
    } catch (error) {
      console.error('Error loading days:', error);
    }
  };

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

  const [open, setOpen] = useState('0');

  const handleOpen = (value) => setOpen(open === value ? '0' : value);


  
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
            <Tabs value={open} className="max-w-[40rem] m-8 mb-0 bg-transparent">
            <TabsHeader
              className="bg-transparent"
              indicatorProps={{
                className: 'bg-[#57CC99] shadow-none rounded-full font-bold',
              }}
            >
              {days.map((day,index) => (
                <Tab key={index+1} value={index+1} onClick={() => handleOpen(index+1)}>
                  Day {index+1}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
    

              <div className="m-5 mt-7 pt-0 p-5">
              {days.map((day,index) => (
                <Accordion key={index+1} open={open === index+1} icon={<Icon id={(index+1).toString()} open={open} />}>
                <AccordionHeader onClick={() => handleOpen((index+1).toString())}>
                  Day {index+1}
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
                <div className="flex flex-col justify-center gap-4 mt-8 mb-8 ">
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
               ))}
                
              </div>
            </>

            
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Itinerary;

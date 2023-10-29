// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// // import Members from "../web-component/Members";
// import axios from 'axios';

// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${id === open ? "rotate-180" : ""
//         } h-5 w-5 transition-transform`}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//       />
//     </svg>
//   );
// }

// function Selections() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(true);
//   const handleBackClick = () => {
//     // Navigate to the previous page or route when the "Back" button is clicked
//     navigate("/mytrips");
//   };

//   const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(true);
//   const [isMemberOpen, setIsMemberOpen] = useState(false);

//   const user_id = sessionStorage.getItem('user_id');


//   const handleNextClick = () => {
//     setIsOpen(false);
//     setIsSubSidebarOpen(true);
//   };

//   const [open, setOpen] = React.useState(0);
//   const handleOpen = (value) => setOpen(open === value ? 0 : value);




//   const [hotelpolllist, setHotelpolllist] = useState([]);
//   const currentPath = window.location.pathname;
//   const pathParts = currentPath.split('/');
//   const pathTripId = pathParts[3];

//   console.log(pathTripId);

//   useEffect(() => {
//     loadHotelpolllist();
//   }, []);

//   const loadHotelpolllist = async () => {
//     const result = await axios.get(`http://localhost:8080/api/v1/trip/hoteLlist/${pathTripId}`)
//     setHotelpolllist(result.data);

//     const updatevote = await axios.get(`http://localhost:8080/api/v1/trip/updateTotalVotes/${pathTripId}/${hotelId}/${isChecked}`)
//     setHotelpolllist(updatevote.data);
//   }

//   const data = [
//     {
//       label: "Day 01",
//       value: "1",
//       //   desc: ,
//     },
//     {
//       label: "Day 02",
//       value: "2",
//     },
//     {
//       label: "Day 03",
//       value: "3",
//     },
//     {
//       label: "Day 04",
//       value: "4",
//     },
//     {
//       label: "Day 05",
//       value: "5",
//     },
//   ];

//   const handleCheckboxChange = async (hotelId, checked) => {

//     const updatedHotelpolllist = hotelpolllist.map((hotel) => {
//       if (hotel.hotel_id === hotelId) {
//         const newTotalVotes = checked ? hotel.total_votes + 1 : hotel.total_votes - 1;


//         updateTotalVotes(hotelId, newTotalVotes, checked);

//         console.log(checked)
//         console.log(hotelId)
//         console.log(newTotalVotes)

//         handleAsyncAction(hotelId, checked);

//         return {
//           ...hotel,
//           total_votes: newTotalVotes,
//         };
//       }
//       return hotel;
//     });

//     setHotelpolllist(updatedHotelpolllist);
//   };

//   const updateTotalVotes = async (hotelId, newTotalVotes, isChecked) => {
//     try {
//       const response = await axios.put(`http://localhost:8080/api/v1/trip/updateTotalVotes/${pathTripId}/${hotelId}/${isChecked}`);
//       // Handle the response as needed
//     } catch (error) {
//       // Handle errors
//       console.error(error);
//     }
//   };


//   const handleAsyncAction = async (hotelId, checked) => {
//     try {
//       let poll_id;
//       for (const hotel of hotelpolllist) {
//         if (hotel.hotel_id === hotelId) {
//           console.log(hotel.id)
//           poll_id = hotel.id; // Assuming `id` is the hotel poll ID
//         }
//       }

//       const data = {
//         user_id: user_id,  // Assuming this is the user ID
//         hotelPoll: {
//           id: poll_id  // Assuming this is the hotel poll ID
//         }
//       };

//       if (checked) {
//         const response = await axios.post('http://localhost:8080/api/v1/trip/updatePolluser/addlist', data);
//         console.log('Poll added successfully:', response.data);
//       } else {
//         const response = await axios.delete('http://localhost:8080/api/v1/trip/updatePolluser/remove/${poll_id}', data);
//         console.log('Poll removed successfully:', response.data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };







//   return (
//     <>
//       <div className="flex overflow-hidden w-full">
//         <div
//           className="flex flex-col w-full h-fit bg-white bg-opacity-20 overflow-y-scroll w-full"
//           style={{ scrollbarWidth: "none" }}
//         >

//           <div className="flex justify-between">

//           </div>
//           <div className="flex flex-row ">

//             <>

//               <div className="w-full">
//                 <Tabs value="1" className="max-w-[50rem] m-8 mb-0 bg-transparent">
//                   <TabsHeader
//                     className="bg-transparent"
//                     indicatorProps={{
//                       className:
//                         "bg-[#57CC99] shadow-none rounded-full font-bold",
//                     }}
//                   >
//                     {data.map(({ label, value }) => (
//                       <Tab
//                         key={value}
//                         value={value}
//                         onClick={() => handleOpen(value)}
//                       >
//                         {label}
//                       </Tab>
//                     ))}
//                   </TabsHeader>
//                 </Tabs>

//                 <div className="m-5 mt-0 pt-0 p-5">
//                   <Accordion
//                     open={true}
//                     icon={<Icon id={"1"} open={open} />}
//                   >
//                     <AccordionHeader onClick={() => handleOpen("1")}>
//                       Day 1
//                     </AccordionHeader>
//                     <AccordionBody>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Attractions
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>

//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Hotels
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8 ">
//                         <div className="flex flex-row h-25 w-75">

//                           {hotelpolllist.map((hotel) => (
//                             <div key={hotel.hotelId} className="my-8 flex w-[30%] ml-5 rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-4">
//                               <div className="flex flex-row">
//                                 <div>
//                                   <div className="flex flex-row gap-10 mb-5">
//                                     <div className="flex">
//                                       <p className="text-sm">{hotel.hotel_id}{hotel.hotel_name}{hotel.id}</p>
//                                     </div>
//                                     <div className="flex">
//                                       <input
//                                         type="checkbox"
//                                         className="cursor-pointer"
//                                         id={`acceptCheckbox-${hotel.hotel_id}`}
//                                         name="acceptance"
//                                         onChange={(e) => handleCheckboxChange(hotel.hotel_id, e.target.checked)}
//                                       />
//                                     </div>
//                                   </div>
//                                   <div>
//                                     <h3>{hotel.total_votes}</h3>
//                                   </div>
//                                   <div className="flex flex-col items-center space-y-4">
//                                     <div className="flex -space-x-3">
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}

//                         </div>


//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Link to="/traveler/Hotelselectionpage">
//                           <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                             Add item from Saves
//                           </Button>
//                         </Link>
//                       </div>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Activities
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                     </AccordionBody>
//                   </Accordion>
//                   <Accordion
//                     open={open === "2"}
//                     icon={<Icon id={"2"} open={open} />}
//                   >
//                     <AccordionHeader onClick={() => handleOpen("2")}>
//                       Day 2
//                     </AccordionHeader>
//                     <AccordionBody>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Attractions
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>

//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Hotels
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Activities
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                     </AccordionBody>
//                   </Accordion>
//                   <Accordion
//                     open={open === "3"}
//                     icon={<Icon id={"3"} open={open} />}
//                   >
//                     <AccordionHeader onClick={() => handleOpen("3")}>
//                       Day 3
//                     </AccordionHeader>
//                     <AccordionBody>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Attractions
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>

//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Hotels
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Activities
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                     </AccordionBody>
//                   </Accordion>
//                   <Accordion
//                     open={open === "4"}
//                     icon={<Icon id={"4"} open={open} />}
//                   >
//                     <AccordionHeader onClick={() => handleOpen("4")}>
//                       Day 4
//                     </AccordionHeader>
//                     <AccordionBody>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Attractions
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>

//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Hotels
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Activities
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                     </AccordionBody>
//                   </Accordion>
//                   <Accordion
//                     open={open === "5"}
//                     icon={<Icon id={"5"} open={open} />}
//                   >
//                     <AccordionHeader onClick={() => handleOpen("5")}>
//                       Day 5
//                     </AccordionHeader>
//                     <AccordionBody>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Attractions
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 ">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>

//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Hotels
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 ">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                       <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
//                         <Typography className="pl-4 text-white font-bold">
//                           Activities
//                         </Typography>
//                       </div>
//                       <div className="flex flex-col justify-center gap-4 ">
//                         <Typography className="w-fit ml-[38%] opacity-[50%]">
//                           Add item for make poll
//                         </Typography>
//                         <Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
//                           Add item from Saves
//                         </Button>
//                       </div>
//                     </AccordionBody>
//                   </Accordion>

//                 </div>
//               </div>
//             </>


//             {/* <MemberPopup isMemberOpen={isMemberOpen} setIsMemberOpen={setIsMemberOpen}/> */}
//             {/* {isMemberOpen && <Members isMemberOpen={isMemberOpen} setIsMemberOpen={setIsMemberOpen}/>} */}
//           </div>
//           <div>
//             {/* <BacknNext className="flex justify-center overflow-hidden" onBackClick={handleBackClick} onNextClick={handleNextClick} />  */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Selections;



import React, { useEffect, useState } from 'react'
import { StarIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

// import Swal from 'sweetalert2';

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
  const { id } = useParams();
  const [days, setDays] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [activities, setActivities] = useState([]);
  const [attractions, setAttractions] = useState([]);


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

  const handleOpen = async (value) => {
    setOpen(open === value ? '0' : value);
    const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedHotelList/${id}/${value}`)
    setHotels(result.data);

    const result2 = await axios.get(`http://localhost:8080/api/v1/trip/selectedActivityList/${id}/${value}`)
    setActivities(result2.data);

    const result3 = await axios.get(`http://localhost:8080/api/v1/trip/pollAttractionList/${id}/${value}`)
    setAttractions(result3.data);

  }

  const user_id = sessionStorage.getItem('user_id');
  const [attractionpolllist, setAttractionpolllist] = useState([]);
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/');
  const pathTripId = pathParts[3];

  console.log(pathTripId);



  // Attractions
  useEffect(() => {
    loadAttractionpolllist();
  }, []);

  const loadAttractionpolllist = async () => {
    const updatevote = await axios.get(`http://localhost:8080/api/v1/trip/updateTotalVotes/${pathTripId}/${attractionId}/${isChecked}`)
    setAttractionpolllist(updatevote.data);
  }

  const handleCheckboxChange = async (attractionId, isChecked, day) => {
    const updatedAttractionpolllist = attractions.map((attraction) => {
      if (attraction.place_id === attractionId) {
        const newTotalVotes = isChecked ? attraction.total_votes + 1 : attraction.total_votes - 1;

        // console.log("uuuuuuuuuuuuuu");
        // console.log(pathTripId);
        // console.log(attractionId);
        // console.log(isChecked);


        updateTotalVotes(attractionId, newTotalVotes, isChecked, day);
        handleAsyncAction(attractionId, isChecked);

        return {
          ...attraction,
          total_votes: newTotalVotes,
        };
      }
      return attraction;
    });

    setAttractions(updatedAttractionpolllist);
  };


  const updateTotalVotes = async (attractionId, newTotalVotes, isChecked, day) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/trip/updateAttractionTotalVotes/${pathTripId}/${attractionId}/${isChecked}/${day}`);
    } catch (error) {
      console.error(error);
    }
  };


  const handleAsyncAction = async (attractionId, checked) => {
    try {
      const selectedAttraction = attractions.find(attraction => attraction.place_id === attractionId);

      if (!selectedAttraction) {
        console.error('Selected attraction not found');
        return;
      }
      const data = {
        user_id,
        attractionPoll: { id: selectedAttraction.id }
      };

      if (checked) {
        const response = await axios.post('http://localhost:8080/api/v1/trip/attractions/updatePolluser/addlist', data);
        console.log('Poll added successfully:', response.data);
      } else {
        // const response = await axios.delete('http://localhost:8080/api/v1/trip/attractions/updatePolluser/remove', data);
        // console.log('Poll removed successfully:', response.data);
        const deleteEndpoint = `http://localhost:8080/api/v1/trip/attractions/updatePolluser/remove?user_id=${user_id}&attractionPollId=${selectedAttraction.id}`;
        const response = await axios.delete(deleteEndpoint);
        console.log('Poll removed successfully:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };






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
                  {days.map((day, index) => (
                    <Tab key={index + 1} value={index + 1} onClick={() => handleOpen(index + 1)}>
                      Day {index + 1}
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>


              <div className="m-5 mt-7 pt-0 p-5">
                {days.map((day, index) => (
                  <Accordion key={index + 1} open={open === index + 1} icon={<Icon id={(index + 1).toString()} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen((index + 1).toString())}>
                      Day {index + 1}
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Attractions
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                          {(
                            attractions.map((attraction) => (
                              <div
                                key={attraction.place_id}

                                className="bg-white p-4 rounded-lg shadow border relative"
                              >
                                <div className="flex">
                                  <div className="flex items-center justify-center mb-2">
                                    {attraction.img_url ? (
                                      <img
                                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.img_url}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                                        alt={`${attraction.name} - Photo`}
                                        className="w-full h-44 rounded-md object-cover"
                                      />
                                    ) : (
                                      <img
                                        src="/main/no_image_available.jpeg" // Provide the path to your default image
                                        alt="Default Image"
                                        className="w-full h-44 rounded-md object-cover"
                                      />
                                    )}

                                  </div>
                                  <div className="flex flex-col items-center justify-center mb-2">
                                    <div className="flex">
                                      <input
                                        type="checkbox"
                                        className="cursor-pointer"
                                        id={`acceptCheckbox-${attraction.place_id}`}
                                        name="acceptance"
                                        onChange={(e) => handleCheckboxChange(attraction.place_id, e.target.checked, index + 1)}
                                      />
                                    </div>

                                    <Button className="bg-gray-300 text-[#FF5C5C] rounded-full" onClick={() => handleRemoveAttraction(attraction)}>Vote</Button>
                                    <h2 className="text-xl font-semibold mb-2">{attraction.total_votes}</h2>
                                  </div>
                                </div>

                                <h2 className="text-xl font-semibold mb-2">{attraction.name}</h2>


                              </div>
                            ))
                          )}
                        </div>
                        <Link to={`/traveler/attractionspoll/${id}/${index + 1}`}><Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item for make poll
                        </Button>
                        </Link>
                      </div>

                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                          {hotels.map((hotel) => (
                            <div
                              key={hotel.hotel_id}
                              className="bg-white p-4 rounded-lg shadow border relative "
                              onClick={""}
                            >
                              <div className="flex items-center justify-center mb-2">
                                <img
                                  src={`/main/${hotel.hotel_img}`}
                                  alt={`${hotel.hotel_name}'s Photo`}
                                  className="w-full h-44 rounded-md object-cover"
                                />
                              </div>
                              <h2 className="text-xl font-semibold mb-2">{hotel.hotel_name}</h2>
                              <p className="mb-2">{hotel.description}</p>
                              <div className="flex items-center mb-2">
                                <span className="mr-2 flex flex-row gap-1 justify-center">{hotel.total_reviews.toFixed(1)}<StarIcon className="w-4 h-4 strok-yellow" /></span>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-4 w-4 text-yellow-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="ml-1 text-sm text-gray-500">
                                    ({hotel.total_reviews}  reviews)
                                  </span>
                                  <div className="absolute bottom-2 right-2">
                                    <Button className="bg-gray-300 text-[#FF5C5C]  rounded-full" onClick={() => handleRemoveHotel(hotel)}>Remove</Button>
                                  </div>

                                </div>
                              </div>

                            </div>
                          ))}

                        </div>

                        <Link to={`/traveler/hotels/${id}/${index + 1}`}><Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item for make poll
                        </Button></Link>
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

export default Selections;

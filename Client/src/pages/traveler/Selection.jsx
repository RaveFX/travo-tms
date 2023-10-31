
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
  const [open, setOpen] = useState('0');
  const [hotels, setHotels] = useState([]);
  const [activities, setActivities] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [votedattractions, setVotedattractions] = useState([]);



  const user_id = sessionStorage.getItem('user_id');

  let x = 'vote';
  let y = 'voted';

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


  const handleOpen = async (value) => {
    setOpen(open === value ? '0' : value);
    const result = await axios.get(`http://localhost:8080/api/v1/trip/selectedHotelList/${id}/${value}`)
    setHotels(result.data);

    const result2 = await axios.get(`http://localhost:8080/api/v1/trip/selectedActivityList/${id}/${value}`)
    setActivities(result2.data);

    const result3 = await axios.get(`http://localhost:8080/api/v1/trip/pollAttractionList/${id}/${value}/${user_id}`)
    setAttractions(result3.data);

    const result4 = await axios.get(`http://localhost:8080/api/v1/trip/pollAttractionVotedList/${id}/${value}/${user_id}`)
    setVotedattractions(result4.data);

  }



  const [attractionpolllist, setAttractionpolllist] = useState([]);
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/');
  const pathTripId = pathParts[3];







  //Attractions

  useEffect(() => {
    loadAttractionpolllist();
  }, []);

  const loadAttractionpolllist = async () => {
    const updatevote = await axios.get(`http://localhost:8080/api/v1/trip/updateTotalVotes/${pathTripId}/${attractionId}/${isChecked}`)
    setAttractionpolllist(updatevote.data);
  }

  const [checkedAttractions, setCheckedAttractions] = useState({});
  const [checkedVoteattractions, setCheckedVoteattractions] = useState({});

  const handleButtonClick = (attractionId, indexValue) => {
    setCheckedAttractions((prevState) => {
      const isChecked = !prevState[attractionId]; // Flip the value directly
      handleCheckboxChange(attractionId, isChecked, indexValue);
      return { ...prevState, [attractionId]: isChecked };
    });
  };

  const votehandleButtonClick = (attractionId, indexValue) => {
    setCheckedVoteattractions((prevState) => {
      const isChecked = !!prevState[attractionId]; // Flip the value directly
      handlevoteCheckboxChange(attractionId, isChecked, indexValue);
      return { ...prevState, [attractionId]: !isChecked };
    });
  };

  const updateAttractions = (updatedAttractions) => {
    setAttractions(updatedAttractions);
  };

  const updateVotedattractions = (updatedVotedattractions) => {
    setVotedattractions(updatedVotedattractions);
  };

  const handleCheckboxChange = (attractionId, isChecked, day) => {
    try {
      const updatedAttractions = attractions.map(attraction => {
        if (attraction.id === attractionId) {
          updateTotalVotes(attractionId, isChecked, day);
          handleAsyncAction(attractionId, isChecked);
          const newTotalVotes = isChecked ? attraction.total_votes + 1 : attraction.total_votes - 1;
          const totalVotes = newTotalVotes >= 0 ? newTotalVotes : 0;

          return { ...attraction, total_votes: totalVotes };
        }
        return attraction;
      });
      updateAttractions(updatedAttractions);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlevoteCheckboxChange = (attractionId, isChecked, day) => {
    try {
      const updatedVotedattractions = votedattractions.map(attraction => {
        if (attraction.id === attractionId) {
          updateTotalVotes(attractionId, isChecked, day);
          handlevoteAsyncAction(attractionId, isChecked);
          const newTotalVotes = isChecked ? attraction.total_votes + 1 : attraction.total_votes - 1;
          const totalVotes = newTotalVotes >= 0 ? newTotalVotes : 0;

          return { ...attraction, total_votes: totalVotes };
        }
        return attraction;
      });
      updateVotedattractions(updatedVotedattractions);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const updateTotalVotes = async (attractionId, isChecked, day) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/trip/updateAttractionTotalVotes/${pathTripId}/${attractionId}/${isChecked}/${day}`);
    } catch (error) {
      console.error(error);
    }
  };


  const handleAsyncAction = async (attractionId, checked) => {
    try {
      const selectedAttraction = attractions.find(attraction => attraction.id === attractionId);

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
        const deleteEndpoint = `http://localhost:8080/api/v1/trip/attractions/updatePolluser/remove?user_id=${user_id}&attractionPollId=${selectedAttraction.id}`;
        const response = await axios.delete(deleteEndpoint);
        console.log('Poll removed successfully:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlevoteAsyncAction = async (attractionId, checked) => {
    try {
      const selectedAttraction = votedattractions.find(attraction => attraction.id === attractionId);

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
        const deleteEndpoint = `http://localhost:8080/api/v1/trip/attractions/updatePolluser/remove?user_id=${pathTripId}&attractionPollId=${selectedAttraction.id}`;
        const response = await axios.delete(deleteEndpoint);
        console.log('Attraction removed successfully:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddToTrip = async (attraction, day) => {
    try {
      // Make a POST request to store the attraction details
      await axios.post("http://localhost:8080/api/v1/trip/totrip/add-attraction", {
        place_id: attraction.place_id,
        name: attraction.name,
        address: attraction.address,
        img_url: attraction.img_url,
        trip_id: id,
        day: day
      });

      const deleteEndpoint = `http://localhost:8080/api/v1/trip/attractions/frompoll/delete/${attraction.id}`;
      const response = await axios.delete(deleteEndpoint);
      console.log('Poll removed successfully:', response.data);
    } catch (error) {
      console.error("Error adding attraction: ", error);
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
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                          {votedattractions.map((voteattraction) => (
                            <div key={voteattraction.place_id} className="bg-white p-2 rounded-lg shadow border relative " style={{ height: '325px' }}>
                              <div className="flex items-center justify-center mb-2">
                                {voteattraction.img_url ? (
                                  <img
                                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${voteattraction.img_url}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                                    alt={`${voteattraction.name} - Photo`}
                                    className="w-full h-32 rounded-md object-cover"

                                  />
                                ) : (
                                  <img
                                    src="/main/no_image_available.jpeg" // Provide the path to your default image
                                    alt="Default Image"
                                    className="w-full h-32 rounded-md object-cover"
                                  />
                                )}
                              </div>

                              <h4 className="text-xl font-semibold mb-2">{voteattraction.name}</h4>

                              <h2 className="text-xl font-semibold mb-2 ">
                                <span style={{ display: 'block', backgroundColor: '#377A85', color: 'white', borderRadius: '5px', padding: '6px 12px', justifyContent: 'center', textAlign: 'center' }}>
                                  {voteattraction.total_votes}
                                </span>
                              </h2>


                              <button
                                key={voteattraction.id}
                                className={`absolute cursor-pointer py-2 px-4 border bg-gray-300 text-[#FF5C5C] w-full rounded-md object-cover ${checkedVoteattractions[voteattraction.id] ? 'bg-white' : 'bg-green-500 text-black'}`}
                                style={{ width: '94%' }}
                                onClick={() => votehandleButtonClick(voteattraction.id, index + 1)}
                              >
                                {checkedVoteattractions[voteattraction.id] ? x : y}
                              </button>
                              <button
                                className="bg-[#57CC99] text-white px-3 py-1 rounded-md absolute bottom-2 right-2 gap-2"
                                onClick={() => handleAddToTrip(voteattraction, index + 1)}
                              >
                                Add to Trip
                              </button>
                            </div>
                          ))}


                          {attractions.map((attraction) => (
                            <div key={attraction.place_id} className="bg-white p-2 rounded-lg shadow border relative " style={{ height: '325px' }}>
                              <div className="flex items-center justify-center mb-2">
                                {attraction.img_url ? (
                                  <img
                                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.img_url}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                                    alt={`${attraction.name} - Photo`}
                                    className="w-full h-32 rounded-md object-cover"

                                  />
                                ) : (
                                  <img
                                    src="/main/no_image_available.jpeg" // Provide the path to your default image
                                    alt="Default Image"
                                    className="w-full h-32 rounded-md object-cover"
                                  />
                                )}
                              </div>

                              <h4 className="text-xl font-semibold mb-2">{attraction.name}</h4>

                              <h2 className="text-xl font-semibold mb-2 ">
                                <span style={{ display: 'block', backgroundColor: '#377A85', color: 'white', borderRadius: '5px', padding: '6px 12px', justifyContent: 'center', textAlign: 'center' }}>
                                  {attraction.total_votes}
                                </span>
                              </h2>
                              <button
                                key={attraction.id}
                                className={`absolute cursor-pointer py-2 px-4 border bg-gray-300 text-[#FF5C5C] w-full rounded-md object-cover ${checkedAttractions[attraction.id] ? 'bg-green-500 text-black' : 'bg-white'}`}
                                style={{ width: '94%' }}
                                onClick={() => handleButtonClick(attraction.id, index + 1)}
                              >
                                {checkedAttractions[attraction.id] ? y : x}
                              </button>
                              <button
                                className="bg-[#57CC99] text-white px-3 py-1 rounded-md absolute bottom-2 right-2 gap-2"
                                onClick={() => handleAddToTrip(voteattraction, index + 1)}
                              >
                                Add to Trip
                              </button>
                            </div>
                          ))}
                        </div>

                        <Link to={`/traveler/attractionspoll/${id}/${index + 1}`}><Button className="w-fit ml-[40%] text-[#57CC99] rounded-full bg-gray-300 normal-case shadow-none focus:shadow-none hover:shadow-none hover:bg-[#57CC99] hover:text-white active:shadow-none">
                          Add item for make poll
                        </Button></Link>

                      </div>






                      <div className="bg-gradient-to-r from-[#377A85] p-1 m-1 rounded-l-full">
                        <Typography className="pl-4 text-white font-bold">
                          Hotels
                        </Typography>
                      </div>
                      <div className="flex flex-col justify-center gap-4 mt-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                          {votedattractions.map((voteattraction) => (
                            <div key={voteattraction.place_id} className="bg-white p-2 rounded-lg shadow border relative " style={{ height: '325px' }}>
                              <div className="flex items-center justify-center mb-2">
                                {voteattraction.img_url ? (
                                  <img
                                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${voteattraction.img_url}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                                    alt={`${voteattraction.name} - Photo`}
                                    className="w-full h-32 rounded-md object-cover"

                                  />
                                ) : (
                                  <img
                                    src="/main/no_image_available.jpeg" // Provide the path to your default image
                                    alt="Default Image"
                                    className="w-full h-32 rounded-md object-cover"
                                  />
                                )}
                              </div>

                              <h4 className="text-xl font-semibold mb-2">{voteattraction.name}</h4>

                              <h2 className="text-xl font-semibold mb-2 ">
                                <span style={{ display: 'block', backgroundColor: '#377A85', color: 'white', borderRadius: '5px', padding: '6px 12px', justifyContent: 'center', textAlign: 'center' }}>
                                  {voteattraction.total_votes}
                                </span>
                              </h2>


                              <button
                                key={voteattraction.id}
                                className={`absolute cursor-pointer py-2 px-4 border bg-gray-300 text-[#FF5C5C] w-full rounded-md object-cover ${checkedVoteattractions[voteattraction.id] ? 'bg-white' : 'bg-green-500 text-black'}`}
                                style={{ width: '94%' }}
                                onClick={() => votehandleButtonClick(voteattraction.id, index + 1)}
                              >
                                {checkedVoteattractions[voteattraction.id] ? x : y}
                              </button>
                              <button
                                className="bg-[#57CC99] text-white px-3 py-1 rounded-md absolute bottom-2 right-2 gap-2"
                                onClick={() => handleAddToTrip(voteattraction, index + 1)}
                              >
                                Add to Trip
                              </button>
                            </div>
                          ))}


                          {attractions.map((attraction) => (
                            <div key={attraction.place_id} className="bg-white p-2 rounded-lg shadow border relative " style={{ height: '325px' }}>
                              <div className="flex items-center justify-center mb-2">
                                {attraction.img_url ? (
                                  <img
                                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.img_url}&key=AIzaSyACalhnjQdYpaOrtk1JxGkJWqV8iNW-CLA`}
                                    alt={`${attraction.name} - Photo`}
                                    className="w-full h-32 rounded-md object-cover"

                                  />
                                ) : (
                                  <img
                                    src="/main/no_image_available.jpeg" // Provide the path to your default image
                                    alt="Default Image"
                                    className="w-full h-32 rounded-md object-cover"
                                  />
                                )}
                              </div>

                              <h4 className="text-xl font-semibold mb-2">{attraction.name}</h4>

                              <h2 className="text-xl font-semibold mb-2 ">
                                <span style={{ display: 'block', backgroundColor: '#377A85', color: 'white', borderRadius: '5px', padding: '6px 12px', justifyContent: 'center', textAlign: 'center' }}>
                                  {attraction.total_votes}
                                </span>
                              </h2>
                              <button
                                key={attraction.id}
                                className={`absolute cursor-pointer py-2 px-4 border bg-gray-300 text-[#FF5C5C] w-full rounded-md object-cover ${checkedAttractions[attraction.id] ? 'bg-green-500 text-black' : 'bg-white'}`}
                                style={{ width: '94%' }}
                                onClick={() => handleButtonClick(attraction.id, index + 1)}
                              >
                                {checkedAttractions[attraction.id] ? y : x}
                              </button>
                              <button
                                className="bg-[#57CC99] text-white px-3 py-1 rounded-md absolute bottom-2 right-2 gap-2"
                                onClick={() => handleAddToTrip(voteattraction, index + 1)}
                              >
                                Add to Trip
                              </button>
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

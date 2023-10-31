import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/web-component/Sidebar";
import TopNavbar from "../../components/web-component/Navbar";
import { Rating } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


function TravelGuide() {
  const [guides, setGuide] = useState([]);

  useEffect(() => {
    loadGuide();
  }, []);

  const loadGuide = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/trip/guideList`)
    setGuide(result.data);
  }
  console.log(guides);


  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar active="My Trips" />
      <div className="flex flex-col w-full bg-[#D9D9D9] bg-opacity-20 ">
        <TopNavbar />
        <div className="container mx-auto mt-8 overflow-hidden">
          <h1 className="text-3xl font-poppins font-extrabold text-[#2AB57D] mb-6 mx-6">
            Travel Guides
          </h1>

          <div className="overflow-y-auto h-[calc(100vh-150px)] mx-6 "
            style={{ scrollbarWidth: 'none' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {guides.map((guide) => (
              <Card className="mt-6 w-96">
                <CardBody>
                  <div className="flex items-center justify-center mb-2">
                    <img
                      src='../../../traveler/Profile-Picture.svg'
                      // alt={`${guide.fname}'s Photo`}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {guide.fname} {guide.lname}
                  </Typography>
                  <Typography>
                    {guide.description}
                  </Typography>
                </CardBody>
                <CardFooter className="flex flex-col  pt-0">
                 <div className='flex flex-row'>

                    <Button size="sm" variant="text" className="flex items-center gap-2">
                      {guide.district}
                    </Button>
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                      {guide.nic}
                    </Button>
                 </div>
                 <div>

                    <a href={guide.contact_num} variant="gradient" className="flex flex-row rounded-full bg-green p-2 text-white w-40 my-6" color="green">
                     <img src='../../../public/traveler/phone.png' className='w-4 mx-2'/>{guide.contact_num}</a>
                 </div>
                  
                </CardFooter>
              </Card>
            ))}
            </div>
          </div>


          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuide;
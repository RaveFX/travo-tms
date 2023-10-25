import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import Cardtrip from "./card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";


export default function SwiperCard(){
    return(
      <div className='swiper container h-fit w-[1720px] hover:none'>
          <Swiper
            className='h-[100%] w-[100%]'
            slidesPerView={4}
            initialSlide={2}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}
            modules={[Navigation, FreeMode]}
          >
            
              {/* Swiper slides */}
              <div className='swiper-wrapper p-0 m-0 flex justify-center w-[1500px] absolute top-9 z-10 '>
                <SwiperSlide className='w-[100%]'>
                <Card className="mt-6 md:w-[283px] h-[467px]  p-3 hover:scale-105 hover:delay-300">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img src="/traveler/sigiriya.jpg" alt="Sigiriya" className="object-cover h-48 w-96" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Trip to Sigiriya
                  </Typography>
                  <Typography className="flex flex-row ">
                    <img src="/traveler/Profile Picture.svg" alt="Logo" className="h-[24px] w-[24px] mr-[5px]" />
                    @username from Matara
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                    and near to &quot;Naviglio&quot; where you can enjoy the main night life
                    in Barcelona.
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-between p-0">
                  <Button className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] ">Watch</Button>
                  <Button className="justify-center py-2 md:w-[125px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#E9E9E9] hover:bg-[#22577A]">Edit</Button>
                </CardFooter>
              </Card>
                </SwiperSlide>
               {/* <SwiperSlide className='w-[100%]'>
                  <Cardtrip />
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                  <Cardtrip />
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                  <Cardtrip />
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                  <Cardtrip />
                </SwiperSlide>
                <SwiperSlide className='w-[100%]'>
                  <Cardtrip />
                </SwiperSlide>*/}
          </div>
              {/* <SwiperSlide>
                <Cardtrip />
              </SwiperSlide>
              <SwiperSlide>            
              <Cardtrip />
              </SwiperSlide>
              <SwiperSlide>            
                <Cardtrip />
              </SwiperSlide>
              <SwiperSlide>            
                <Cardtrip />
              </SwiperSlide>
              <SwiperSlide>            
                <Cardtrip />
              </SwiperSlide>
              <SwiperSlide>            
                <Cardtrip />
              </SwiperSlide> */}
              {/* More Swiper slides */}
              {/* ... */}

              {/* Swiper navigation */}
            
              <div className="flex justify-center w-[100%] absolute bottom-7 z-10 ">
                <div className="flex items-end justify-between px-[1rem] w-auto h-auto ">
                  <div className="swiper-prev flex flex-col justify-center items-center flex-shrink-0 text-gray w-[3rem] h-[3rem] rounded-[5rem] bg-[#fff] drop-shadow-lg">
                    <ArrowLeftIcon className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-end justify-between px-[1rem] w-auto h-auto">
                  <div className="swiper-next flex flex-col justify-center items-center flex-shrink-0 text-white w-[3rem] h-[3rem] rounded-[5rem] bg-[#57CC99] drop-shadow-lg">
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
          </Swiper>
        </div>
    );

}
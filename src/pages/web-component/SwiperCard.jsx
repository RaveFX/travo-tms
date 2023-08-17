import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Cardtrip from "./card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


export default function SwiperCard(){
    return(
      <div className='swiper  w-fit hover:none'>
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
              </SwiperSlide>
              <SwiperSlide>            
                <Cardtrip />
              </SwiperSlide>
              <SwiperSlide>            
                <Cardtrip />
              </SwiperSlide>
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
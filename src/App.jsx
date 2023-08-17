import React from "react";
import TabBar from "./pages/web-component/TabBar";
import Cardtrip from "./pages/web-component/card";
import BoxForm from "./pages/web-component/BoxForm";
import TopNavbarLanding from "./pages/web-component/Landingpg-Navbar";
import Dashboard from "./pages/Traveller/Dashboard";
import Mytrips from "./pages/Traveller/Mytrips";
import TripPlanner from "./pages/Traveller/TripPlanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import SwiperCard from "./pages/web-component/SwiperCard";
import Itinerary from "./pages/Traveller/Itinerary";
import Selections from "./pages/Traveller/Selection";
import TravelGuide from "./pages/Traveller/TravelGuied";
import HotelDetails from "./pages/Traveller/Hotels";
import Hotel from "./pages/Traveller/HotelDetails";



function App() {
  

  return (
    <>
      
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mytrips" element={<Mytrips />} >
              
            </Route>
            <Route path="/trip-planner" element={<TripPlanner />} />
           
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/selections" element={<Selections />} />
            <Route path="/hire-guied" element={<TravelGuide  />} />
            <Route path="/hotels" element={<HotelDetails  />} />
            <Route path="/hotel-details" element={<Hotel  />} />
            
            {/* <Route path="/mytrips" element={<Mytrips />} /> */}
            {/* Add other routes here */}
          </Routes>

    </>
  );
}

export default App;

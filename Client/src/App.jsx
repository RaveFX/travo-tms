import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/main/home";
// import Travdash from "./pages/traveler/travdash";
import Community from "./pages/traveler/Community";
import AboutUs from "./pages/main/about";
import Services from "./pages/main/services";
import Contact from "./pages/main/contact";
import Budget from "./pages/traveler/budget";
import Store from "./pages/traveler/store";
import StoreProduct from "./pages/traveler/storeviewpd";
import Expenses from "./pages/traveler/expenses";
import GuideProfile from "./pages/guide/guideprofile";
import Travelbuddy from "./pages/traveler/travelbuddy";
import React from "react";
// import TabBar from "./components/web-component/TabBar";
// import Cardtrip from "./components/web-component/card";
// import BoxForm from "./components/web-component/BoxForm";
// import TopNavbarLanding from "./pages/web-component/Landingpg-Navbar";
import Dashboard from "./pages/traveler/Dashboard";
import Mytrips from "./pages/traveler/Mytrips";
import TripPlanner from "./pages/traveler/TripPlanner";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// import SwiperCard from "./pages/web-component/SwiperCard";
import Itinerary from "./pages/traveler/Itinerary";
import Selections from "./pages/traveler/Selection";
import TravelGuide from "./pages/traveler/TravelGuied";
import HotelDetails from "./pages/traveler/Hotels";
import Hotel from "./pages/traveler/HotelDetails";



export default function App() {
  

  return (
    <>
      
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/Travdash" element={<Travdash />} /> */}
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Budget" element={<Budget />} />
          <Route exact path="/Store" element={<Store />} />
          <Route exact path="/StoreProduct" element={<StoreProduct />} />
          <Route exact path="/Expenses" element={<Expenses />} />
          <Route exact path="/GuideProfile" element={<GuideProfile />} />
          <Route exact path="/Travelbuddy" element={<Travelbuddy />} />
        

      
      
          
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mytrips" element={<Mytrips />} />
            <Route path="/community" element={<Community />} />  
            
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

import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import Dashboard from "./pages/traveler/Dashboard";
import Mytrips from "./pages/traveler/Mytrips";
import TripPlanner from "./pages/traveler/TripPlanner";
import Itinerary from "./pages/traveler/Itinerary";
import Selections from "./pages/traveler/Selection";
import TravelGuide from "./pages/traveler/TravelGuied";
import HotelDetails from "./pages/traveler/Hotels";
import Hotel from "./pages/traveler/HotelDetails";
import Community from "./pages/traveler/Community";

export default function App() {
  return (
    <Routes>
      <Route path="/traveler/dashboard" element={<Dashboard />} />
      <Route path="/traveler/mytrips" element={<Mytrips />} />
      <Route path="/traveler/trip-planner" element={<TripPlanner />} />
      <Route path="/traveler/itinerary" element={<Itinerary />} />
      <Route path="/traveler/community" element={<Community />} />
      <Route path="/traveler/selections" element={<Selections />} />
      <Route path="/traveler/hire-guied" element={<TravelGuide />} />
      <Route path="/traveler/hotels" element={<HotelDetails />} />
      <Route path="/traveler/hotel-details" element={<Hotel />} />
    </Routes>
  );
}

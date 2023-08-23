import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/main/home";
import Travdash from "./pages/traveler/travdash";
import AboutUs from "./pages/main/about";
import Services from "./pages/main/services";
import Contact from "./pages/main/contact";
import Budget from "./pages/traveler/budget";
import Store from "./pages/traveler/store";
import StoreProduct from "./pages/traveler/storeviewpd";
import Expenses from "./pages/traveler/expenses";
import GuideProfile from "./pages/guide/guideprofile";
import Travelbuddy from "./pages/traveler/travelbuddy";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Travdash" element={<Travdash />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Budget" element={<Budget />} />
          <Route exact path="/Store" element={<Store />} />
          <Route exact path="/StoreProduct" element={<StoreProduct />} />
          <Route exact path="/Expenses" element={<Expenses />} />
          <Route exact path="/GuideProfile" element={<GuideProfile />} />
          <Route exact path="/Travelbuddy" element={<Travelbuddy />} />
        </Routes>
      </Router>

      <div className="bg-[#F6F8FA] w-full h-screen"></div>
    </>
  );
}

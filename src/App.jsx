import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Travdash from "./pages/travdash";
import AboutUs from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Budget from "./pages/budget";
import Store from "./pages/store";
import StoreProduct from "./pages/storeviewpd";
import Expenses from "./pages/expenses";
import GuideProfile from "./pages/guideprofile";

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
        </Routes>
      </Router>

      <div className="bg-[#F6F8FA] w-full h-screen"></div>
    </>
  );
}

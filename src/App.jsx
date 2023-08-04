import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landingPage";
import Travdash from "./pages/travdash";
import AboutUs from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Travdash" element={<Travdash />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>

      <div className="bg-[#F6F8FA] w-full h-screen"></div>
    </>
  );
}

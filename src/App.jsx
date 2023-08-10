import "@fontsource/poppins";
import Landing from "./components/landingPage";
import Signin from "./components/signin";
import Signup from "./components/signup";
import SignupChoice from "./components/signupChoice";
import ServiceProviders from "./components/serviceProviders";
import HotelRegister from "./components/hotelRegister";
import ActivityAgentRegister from "./components/activityAgentRegister";
import GuideRegister from "./components/guideRegister";
import StoreManagerRegister from "./components/storeManagerRegister";
import VehicleRenterRegister from "./components/vehicleRenterRegister";
import Hotel_dashboard from "./components/hotel_dashboard";
import Hotel_reviews from "./components/hotel_reviews";
import Hotel_reservations from "./components/hotel_reservations";
import Hotel_rooms from "./components/hotel_rooms";
import Hotel_reseravationDetails from "./components/hotel_reseravationDetails";
//import traveller_dashboard from "./components/traveller_dashboard";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
    
    <Routes>
    <Route exact path="/" element={<Landing/>}/>
    <Route exact path="/signin" element={<Signin/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/signup_as" element={<SignupChoice/>}/>
    <Route exact path="/service_providers" element={<ServiceProviders/>}/>
    <Route exact path="/hotel_register" element={<HotelRegister/>}/>
    <Route exact path="/activity_agent_register" element={<ActivityAgentRegister/>}/>
    <Route exact path="/guide_register" element={<GuideRegister/>}/>
    <Route exact path="/vehicle_renter_register" element={<VehicleRenterRegister/>}/>
    <Route exact path="/store_manager_register" element={<StoreManagerRegister/>}/>
    <Route exact path="/hotelagent_dashboard" element={<Hotel_dashboard/>}/>
    <Route exact path="/hotelagent_reviews" element={<Hotel_reviews/>}/>
    <Route exact path="/hotelagent_reservations" element={<Hotel_reservations/>}/>
    <Route exact path="/hotelagent_rooms" element={<Hotel_rooms/>}/>
    <Route exact path="/hotelagent_reservation_details" element={<Hotel_reseravationDetails/>}/>
    
 </Routes>
    </Router>

    <div className="bg-[#F6F8FA] w-full h-full"></div>
    </>
  );
}
import "@fontsource/poppins";
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";
import Landing from "./pages/main/landingPage";
import Signin from "./pages/main/signin";
import Signup from "./pages/main/signup";
import SignupChoice from "./pages/main/signupChoice";
import ServiceProviders from "./pages/main/serviceProviders";
import HotelRegister from "./pages/main/hotelRegister";
import ActivityAgentRegister from "./pages/main/activityAgentRegister";
import GuideRegister from "./pages/main/guideRegister";
import StoreManagerRegister from "./pages/main/storeManagerRegister";
import VehicleRenterRegister from "./pages/main/vehicleRenterRegister";
import Hotel_dashboard from "./pages/hotel/hotel_dashboard";
import Hotel_reviews from "./pages/hotel/hotel_reviews";
import Hotel_reservations from "./pages/hotel/hotel_reservations";
import Hotel_rooms from "./pages/hotel/hotel_rooms";
import Hotel_reseravationDetails from "./pages/hotel/hotel_reseravationDetails";
import Store_dashboard from "./pages/store/store_dashboard";
import Traveller_dashboard from "./pages/traveler/traveller_dashboard";
import Vehicle_dashboard from "./pages/vehicle_renter/vehicle_dashboard";
import Register_success from "./pages/main/register_success";
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
    <Route exact path="/traveler_dashboard" element={<Traveller_dashboard/>}/>
    <Route exact path="/store_dashboard" element={<Store_dashboard/>}/>
    <Route exact path="/vehicle_dashboard" element={<Vehicle_dashboard/>}/>
    <Route exact path="/register_success" element={<Register_success/>}/>
    
    
    
    

    <Route element={<PersistLogin/>}>
                   <Route element={<RequireAuth allowedRoles={["TRAVELLER"]}/>}>
                        {/* Routes Authorized to Admins */}
                        <Route exact path="/traveler_dashboard" element={<Traveller_dashboard/>}/>
                    </Route>
                    <Route element={<RequireAuth allowedRoles={["STORE_MANAGER"]}/>}>
                    {/* Routes Authorized to Admins */}
                    <Route exact path="/store_dashboard" element={<Store_dashboard/>}/>
                    </Route>
    
    
    
    </Route>
 </Routes>
    </Router>

    <div className="bg-[#F6F8FA] w-full h-full"></div>
    </>
  );
}
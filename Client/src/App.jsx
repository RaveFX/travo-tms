import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// Tharindi
import PersistLogin from "./components/main/PersistLogin";
import RequireAuth from "./components/main/RequireAuth";
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
import Register_success from "./pages/main/register_success";

// Thirani
import Store_Dashboard from "./pages/store/Dashboard"
import Store_Product from "./pages/store/Products"
import Store_Products_Add from "./pages/store/Productaddform"
import Store_Orders from "./pages/store/Orders"
import Store_Transaction from "./pages/store/Transaction"
import Store_Renting from "./pages/store/Renting"
import Store_Rating from "./pages/store/Rating"
import Store_Stock from './pages/store/Stockdetails'
import Store_Profile from './pages/store/profile'
import Store_Myshop from './pages/store/Myshop'

import Admin_Dashboard from "./pages/Admin/Admin_Dashboard"
import Admin_Users from "./pages/Admin/Admin_Users"
import Admin_Requests from "./pages/Admin/Admin_Requests"
import Admin_Userprofile from "./pages/Admin/Admin_Userprofile"
import Admin_Advertisments from "./pages/Admin/Admin_Advertisments"
import Admin_Add_dvertisments from "./pages/Admin/Admin_Addadverisments"
import Admin_Transaction from "./pages/Admin/Admin_Transaction"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Tharindi */}
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signup_as" element={<SignupChoice />} />
          <Route
            exact
            path="/service_providers"
            element={<ServiceProviders />}
          />
          <Route exact path="/hotel_register" element={<HotelRegister />} />
          <Route
            exact
            path="/activity_agent_register"
            element={<ActivityAgentRegister />}
          />
          <Route exact path="/guide_register" element={<GuideRegister />} />
          <Route
            exact
            path="/vehicle_renter_register"
            element={<VehicleRenterRegister />}
          />
          <Route
            exact
            path="/store_manager_register"
            element={<StoreManagerRegister />}
          />
          <Route
            exact
            path="/hotelagent_dashboard"
            element={<Hotel_dashboard />}
          />
          <Route exact path="/hotelagent_reviews" element={<Hotel_reviews />} />
          <Route
            exact
            path="/hotelagent_reservations"
            element={<Hotel_reservations />}
          />
          <Route exact path="/hotelagent_rooms" element={<Hotel_rooms />} />
          <Route
            exact
            path="/hotelagent_reservation_details"
            element={<Hotel_reseravationDetails />}
          />
          <Route exact path="/dashboard" element={<Travdash />} />
          <Route
            exact
            path="/register_success"
            element={<Register_success />}
          />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={["TRAVELLER"]} />}>
              {/* Routes Authorized to Admins */}
            </Route>
          </Route>
        </Routes>
      </Router>

      {/* Thirani */}
      <Route path='/admin_dashboard' element={<Admin_Dashboard />}> </Route>
      <Route path='/admin_users' element={<Admin_Users />}> </Route>
      <Route path="admin_requests" element={<Admin_Requests />} />
      <Route path="admin_userprofile" element={<Admin_Userprofile />} />
      <Route path="admin_advertisments" element={<Admin_Advertisments />} />
      <Route path="admin_add_advertisments" element={<Admin_Add_dvertisments />} />
      <Route path="admin_transaction" element={<Admin_Transaction />} />

      <Route path="store_dashboard" element={<Store_Dashboard />} />
      <Route path="store_myshop" element={<Store_Myshop />} />
      <Route path="store_product_addform" element={<Store_Products_Add />} />
      <Route path="store_product" element={<Store_Product />} />
      <Route path="store_order" element={<Store_Orders />} />
      <Route path="store_transaction" element={<Store_Transaction />} />
      <Route path="store_renting" element={<Store_Renting />} />
      <Route path="store_rating" element={<Store_Rating />} />
      <Route path="store_stock" element={<Store_Stock />} />
      <Route path="store_profile" element={<Store_Profile />} />

      <div className="bg-[#F6F8FA] w-full h-full"></div>
    </>
  );
}

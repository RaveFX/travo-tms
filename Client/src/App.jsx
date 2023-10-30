import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
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
import Store_Dashboard from "./pages/store/Dashboard";
import Store_Product from "./pages/store/Products";
import Store_Products_Add from "./pages/store/Productaddform";
import Store_Orders from "./pages/store/Orders";
import Store_Transaction from "./pages/store/Transaction";
import Store_Renting from "./pages/store/Renting";
import Store_Rating from "./pages/store/Rating";
import Store_Stock from "./pages/store/Stockdetails";
import Store_Profile from "./pages/store/profile";
import Store_Myshop from "./pages/store/Myshop";

import Admin_Dashboard from "./pages/Admin/Admin_Dashboard";
import Admin_Users from "./pages/Admin/Admin_Users";
import Admin_Requests from "./pages/Admin/Admin_Requests";
import Admin_Userprofile from "./pages/Admin/Admin_Userprofile";
import Admin_Advertisments from "./pages/Admin/Admin_Advertisments";
import Admin_Add_dvertisments from "./pages/Admin/Admin_Addadverisments";
import Admin_Transaction from "./pages/Admin/Admin_Transaction";

// Trineesha
import Travel_Guide_Dashboard from "./pages/Travel_Guide/travel_guide_dashboard";
import Travel_Guide_Mytours from "./pages/Travel_Guide/travel_guide_mytours";
import Travel_Guide_Myrates from "./pages/Travel_Guide/travel_guide_myrates";
import Travel_Guide_Mytours_More from "./pages/Travel_Guide/travel_guide_mytours_more";
import Travel_Guide_Request from "./pages/Travel_Guide/travel_guide_request";
import Travel_Guide_RequestMore from "./pages/Travel_Guide/travel_guide_requestMore";
import Travel_Guide_Invitation from "./pages/Travel_Guide/travel_guide_invitation";
import Travel_Guide_Rating from "./pages/Travel_Guide/travel_guide_rating";
import Travel_Guide_Confirmed from "./pages/Travel_Guide/travel_guide_confirmed";
import Travel_Guide_Profile from "./pages/Travel_Guide/travel_guide_profile";
import Travel_Guide_Edit_Profile from "./pages/Travel_Guide/travel_guide_edit_profile";
import Travel_Guide_Success from "./pages/Travel_Guide/travel_guide_success";

import Vehicle_Owner_Dashboard from "./pages/Vehicle_Owner/vehicle_owner_dashboard";
import Vehicle_Owner_Vehicles from "./pages/Vehicle_Owner/vehicle_owner_vehicles";
import Vehicle_Owner_Rates from "./pages/Vehicle_Owner/vehicle_owner_rates";
import Vehicle_Owner_Add_Vehicle from "./pages/Vehicle_Owner/vehicle_owner_add_vehicle";
import Vehicle_Owner_Add_Preview from "./pages/Vehicle_Owner/vehicle_owner_add_preview";
import Vehicle_Owner_Request from "./pages/Vehicle_Owner/vehicle_owner_request";
import Vehicle_Owner_RequestMore from "./pages/Vehicle_Owner/vehicle_owner_requestMore";
import Vehicle_Owner_Rating from "./pages/Vehicle_Owner/vehicle_owner_rating";
import Vehicle_Owner_Profile from "./pages/Vehicle_Owner/vehicle_owner_profile";
import Vehicle_Owner_Edit_Profile from "./pages/Vehicle_Owner/vehicle_owner_edit_profile";

// Sanduni
import TravelerDashboard from "./pages/traveler/Dashboard";
import Mytrips from "./pages/traveler/Mytrips";
import TripPlanner from "./pages/traveler/TripPlanner";
import Itinerary from "./pages/traveler/Itinerary";
import Selections from "./pages/traveler/Selection";
import TravelGuide from "./pages/traveler/TravelGuied";
import HotelDetails from "./pages/traveler/Hotels";
import Hotel from "./pages/traveler/HotelDetails";
import Community from "./pages/traveler/Community";

// RavinduJay
import Schedule from "./pages/activity_agent/Activity_Agent_Schedule";
import ScheduleDetails from "./pages/activity_agent/Activity_Agent_Schedule_Details";
import ReviewsDetails from "./pages/activity_agent/Reviews_Details";
import Profile from "./pages/activity_agent/Profile";
import EditProfile from "./pages/activity_agent/Edit_Profile";
import AddActivity from "./pages/activity_agent/Add_Activity";
import Dashboard from "./pages/activity_agent/Dashboard";
import ImageGrid from "./pages/activity_agent/Activity";
import Activity_Details from "./pages/activity_agent/Activity_Details";

// RavinduRave
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
      <Routes>
        {/* Tharindi */}
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signup_as" element={<SignupChoice />} />
        <Route exact path="/service_providers" element={<ServiceProviders />} />
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
        <Route exact path="/register_success" element={<Register_success />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["TRAVELLER"]} />}>
            {/* Routes Authorized to Admins */}
          </Route>
        </Route>

        {/* Thirani */}
        <Route path="/admin_dashboard" element={<Admin_Dashboard />} />
        <Route path="/admin_users" element={<Admin_Users />}>
          {" "}
        </Route>
        <Route path="admin_requests" element={<Admin_Requests />} />
        <Route path="admin_userprofile" element={<Admin_Userprofile />} />
        <Route path="admin_advertisments" element={<Admin_Advertisments />} />
        <Route
          path="admin_add_advertisments"
          element={<Admin_Add_dvertisments />}
        />
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

        {/* Trineesha */}
        <Route
          path="/travel_guide_dashboard"
          element={<Travel_Guide_Dashboard />}
        />
        <Route
          path="/travel_guide_request"
          element={<Travel_Guide_Request />}
        ></Route>
        <Route
          path="/travel_guide_mytours"
          element={<Travel_Guide_Mytours />}
        ></Route>
        <Route
          path="/travel_guide_myrates"
          element={<Travel_Guide_Myrates />}
        ></Route>
        <Route
          path="/travel_guide_mytours_more"
          element={<Travel_Guide_Mytours_More />}
        ></Route>
        <Route
          path="/travel_guide_invitation"
          element={<Travel_Guide_Invitation />}
        ></Route>
        <Route
          path="/travel_guide_rating"
          element={<Travel_Guide_Rating />}
        ></Route>
        <Route
          path="/travel_guide_request"
          element={<Travel_Guide_Request />}
        ></Route>
        <Route
          path="/travel_guide_requestMore"
          element={<Travel_Guide_RequestMore />}
        ></Route>
        <Route
          path="/travel_guide_confirmed"
          element={<Travel_Guide_Confirmed />}
        ></Route>
        <Route
          path="/travel_guide_profile"
          element={<Travel_Guide_Profile />}
        ></Route>
        <Route
          path="/travel_guide_edit_profile"
          element={<Travel_Guide_Edit_Profile />}
        ></Route>
        <Route
          path="/travel_guide_success"
          element={<Travel_Guide_Success />}
        ></Route>

        <Route
          path="/vehicle_owner_dashboard"
          element={<Vehicle_Owner_Dashboard />}
        >
          {" "}
        </Route>
        <Route
          path="/vehicle_owner_vehicles"
          element={<Vehicle_Owner_Vehicles />}
        >
          {" "}
        </Route>
        <Route path="/vehicle_owner_rates" element={<Vehicle_Owner_Rates />}>
          {" "}
        </Route>
        <Route
          path="/vehicle_owner_add_vehicle"
          element={<Vehicle_Owner_Add_Vehicle />}
        >
          {" "}
        </Route>
        <Route
          path="/vehicle_owner_add_preview"
          element={<Vehicle_Owner_Add_Preview />}
        >
          {" "}
        </Route>
        <Route
          path="/vehicle_owner_request"
          element={<Vehicle_Owner_Request />}
        >
          {" "}
        </Route>
        <Route
          path="/vehicle_owner_requestMore"
          element={<Vehicle_Owner_RequestMore />}
        ></Route>
        <Route path="/vehicle_owner_rating" element={<Vehicle_Owner_Rating />}>
          {" "}
        </Route>
        <Route
          path="/vehicle_owner_profile"
          element={<Vehicle_Owner_Profile />}
        ></Route>
        <Route
          path="/vehicle_owner_edit_profile"
          element={<Vehicle_Owner_Edit_Profile />}
        ></Route>

        {/* Sanduni */}
        <Route path="/traveler/dashboard" element={<TravelerDashboard />} />
        <Route path="/traveler/mytrips" element={<Mytrips />} />
        <Route path="/traveler/trip-planner" element={<TripPlanner />} />
        <Route path="/traveler/itinerary" element={<Itinerary />} />
        <Route path="/traveler/community" element={<Community />} />
        <Route path="/traveler/selections" element={<Selections />} />
        <Route path="/traveler/hire-guied" element={<TravelGuide />} />
        <Route path="/traveler/hotels" element={<HotelDetails />} />
        <Route path="/traveler/hotel-details" element={<Hotel />} />

        {/* RavinduJay */}
        <Route exact path="/agent_dashboard" element={<Dashboard />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/schedule/details" element={<ScheduleDetails />} />
        <Route exact path="/reviews" element={<ReviewsDetails />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/edit_profile" element={<EditProfile />} />
        <Route exact path="/activities" element={<ImageGrid />} />
        <Route
          exact
          path="/activities/view_activity"
          element={<Activity_Details />}
        />
        <Route
          exact
          path="/activities/add_activity"
          element={<AddActivity />}
        />

        {/* RavinduRave */}
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

      <div className="bg-[#F6F8FA] w-full h-full"></div>
    </>
  );
}

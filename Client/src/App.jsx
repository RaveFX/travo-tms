import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// Tharindi
import PersistLogin from "./components/main/PersistLogin";
import RequireAuth from "./components/main/RequireAuth";
import Signin from "./pages/main/signin";
import Signup from "./pages/main/signup";
import SignupChoice from "./pages/main/signupChoice";
import BecomeServiceProvider from "./pages/main/ServiceProvider";
import ServiceProviders from "./pages/main/serviceProviders";
import HotelRegister from "./pages/main/hotelRegister";
import ActivityAgentRegister from "./pages/main/activityAgentRegister";
import GuideRegister from "./pages/main/guideRegister";
import StoreManagerRegister from "./pages/main/storeManagerRegister";
import VehicleRenterRegister from "./pages/main/vehicleRenterRegister";
import Addtripsignin from "./pages/main/addtripsignin";
import Addtripsignup from "./pages/main/addtripsignup";

import Hotel_dashboard from "./pages/hotel/hotel_dashboard";
import Hotel_reviews from "./pages/hotel/hotel_reviews";
import Hotel_reservations from "./pages/hotel/hotel_reservations";
import Hotel_rooms from "./pages/hotel/hotel_rooms";
import Hotel_reseravationDetails from "./pages/hotel/hotel_reseravationDetails";
import Register_success from "./pages/main/register_success";
import Hotel_transactions from "./pages/hotel/hotel_transactions";
import Hotel_addRooms from "./pages/hotel/hotel_addRooms";
import Hotel_editRooms from "./pages/hotel/hotel_editRooms";
import Hotel_advertisments from "./pages/hotel/hotel_advertisments";
import Hotel_roomDetails from "./pages/hotel/hotel_roomDetails";
import Attractions from "./pages/traveler/Attractions";
import Destinations from "./pages/traveler/Destinations";
import Activities from "./pages/traveler/Activities";

import PollAttractions from "./pages/traveler/pollAttractions";
import PollActivities from "./pages/traveler/PollActivities";
// import PollHotels from "./pages/traveler/PollHotels";


import MainActivities from "./pages/traveler/MainActivities";
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
import Admin_userlistpage from "./pages/Admin/Admin_userlistpage"

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

import TravelGuideList from "./pages/traveler/TravelGuide";

// Sanduni
import TravelerDashboard from "./pages/traveler/Dashboard";
import Mytrips from "./pages/traveler/Mytrips";
import TripPlanner from "./pages/traveler/TripPlanner";
import Itinerary from "./pages/traveler/Itinerary";
import Selections from "./pages/traveler/Selection";
import TravelGuide from "./pages/traveler/TravelGuide";
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


import DestinationPage from "./pages/traveler/DestinationPage";
import ActivityPage from "./pages/traveler/ActivityPage";
import HotelPage from "./pages/traveler/HotelPage";
import HotelType from "./pages/traveler/HotelType";
import HotelPageMore from "./pages/traveler/HotelPageMore";
import HotelPayment from "./pages/traveler/HotelPayment";
import PaymentSuccess from "./pages/traveler/PaymentSuccess";
import HotelBook from "./pages/traveler/HotelBook";
import VehiclePage from "./pages/traveler/VehiclePage";
import VehicleMoreInfo from "./pages/traveler/VehicleMoreInfo";

import ActivityType from "./pages/traveler/ActivityType";
import TicketBook from "./pages/traveler/TicketBook";


import TripHotelPage from "./pages/traveler/TripHotelPage";
import TripHotelType from "./pages/traveler/TripHotelType";
import TripHotelPageMore from "./pages/traveler/TripHotelPageMore";
import TripHotelBook from "./pages/traveler/TripHotelBook";






import Travelbuddy from "./pages/traveler/travelbuddy";
import TripAddButton from "./pages/traveler/TripAddButtonPage";
import Hotelselectionpage from "./pages/traveler/Hotelselectionpage";

import PrivateRoute from "./pages/main/PrivateRoute";

export default function App() {

  const isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));




  return (
    <>
      <Routes>
        {/* Tharindi */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/addtripsignin/:pathTripId" element={<Addtripsignin />} />
        <Route exact path="/addtripsignup/:pathTripId" element={<Addtripsignup />} />
        <Route exact path="/signup_as" element={<SignupChoice />} />
        <Route exact path="/service_providers" element={<BecomeServiceProvider />} />
        <Route exact path="/service_provider" element={<ServiceProviders />} />
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
        <Route exact path="/hotelagent_transactions" element={<Hotel_transactions />} />
        <Route exact path="/hotelagent_advertisments" element={<Hotel_advertisments />} />
        <Route exact path="/hotelagent_add_room" element={<Hotel_addRooms />} />
        <Route exact path="/hotelagent_edit_room" element={<Hotel_editRooms />} />
        <Route exact path="/hotelagent_room_details" element={<Hotel_roomDetails />} />
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
        <Route path="admin_users" element={<Admin_Users />} />
        <Route path="admin_requests" element={<Admin_Requests />} />
        <Route path="admin_userprofile" element={<Admin_Userprofile />} />
        <Route path="admin_advertisments" element={<Admin_Advertisments />} />
        <Route path="admin_add_advertisments" element={<Admin_Add_dvertisments />} />
        <Route path="admin_transaction" element={<Admin_Transaction />} />
        <Route path="admin_userlistpage" element={<Admin_userlistpage />}></Route>

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

        {/* Sanduni
      <Route path="/traveler/trip-planner/:tripId" element={<TripPlanner />} /> */}
        <Route path="/traveler/dashboard" element={<TravelerDashboard />} />
        <Route path="/traveler/mytrips" element={<Mytrips />} />
        <Route path="/traveler/trip-planner/:id" element={<TripPlanner />} />

        <Route path="/traveler/itinerary" element={<Itinerary />} />
        <Route path="/traveler/community" element={<Community />} />
        <Route path="/traveler/selections" element={<Selections />} />
        <Route path="/traveler/hire-guied" element={<TravelGuide />} />



        <Route path="/traveler/hotels/:id/:day" element={<HotelDetails />} />
        <Route path="/traveler/hotel-details" element={<Hotel />} />
        <Route path="travo/text/:tripnumber/:tripuniqueLink" element={<TripAddButton />} />
        <Route path="/traveler/Hotelselectionpage" element={<Hotelselectionpage />} />
        <Route path="/traveler/attractionspoll/:id/:day" element={<PollAttractions />} />
        <Route path="/traveler/activitiespoll/:id/:day" element={<PollActivities />} />
        {/* <Route path="/traveler/hotelpoll/:id/:day" element={<PollHotels />} /> */}



        {/* Tharindi */}
        <Route path="/traveler/attractions/:id/:day" element={<Attractions />} />
        <Route path="/traveler/destinations/:id/:day" element={<Destinations />} />
        <Route path="/traveler/activities/:id/:day" element={<Activities />} />
        <Route path="/traveler/mainactivities/:id/:day" element={<MainActivities />} />

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
          path="/activities/add_activity"
          element={<AddActivity />}
        />

        {/* RavinduRave */}
        <Route exact path="/Travdash" element={<Travdash />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Budget" element={<Budget />} />
        <Route exact path="/Store" element={<Store />} />
        <Route exact path="/StoreProduct" element={<StoreProduct />} />
        <Route exact path="/Expenses" element={<Expenses />} />
        <Route exact path="/GuideProfile" element={<GuideProfile />} />


        {/* Trineesha */}
        <Route exact path="/traveler/DestinationPage" element={<DestinationPage />} />
        <Route exact path="/traveler/ActivityPage" element={<ActivityPage/>} />
        <Route exact path="/traveler/HotelPage/:user_id" element={<HotelPage />} />
        <Route exact path="/traveler/HotelType/:user_id/:hotelID" element={<HotelType />} />
        <Route exact path="/traveler/HotelPageMore/:user_id/:hotelID/:roomId" element={<HotelPageMore />} />
        <Route exact path="/traveler/HotelBook/:user_id/:hotelID/:roomId" element={<HotelBook />} />
        <Route exact path="/traveler/HotelPayment" element={<HotelPayment />} />
        <Route exact path="/traveler/PaymentSuccess" element={<PaymentSuccess />} />
        <Route exact path="/traveler/VehiclePage" element={<VehiclePage />} />
        <Route exact path="/traveler/VehicleMoreInfo/:vehicleId" element={<VehicleMoreInfo />} />
        <Route exact path="/Travelbuddy" element={<Travelbuddy />} />
        <Route exact path="/traveler/travelGuide" element={<TravelGuideList />} />

        <Route exact path="/traveler/ActivityType/:user_id/:ActivityId" element={<ActivityType />} />
        <Route exact path="/traveler/TicketBook/:user_id/:ActivityId/:eventId" element={<TicketBook />} />


        <Route exact path="/traveler/TripHotelPage/:user_id/:tripId" element={<TripHotelPage />} />
        <Route exact path="/traveler/TripHotelType/:user_id/:tripId/:hotelID" element={<TripHotelType />} />
        <Route exact path="/traveler/TripHotelPageMore/:user_id/:tripId/:hotelID/:roomId" element={<TripHotelPageMore />} />
        <Route exact path="/traveler/TripHotelBook/:user_id/:tripId/:hotelID/:roomId" element={<TripHotelBook />} />





      </Routes>

      <div className="bg-[#F6F8FA] w-full h-full"></div>
    </>
  );
}

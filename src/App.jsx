import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Schedule from "./pages/Activity_Agent_Schedule";
import ScheduleDetails from "./pages/Activity_Agent_Schedule_Details";
import ReviewsDetails from "./pages/Reviews_Details";
import Profile from "./pages/Profile";
import EditProfile from "./pages/Edit_Profile";
import Calendar from "./components/calendar";
import Activityadd from "./components/addActivity";
import AddActivity from "./pages/Add_Activity";

export default function App() {
  return (
    <>
    {/* <Calendar />
    <Activityadd /> */}
      <Router>
        <Routes>
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/schedule/details" element={<ScheduleDetails />} />
          <Route exact path="/reviews" element={<ReviewsDetails />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profile/edit_profile" element={<EditProfile />} />
          <Route exact path="/activities" element={<AddActivity />} />
        </Routes>
      </Router>

      
    </>
  );
}
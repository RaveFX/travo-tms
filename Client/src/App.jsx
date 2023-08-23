import "@fontsource/poppins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Schedule from "./pages/activity_agent/Activity_Agent_Schedule";
import ScheduleDetails from "./pages/activity_agent/Activity_Agent_Schedule_Details";
import ReviewsDetails from "./pages/activity_agent/Reviews_Details";
import Profile from "./pages/activity_agent/Profile";
import EditProfile from "./pages/activity_agent/Edit_Profile";
import AddActivity from "./pages/activity_agent/Add_Activity";
import Dashboard from "./pages/activity_agent/Dashboard";
import ImageGrid from "./pages/activity_agent/Activity";

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/schedule/details" element={<ScheduleDetails />} />
          <Route exact path="/reviews" element={<ReviewsDetails />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profile/edit_profile" element={<EditProfile />} />
          <Route exact path="/activities" element={<ImageGrid />} />
          <Route exact path="/activities/add_activity" element={<AddActivity />} />
        </Routes>
      </Router>

      
    </>
  );
}
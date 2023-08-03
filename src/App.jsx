import "@fontsource/poppins";
// import NavBar from "./components/navbar";
import Newnav from "./components/newnav";
import Landing from "./components/landingPage";
import Signin from "./components/signin";
import Signup from "./components/signup";
import signupChoice from "./components/signupChoice";
import serviceProviders from "./components/serviceProviders";
//import traveller_dashboard from "./components/traveller_dashboard";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
    <Newnav />
    <Routes>
    <Route exact path="/" element={<Landing/>}/>
    <Route exact path="/signin" element={<Signin/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/signupAs" element={<signupChoice/>}/>
    <Route exact path="/serviceProviders" element={<serviceProviders/>}/>
 </Routes>
    </Router>

      <div className="bg-[#F6F8FA] w-full h-full"></div>
    </>
  );
}
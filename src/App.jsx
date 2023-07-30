import "@fontsource/poppins";
// import NavBar from "./components/navbar";
import Newnav from "./components/newnav";
//import Landing from "./components/landingPage";
import Signin from "./components/signin";
//import signup from "./components/signup";
//import SideBar fsdfsrom './components/sidebar';

export default function App() {
  return (
    <>
      <Newnav />
      <Signin />

      <div className="bg-[#F6F8FA] w-full h-screen"></div>
    </>
  );
}
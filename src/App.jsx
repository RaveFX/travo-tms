import "@fontsource/poppins";
// import NavBar from "./components/navbar";
import Newnav from "./components/newnav";
import Landing from "./components/landingPage";
// import Footer from "./components/footer";
// import CardList from "./components/cards";
//import SideBar fsdfsrom './components/sidebar';

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Newnav />
      <Landing />

      <div className="bg-[#F6F8FA] w-full h-screen"></div>
    </>
  );
}

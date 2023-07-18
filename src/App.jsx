import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
import SideBar from './components/sidebar';
import TopNavbar from './components/topNavbar';
import DashboardTG from './components/dashboardTG';

export default function App() {
  return (
    <>
      {/* <NavBar/>
    <Landing/>
    <CardList/> */}
      {/* <TopNavbar/> */}
      {/* <Searchbar/> */}
      {/* <SideBar/> */}
      {/* <div className="bg-indigo-500 w-full h-screen"></div> */}
      <div class="flex">
  <div className=" ">
    <SideBar />
  </div>
  <div className=" flex flex-grow flex-col">
    <div>
      <TopNavbar />
    </div>
    <div >
      <DashboardTG />
    </div>
  </div>
</div>

    </>
  )
}

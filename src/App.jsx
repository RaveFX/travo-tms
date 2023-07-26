import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
import SideBar from './components/sidebar';
import Tables from './components/table';
<<<<<<< Updated upstream
import Schedule from './components/schedule';
=======
import TopNavbar from './components/topNavbar';
>>>>>>> Stashed changes
//import SideBar from './components/sidebar';

export default function App() {
  return (
    <>
    <NavBar/>
    
    <Tables/>
<<<<<<< Updated upstream
    <Schedule/>
=======
    <TopNavbar/>
>>>>>>> Stashed changes
    {/* <SideBar/> */}
    <div className="bg-indigo-500 w-full h-screen"></div>
    </>
  )
}
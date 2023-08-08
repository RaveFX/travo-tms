import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
import SideBar from './components/sidebar';
import Tables from './components/table';
import Schedule from './components/schedule';
import TopNavbar from './components/topNavbar';
import Rating from './components/rating';

export default function App() {
  return (
    <>
    <NavBar/>
    <Rating/>
    <Tables/>
    <Schedule/>
    <TopNavbar/>
    <SideBar/>
    <div className="bg-indigo-500 w-full h-screen"></div>
    </>
  )
}
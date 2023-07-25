import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
import SideBar from './components/sidebar';
import Tables from './components/table';
import Schedule from './components/schedule';
//import SideBar from './components/sidebar';

export default function App() {
  return (
    <>
    <NavBar/>
    
    <Tables/>
    <Schedule/>
    {/* <SideBar/> */}
    <div className="bg-indigo-500 w-full h-screen"></div>
    </>
  )
}
import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
//import SideBar fsdfsrom './components/sidebar';

export default function App() {
  return (
    <>
    <NavBar/>
    <Landing/>
    <CardList/>
    {/* <SideBar/> */}
    <div className="bg-indigo-500 w-full h-screen"></div>
    </>
  )
}
import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
//import SideBar from './components/sidebar';

export default function App() {
  return (
    <>
      <div >
        <NavBar />
        {/* <Landing /> */}
        <h1>Traveling bags</h1>
        <CardList />
        <h1>Cameras</h1>
        <CardList />
        {/* <SideBar/> */}
      </div>
    </>
  )
}
import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
import SideBar from './components/sidebar';
import TopNavbar from './components/topNavbar';
import DashboardTG from './components/dashboardTG';
import Request from './components/request';
import RequestMore from './components/requestMore';
import Tables from './components/tabels';
import Invitation from './components/invitation';
import Rating from './components/rating';
import Confirmed from './components/confirmed';
import Profile from './components/profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* <NavBar/>
    <Landing/>
    <CardList/> 
      <TopNavbar/>
      <Searchbar/>
      <SideBar/>
       <div className="bg-indigo-500 w-full h-screen"></div> */}


      <BrowserRouter>
<Routes>
  <Route path='/' element={<DashboardTG/>}> </Route>
  <Route path='/request' element={<Request/>}></Route>
  <Route path='/invitation' element={<Invitation/>}></Route>
  <Route path='/rating' element={<Rating/>}></Route>
  <Route path='/request' element={<Request/>}></Route>
  <Route path='/requestMore' element={<RequestMore/>}></Route>
  <Route path='/confirmed' element={<Confirmed/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>

</Routes>
</BrowserRouter>

   

    </>
  )
}

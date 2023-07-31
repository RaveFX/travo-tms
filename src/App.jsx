import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
import SideBar from './components/sidebar';
import TopNavbar from './components/topNavbar';
<<<<<<< Updated upstream
import Travel_Guide_Dashboard from './components/travel_guide_dashboard';

import Travel_Guide_Request from './components/travel_guide_request';
import Travel_Guide_RequestMore from './components/travel_guide_requestMore';
=======
import DashboardTG from './components/dashboardTG';
import Request from './components/request';
import RequestMore from './components/requestMore';
>>>>>>> Stashed changes
import Tables from './components/tabels';
import Travel_Guide_Invitation from './components/travel_guide_invitation';
import Travel_Guide_Rating from './components/travel_guide_rating';
import Travel_Guide_Confirmed from './components/travel_guide_confirmed';
import Profile from './components/profile';

import Vehicle_Owner_Dashboard from './components/vehicle_owner_dashboard';

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
<<<<<<< Updated upstream
  <Route path='/' element={<Travel_Guide_Dashboard/>}> </Route>
  <Route path='/travel_guide_request' element={<Travel_Guide_Request/>}></Route>
  <Route path='/travel_guide_invitation' element={<Travel_Guide_Invitation/>}></Route>
  <Route path='/travel_guide_rating' element={<Travel_Guide_Rating/>}></Route>
  <Route path='/travel_guide_request' element={<Travel_Guide_Request/>}></Route>
  <Route path='/travel_guide_requestMore' element={<Travel_Guide_RequestMore/>}></Route>
  <Route path='/travel_guide_confirmed' element={<Travel_Guide_Confirmed/>}></Route>
  <Route path='/rofile' element={<Profile/>}></Route>
  <Route path='/vehicle_owner_dashboard' element={<Vehicle_Owner_Dashboard/>}> </Route>
=======
  <Route path='/' element={<DashboardTG/>}> </Route>
  <Route path='/request' element={<Request/>}></Route>
  <Route path='/invitation' element={<Invitation/>}></Route>
  <Route path='/rating' element={<Rating/>}></Route>
  <Route path='/request' element={<Request/>}></Route>
  <Route path='/requestMore' element={<RequestMore/>}></Route>
>>>>>>> Stashed changes

</Routes>
</BrowserRouter>

   

    </>
  )
}

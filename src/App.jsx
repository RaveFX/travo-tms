import '@fontsource/poppins';
import NavBar from './components/navbar';
import Landing from './components/landingPage';
import CardList from './components/cards';
import SideBar from './components/sidebar';
import TopNavbar from './components/topNavbar';
import Travel_Guide_Dashboard from './components/travel_guide_dashboard';
import Travel_Guide_Mytours from './components/travel_guide_mytours';
import Travel_Guide_Myrates from './components/travel_guide_myrates';
import Travel_Guide_Mytours_More from './components/travel_guide_mytours_more';
import Travel_Guide_Request from './components/travel_guide_request';
import Travel_Guide_RequestMore from './components/travel_guide_requestMore';
import Tables from './components/tabels';
import Travel_Guide_Invitation from './components/travel_guide_invitation';
import Travel_Guide_Rating from './components/travel_guide_rating';
import Travel_Guide_Confirmed from './components/travel_guide_confirmed';
import Profile from './components/profile';

import Vehicle_Owner_Dashboard from './components/vehicle_owner_dashboard';
import Vehicle_Owner_Vehicles from './components/vehicle_owner_vehicles';
import Vehicle_Owner_Rates from './components/vehicle_owner_rates';
import Vehicle_Owner_Add_Vehicle from './components/vehicle_owner_add_vehicle';
import Vehicle_Owner_Add_Preview from './components/vehicle_owner_add_preview';
import Vehicle_Owner_Request from './components/vehicle_owner_request';
import Vehicle_Owner_Rating from './components/vehicle_owner_rating';
import 'boxicons';

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
  
  <Route path='/' element={<Travel_Guide_Dashboard/>}> </Route>
  <Route path='/travel_guide_request' element={<Travel_Guide_Request/>}></Route>
  <Route path='/travel_guide_mytours' element={<Travel_Guide_Mytours/>}></Route>
  <Route path='/travel_guide_myrates' element={<Travel_Guide_Myrates/>}></Route>
  <Route path='/travel_guide_mytours_more' element={<Travel_Guide_Mytours_More/>}></Route>
  <Route path='/travel_guide_invitation' element={<Travel_Guide_Invitation/>}></Route>
  <Route path='/travel_guide_rating' element={<Travel_Guide_Rating/>}></Route>
  <Route path='/travel_guide_request' element={<Travel_Guide_Request/>}></Route>
  <Route path='/travel_guide_requestMore' element={<Travel_Guide_RequestMore/>}></Route>
  <Route path='/travel_guide_confirmed' element={<Travel_Guide_Confirmed/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/vehicle_owner_dashboard' element={<Vehicle_Owner_Dashboard/>}> </Route>
  <Route path='/vehicle_owner_vehicles' element={<Vehicle_Owner_Vehicles/>}> </Route>
  <Route path='/vehicle_owner_rates' element={<Vehicle_Owner_Rates/>}> </Route>
  <Route path='/vehicle_owner_add_vehicle' element={<Vehicle_Owner_Add_Vehicle/>}> </Route>
  <Route path='/vehicle_owner_add_preview' element={<Vehicle_Owner_Add_Preview/>}> </Route>
  <Route path='/vehicle_owner_request' element={<Vehicle_Owner_Request/>}> </Route>
  <Route path='/vehicle_owner_rating' element={<Vehicle_Owner_Rating/>}> </Route>
  
</Routes>
</BrowserRouter>

   

    </>
  )
}

import '@fontsource/poppins';
// import NavBar from './components/navbar';
// import Landing from './components/landingPage';
// import CardList from './components/cards';
// import SideBar from './components/sidebar';
// import SideBar1 from './components/sidebar1';
// import TopNavbar from './components/topNavbar';
import Travel_Guide_Dashboard from './pages/Travel_Guide/travel_guide_dashboard';
import Travel_Guide_Mytours from './pages/Travel_Guide/travel_guide_mytours';
import Travel_Guide_Myrates from './pages/Travel_Guide/travel_guide_myrates';
import Travel_Guide_Mytours_More from './pages/Travel_Guide/travel_guide_mytours_more';
import Travel_Guide_Request from './pages/Travel_Guide/travel_guide_request';
import Travel_Guide_RequestMore from './pages/Travel_Guide/travel_guide_requestMore';
// import Tables from './pages/Travel_Guide/tabels';
import Travel_Guide_Invitation from './pages/Travel_Guide/travel_guide_invitation';
import Travel_Guide_Rating from './pages/Travel_Guide/travel_guide_rating';
import Travel_Guide_Confirmed from './pages/Travel_Guide/travel_guide_confirmed';
import Travel_Guide_Profile from './pages/Travel_Guide/travel_guide_profile';
import Travel_Guide_Edit_Profile from './pages/Travel_Guide/travel_guide_edit_profile';
import Profile from './components/Travel_guide/profile';

import Vehicle_Owner_Dashboard from './pages/Vehicle_Owner/vehicle_owner_dashboard';
import Vehicle_Owner_Vehicles from './pages/Vehicle_Owner/vehicle_owner_vehicles';
import Vehicle_Owner_Rates from './pages/Vehicle_Owner/vehicle_owner_rates';
import Vehicle_Owner_Add_Vehicle from './pages/Vehicle_Owner/vehicle_owner_add_vehicle';
import Vehicle_Owner_Add_Preview from './pages/Vehicle_Owner/vehicle_owner_add_preview';
import Vehicle_Owner_Request from './pages/Vehicle_Owner/vehicle_owner_request';
import Vehicle_Owner_RequestMore from './pages/Vehicle_Owner/vehicle_owner_requestMore';
import Vehicle_Owner_Rating from './pages/Vehicle_Owner/vehicle_owner_rating';
import Vehicle_Owner_Profile from './pages/Vehicle_Owner/vehicle_owner_profile';
import Vehicle_Owner_Edit_Profile from './pages/Vehicle_Owner/vehicle_owner_edit_profile';
import 'boxicons';


import Travel_Guide_Success from './pages/Travel_Guide/travel_guide_success';



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
  <Route path='/travel_guide_profile' element={<Travel_Guide_Profile/>}></Route>
  <Route path='/travel_guide_edit_profile' element={<Travel_Guide_Edit_Profile/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/vehicle_owner_dashboard' element={<Vehicle_Owner_Dashboard/>}> </Route>
  <Route path='/vehicle_owner_vehicles' element={<Vehicle_Owner_Vehicles/>}> </Route>
  <Route path='/vehicle_owner_rates' element={<Vehicle_Owner_Rates/>}> </Route>
  <Route path='/vehicle_owner_add_vehicle' element={<Vehicle_Owner_Add_Vehicle/>}> </Route>
  <Route path='/vehicle_owner_add_preview' element={<Vehicle_Owner_Add_Preview/>}> </Route>
  <Route path='/vehicle_owner_request' element={<Vehicle_Owner_Request/>}> </Route>
  <Route path='/vehicle_owner_requestMore' element={<Vehicle_Owner_RequestMore/>}></Route>
  <Route path='/vehicle_owner_rating' element={<Vehicle_Owner_Rating/>}> </Route>
  <Route path='/vehicle_owner_profile' element={<Vehicle_Owner_Profile/>}></Route>
  <Route path='/vehicle_owner_edit_profile' element={<Vehicle_Owner_Edit_Profile/>}></Route>

  <Route path='/travel_guide_success' element={<Travel_Guide_Success/>}></Route>

  
</Routes>
</BrowserRouter>

   

    </>
  )
}

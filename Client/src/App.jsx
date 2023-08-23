import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Store_Dashboard from "./pages/store/Dashboard"
import Store_Product from "./pages/store/Products"
import Store_Products_Add from "./pages/store/Productaddform"
import Store_Orders from "./pages/store/Orders"
import Store_Transaction from "./pages/store/Transaction"
import Store_Renting from "./pages/store/Renting"
import Store_Rating from "./pages/store/Rating"
import Store_Stock from './pages/store/Stockdetails'
import Store_Profile from './pages/store/profile'
import Store_Myshop from './pages/store/Myshop'

import Admin_Dashboard from "./pages/Admin/Admin_Dashboard"
import Admin_Users from "./pages/Admin/Admin_Users"
import Admin_Requests from "./pages/Admin/Admin_Requests"
import Admin_Userprofile from "./pages/Admin/Admin_Userprofile"
import Admin_Advertisments from "./pages/Admin/Admin_Advertisments"
import Admin_Add_dvertisments from "./pages/Admin/Admin_Addadverisments"
import Admin_Transaction from "./pages/Admin/Admin_Transaction"

import Landing from './components/landingPage';


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}> </Route>

        <Route path='/admin_dashboard' element={<Admin_Dashboard />}> </Route>
        <Route path='/admin_users' element={<Admin_Users />}> </Route>
        <Route path="admin_requests" element={<Admin_Requests />} />
        <Route path="admin_userprofile" element={<Admin_Userprofile />} />
        <Route path="admin_advertisments" element={<Admin_Advertisments />} />
        <Route path="admin_add_advertisments" element={<Admin_Add_dvertisments />} />
        <Route path="admin_transaction" element={<Admin_Transaction />} />

        <Route path="store_dashboard" element={<Store_Dashboard />} />
        <Route path="store_myshop" element={<Store_Myshop />} />
        <Route path="store_product_addform" element={<Store_Products_Add />} />
        <Route path="store_product" element={<Store_Product />} />
        <Route path="store_order" element={<Store_Orders />} />
        <Route path="store_transaction" element={<Store_Transaction />} />
        <Route path="store_renting" element={<Store_Renting />} />
        <Route path="store_rating" element={<Store_Rating />} />
        <Route path="store_stock" element={<Store_Stock />} />
        <Route path="store_profile" element={<Store_Profile />} />



      </Routes>
    </BrowserRouter>
  )
}



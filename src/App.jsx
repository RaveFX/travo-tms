


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/shared/layout"
import Dashboard from "./pages/Store_manager/Dashboard"
import Products from "./pages/Store_manager/Products"
import Orders from "./pages/Store_manager/Orders"
import Transaction from "./pages/Store_manager/Transaction"
import Renting from "./pages/Store_manager/Renting"
import Rating from "./pages/Store_manager/Rating"
import Productadd from './components/Productaddform'
import Product_card from './components/product_card'
import Stock from './pages/Store_manager/Stockdetails'



import Admin_Layout from "./components/shared/Admin_layout"
import Admin_Dashboard from "./pages/Admin/Admin_Dashboard"
import Admin_Users from "./pages/Admin/Admin_Users"
import Admin_Requests from "./pages/Admin/Admin_Requests"
import Admin_Userprofile from "./pages/Admin/Admin_Userprofile"
import Admin_Advertisments from "./pages/Admin/Admin_Advertisments"
import Admin_Add_dvertisments from "./pages/Admin/Admin_Addadverisments"
import Admin_Transaction from "./pages/Admin/Admin_Transaction"


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="transaction" element={<Transaction />} />
                    <Route path="renting" element={<Renting />} />
                    <Route path="rating" element={<Rating />} />
                    <Route path="productadd" element={<Productadd />} />
                    <Route path="product_card" element={<Product_card />} />
                    <Route path="stock" element={<Stock />} />
                </Route>
                <Route path="/admin" element={<Admin_Layout />}>
                    <Route index element={<Admin_Dashboard />} />
                    <Route path="admin_users" element={<Admin_Users />} />
                    <Route path="admin_requests" element={<Admin_Requests />} />
                    <Route path="admin_userprofile" element={<Admin_Userprofile />} />
                    <Route path="admin_advertisments" element={<Admin_Advertisments />} />
                    <Route path="admin_add_advertisments" element={<Admin_Add_dvertisments />} />
                    <Route path="admin_transaction" element={<Admin_Transaction />} />
                </Route>
            </Routes>
        </Router>
    )
}

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Admin_Layout from "./components/shared/Admin_layout"
// import Admin_Dashboard from "./pages/Admin/Admin_Dashboard"
// import Users from "./pages/Admin/Admin_Users"
// import Requests from "./pages/Admin/Admin_Requests"
// import Userprofile from "./pages/Admin/Admin_Userprofile"
// import Advertisments from "./pages/Admin/Admin_Advertisments"
// import Add_dvertisments from "./pages/Admin/Admin_Addadverisments"
// import Transaction from "./pages/Admin/Admin_Transaction"


// export default function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Admin_Layout />}>
                    // <Route index element={<Admin_Dashboard />} />
                    // <Route path="admin_users" element={<Users />} />
                    // <Route path="admin_requests" element={<Requests />} />
                    // <Route path="admin_userprofile" element={<Userprofile />} />
                    // <Route path="admin_advertisments" element={<Advertisments />} />
                    // <Route path="admin_add_advertisments" element={<Add_dvertisments />} />
                    // <Route path="admin_transaction" element={<Transaction />} />
//                 </Route>
//             </Routes>
//         </Router>
//     )
// }

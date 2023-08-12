


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Layout from "./components/shared/layout"
// import Dashboard from "./pages/Store_manager/Dashboard"
// import Products from "./pages/Store_manager/Products"
// import Orders from "./pages/Store_manager/Orders"
// import Transaction from "./pages/Store_manager/Transaction"
// import Renting from "./pages/Store_manager/Renting"
// import Rating from "./pages/Store_manager/Rating"
// import Productadd from './components/Productaddform'
// import Product_card from './components/product_card'
// import Stock from './pages/Store_manager/Stockdetails'


// export default function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Dashboard />} />
//                     <Route path="products" element={<Products />} />
//                     <Route path="orders" element={<Orders />} />
//                     <Route path="transaction" element={<Transaction />} />
//                     <Route path="renting" element={<Renting />} />
//                     <Route path="rating" element={<Rating />} />
//                     <Route path="productadd" element={<Productadd />} />
//                     <Route path="product_card" element={<Product_card />} />
//                     <Route path="stock" element={<Stock />} />
//                 </Route>
//             </Routes>
//         </Router>
//     )
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/shared/Admin_layout"
import Admin_Dashboard from "./pages/Admin/Dashboard"
import Users from "./pages/Admin/Users"
import Requests from "./pages/Admin/Requests"
import Userprofile from "./pages/Admin/Userprofile"
import Advertisments from "./pages/Admin/Advertisments"
import Add_dvertisments from "./pages/Admin/Addadverisments"


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Admin_Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="requests" element={<Requests />} />
                    <Route path="userprofile" element={<Userprofile />} />
                    <Route path="advertisments" element={<Advertisments />} />
                    <Route path="add_advertisments" element={<Add_dvertisments />} />

                </Route>
            </Routes>
        </Router>
    )
}

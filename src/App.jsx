// import '@fontsource/poppins';
// import NavBar from './components/navbar';
// import Landing from './components/landingPage';
// import CardList from './components/cards';
// import SideBar from './components/sidebar';
// import Dash from './components/dashbord';

// export default function App() {
//   return (
//     <>
//       {/* <div >
//         <SideBar />
//         <NavBar />
//         <Landing />
//         <h1>Traveling bags</h1>
//         <CardList />
//         <h1>Cameras</h1>
//         <CardList />

//       </div> */}



//       <div className='flex h-screen '>
//         <SideBar />
//         <div className='flex flex-row w-full'>
//           <NavBar />
//           <div>

//           </div>
//         </div>
//       </div>
//     </>
//   )y
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/shared/layout"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import Orders from "./components/Orders"
import Transaction from "./components/Transaction"
import Renting from "./components/Renting"
import Rating from "./components/Rating"
import Productadd from './components/Productaddform'


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
          <Route path="profile" element={<Productadd />} />
        </Route>
      </Routes>
    </Router>
  )
}

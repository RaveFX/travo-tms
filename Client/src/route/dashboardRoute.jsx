import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DashboardTG from '../components/dashboardTG';
import Request from '../components/request';

const dashboardRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DashboardTG/>}></Route>
    <Route path='/request' element={<Request/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default dashboardRoute
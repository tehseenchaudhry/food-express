import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Components from './component/common/Components'
import Home from './pages/Home'
import Login from './component/login/Login'
import Signup from './component/login/SignUp'
import ForgotPassword from './component/login/ForgotPassword'
import Contact from './pages/Contact'
import About from './pages/About'
import ScrollToTopButton from './pages/ScrollToTopButton'
import Menu from './pages/Menu'
import AddToCart from './pages/AddToCart'
import DashboardLayout from './Dashboard/dashboardComponent/dashboardLayout/DashboardLayout'
import Orders from './Dashboard/dashboardPages/Orders'
import DashboardMenu from './Dashboard/dashboardPages/DashboardMenu'
import MainDashboard from './Dashboard/dashboardPages/MainDashboard'
import Settings from './Dashboard/dashboardPages/Settings'
import Delivery from './Dashboard/dashboardPages/Delivery'
import Customers from './Dashboard/dashboardPages/Customers'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ScrollToTopButton />
        <Routes>
          {/* Website Routes - with Navbar & Footer */}
          <Route element={<Components />}>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/addcart' element={<AddToCart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>

          {/* Dashboard Routes - without Navbar & Footer */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MainDashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="menu" element={<DashboardMenu />} />
            <Route path="customers" element={<Customers />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Auth Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
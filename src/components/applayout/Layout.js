import React from 'react'
import Navbar from '../Navbar'
import {Outlet,useLocation} from 'react-router-dom';
import Footer from '../Footer';
import Home from '../About';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'
  return (
    <div>
        <Navbar />
        {
          isHome && (
            <div><Home />
            </div>
          )
        }
        <Outlet />       
        <Footer/>
      
    </div>
  )
}

export default Layout;

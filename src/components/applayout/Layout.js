import React from 'react'
import Navbar from '../Navbar'
import Contact from'../Contact'
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Contact />
      
    </div>
  )
}

export default Layout;

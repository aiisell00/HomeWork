import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarr from './Navbar'

const Layout = () => {
  return (
    <div>
        <Navbarr/>
        <Outlet/>
    </div>
  )
}

export default Layout
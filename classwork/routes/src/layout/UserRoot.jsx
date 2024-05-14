import React from 'react'
import Navbarr from './Navbarr'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const UserRoot = () => {
  return (
    <div>
      <Navbarr/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default UserRoot
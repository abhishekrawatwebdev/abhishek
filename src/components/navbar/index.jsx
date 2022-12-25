import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img className='logo' src={logo} alt="logo" />
    </nav>
  )
}

export default Navbar;
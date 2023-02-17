import React from 'react'
import '../../styles/layout/header.css'
import Nav from './Nav'


const Header = () => {
  return (
    <header className="header">
      <Nav />
      <div className="logo">
        <img src="../logopez.jpg" alt="" />
      </div>
    </header>
  )
}
export default Header

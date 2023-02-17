import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../styles/layout/nav.css"

const Nav = () => {
  return (
<nav className="header__navbar">
        <h3 className="navbar-title">Tu Acuario en Casa</h3>
        <div className="navbar__box">
            <ul className="header__list-menu">
                    <li><NavLink to="/">Pagina Principal</NavLink></li>
                    <li><NavLink to="/products">Productos</NavLink></li>
                    <li><NavLink to="/service">Servicios</NavLink></li>
                    <li><NavLink to="/contact">Contacto</NavLink></li>
                <li><NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
            </ul>
        </div>
        <div className="icon-menu">
            <a href="./cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
            <i className="fa-solid fa-bars"></i>
        </div>
    </nav>
  )
}

export default Nav
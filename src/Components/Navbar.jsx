import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import NavLogo from '../assets/NavLogo.png'

function Navbar() {
    return (
        <div className="nav__wrapper">
        <figure className="Nav__logo--wrapper">
            <img src={NavLogo} alt="Nav Logo"  className='Nav__logo'/>
        </figure>
        <ul className='nav__links'>
            <li><Link className='nav__link' to="/">Home</Link></li>
            <li><Link className='nav__link' to="/contact">Contact</Link></li>
            <li><Link className='nav__link' to="/Home"><span className='Nav__link--special'>Search Movies</span></Link></li>
        </ul>
        </div>
    )
}

export default Navbar;
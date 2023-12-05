import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo/logo.png'

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to='/' className='logo-link'>
        <div className="logo">
          <img src={logo} alt="pinnalce-logo" style={{
            width: 'auto',
            height: '45px'
          }}/>
        </div>
        </Link>
        <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          {/* <li><Link to='/services'>Services</Link></li> */}
          {/* <li><Link to='/contact'>Contact</Link></li> */}
          {/* <li><Link to='/natPS2023'>Problem Statements</Link></li> */}
          {/* <li><Link to='/donate'>Donate</Link></li> */}
        </ul>
        <button className="menu-icon" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Washoku Kyo Logo" />
                Washoku Kyo
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
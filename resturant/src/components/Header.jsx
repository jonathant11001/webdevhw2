import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 
const Header = () => {
    return (
        <header className="flex justify-between items-center px-[40px] py-[10px] bg-[black]">
            <div className="flex items-center text-[24px] font-bold text-[white]">
                <img src={logo} alt="Washoku Kyo Logo" className="h-[40px] mr-[10px]"/>
                Washoku Kyo
            </div>
            <nav>
                <ul className="[list-style:none] flex gap-[20px] p-0 m-0">
                    <li><Link to="/" className="text-[white] no-underline text-[18px]">Home</Link></li>
                    <li><Link to="/menu" className="text-[white] no-underline text-[18px]">Menu</Link></li>
                    <li><Link to="/about" className="text-[white] no-underline text-[18px]">About</Link></li>
                    <li><Link to="/contact" className="text-[white] no-underline text-[18px]">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
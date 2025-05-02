import React from 'react';
import background from '../assets/images/background.jpg';
import logo from '../assets/images/logo.png';

const Hero = () => {
    return (
        <div className="hero">
            <img src={background} alt="Sushi Platter" />
            <div className="welcome-text">
                <div className="body_logo">
                    <img src={logo} alt="Washoku Kyo Logo" />
                </div>
                <h1>Welcome To Washoku Kyo</h1>
                <p>A restaurant dedicated to serving authentic and flavorful Japanese cuisine</p>
            </div>
        </div>
    );
};

export default Hero;
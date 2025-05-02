import React from 'react';
import background from '../assets/images/background.jpg';
import logo from '../assets/images/logo.png';

const Hero = () => {
    return (
        <div className="flex items-center justify-center text-left gap-[20px] h-screen">
            <img src={background} alt="Sushi Platter" className="w-[70%] h-full object-cover rounded-[10px] block"/>
            <div className="w-[30%] bg-[rgba(0,_0,_0,_0.8)] p-[20px] rounded-[10px] h-full flex flex-col justify-center">
                <div className="w-[300px] h-[300px] overflow-hidden flex justify-center items-center rounded-[10px]">
                    <img src={logo} alt="Washoku Kyo Logo" className="w-full h-full object-contain"/>
                </div>
                <h1 className="font-[Inknut_Antiqua] text-[50px] mb-[10px]">Welcome To Washoku Kyo</h1>
                <p className="font-[Inria_Sans] text-[25px]">A restaurant dedicated to serving authentic and flavorful Japanese cuisine</p>
            </div>
        </div>
    );
};

export default Hero;
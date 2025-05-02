import React from 'react';
import shopImage from '../assets/images/shop.png';

const About = () => {
    return (
        <main>
            <div className="flex justify-center items-center mx-[auto] my-[20px]">
                <img src={shopImage} alt="Washoku Kyo Logo" className="w-[30%] h-auto block"/>
            </div>
            <div className="border-[3px] border-[solid] border-[orange] p-[20px] mx-[auto] my-[20px] w-4/5 rounded-[10px] [box-shadow:3px_3px_10px_rgba(0,_0,_0,_0.1)] font-[Arial,_sans-serif] leading-[1.6]">
                <p>
                    Washoku Kyo, nestled at 6221 18th Ave in Brooklyn, NY 11204, United States, is a remarkable 
                    Japanese restaurant that offers an immersive dining experience into the heart of traditional Japanese 
                    cuisine. The interior is thoughtfully designed to exude an authentic Japanese charm, with elements 
                    like tatami mats and elegant wooden decor, transporting diners to the Land of the Rising Sun.<br /><br />
                    Their menu is a carefully curated selection of classic Japanese dishes. It features a wide array of 
                    sushi and sashimi, where the freshness of the fish is the star, presented with artful precision. The 
                    restaurant also offers a variety of hot and cold appetizers, such as delicate tempura with its light 
                    and crispy batter, and savory miso soup that warms the soul. For main courses, there are delicious 
                    options like teriyaki-glazed meats, cooked to a perfect balance of sweet and savory, and hearty bowls 
                    of ramen with rich and flavorful broths. Washoku Kyo prides itself on using high-quality ingredients 
                    and traditional cooking techniques, ensuring that each dish is a true representation of the refined 
                    and nuanced flavors of Japanese gastronomy. Whether you’re a long-time lover of Japanese food or new 
                    to exploring this cuisine, Washoku Kyo provides a memorable and satisfying dining experience.
                </p>
            </div>
        </main>
    );
};

export default About;
import React, { useState } from 'react';
import CrazySalmonRoll from '../assets/images/Crazy_Salmon_Roll.jpg';
import DragonRoll from '../assets/images/Dragon_Roll.jpg';
import CrabEelRoll from '../assets/images/Crab_Eel_Roll.jpg';
import SatayChickenRamen from '../assets/images/Satay_Chicken_Ramen.jpg';
import TonkotsuChashuRamen from '../assets/images/Tonkotsu_Chashu_Ramen.jpg';
import HellSpicyBeefRamen from '../assets/images/Hell_Spicy_Beef_Ramen.jpg';
import SpicyChopDon from '../assets/images/Spicy_Chop_Don.jpg';
import KyoDon from '../assets/images/Kyo_Don.jpg';
import ShoppingCart from './ShoppingCart';

const Menu = () => {
    const [cart, setCart] = useState([]);
    const menuItems = [
        { name: "Crazy Salmon Roll", price: 11.95, image: CrazySalmonRoll },
        { name: "Dragon Roll", price: 11.95, image: DragonRoll },
        { name: "Crab Eel Roll", price: 16.95, image: CrabEelRoll },
        { name: "Satay Chicken Ramen", price: 12.95, image: SatayChickenRamen },
        { name: "Tonkotsu Chashu Ramen", price: 12.95, image: TonkotsuChashuRamen },
        { name: "Hell Spicy Beef Ramen", price: 14.95, image: HellSpicyBeefRamen },
        { name: "Spicy Chop Don", price: 14.95, image: SpicyChopDon },
        { name: "Kyo Don", price: 27.95, image: KyoDon },
    ];

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    return (
        <div className="Menu">
            <div className="menu-header">
                <h2>Menu</h2>
                <ShoppingCart cart={cart} setCart={setCart} />
            </div>
            <nav>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt={item.name} />
                        <span>{item.name}</span>
                        <p>${item.price.toFixed(2)}</p>
                        <button
                            className="add-to-cart"
                            onClick={() => addToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </nav>
        </div>
    );
};

export default Menu;
import React, { useState } from 'react';

const ShoppingCart = ({ cart, setCart }) => {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="flex justify-between items-center border-[1px] border-[solid] border-[#ccc] p-[10px] mb-[20px] bg-[#111] relative">
            <button onClick={toggleCartVisibility} className="bg-[#4caf50] text-[white] border-[none] rounded-[5px] px-[10px] py-[5px] text-[14px] cursor-pointer flex items-center relative hover:bg-[#45a049]">
                🛒 Cart ({cart.length})
            </button>

            {isCartVisible && (
                <div className="absolute top-full right-[0] w-[300px] bg-[#222] rounded-[10px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.2)] p-[10px] mt-[5px]">
                    <h3 className="mt-[0] mx-[0] mb-[10px] text-[16px] text-center">Shopping Cart</h3>
                    <div className="flex items-center gap-[10px] cursor-pointer">
                        <p className="m-0 font-bold">Total: ${calculateTotal()}</p>
                        <button onClick={clearCart} className="bg-none border-[none] text-[white] bg-[red] cursor-pointer font-bold mt-[10px] w-full hover:bg-none hover:border-[none] hover:text-[red]">Clear Cart</button>
                    </div>
                    <ul id="cart-items" className="absolute top-full right-[0] w-[300px] bg-[#222] rounded-[10px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.2)] p-[10px] mt-[5px]">
                        {cart.length === 0 ? (
                            <li className="text-[16px] font-bold text-[#333] [list-style:none] bg-[#fff] rounded-[10px] [box-shadow:0_4px_8px_#0000001a] overflow-hidden text-center p-[10px] [transition:transform_.3s_ease-in-out] flex-[1_1_45%] m-[10px] max-w-[200px]">Cart is empty</li>
                        ) : (
                            cart.map((item, index) => (
                                <li key={index} className="text-[16px] font-bold text-[#333] [list-style:none] bg-[#fff] rounded-[10px] [box-shadow:0_4px_8px_#0000001a] overflow-hidden text-center p-[10px] [transition:transform_.3s_ease-in-out] flex-[1_1_45%] m-[10px] max-w-[200px]">
                                    <span>{item.name}</span>
                                    <span>${item.price.toFixed(2)}</span>
                                    <span>Quantity: {item.quantity}</span>
                                    <button
                                        onClick={() => removeFromCart(index)}
                                        className="bg-[#e60000] text-[white] border-[none] rounded-[5px] px-[10px] py-[5px] cursor-pointer hover:bg-[#ff4d4d]"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
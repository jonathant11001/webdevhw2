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
        <div className="Shopping">
            <button onClick={toggleCartVisibility} className="cart-icon-button">
                🛒 Cart ({cart.length})
            </button>

            {isCartVisible && (
                <div className="cart-items">
                    <h3>Shopping Cart</h3>
                    <div className="cart-icon-container">
                        <p>Total: ${calculateTotal()}</p>
                        <button onClick={clearCart} className="remove-all-btn">Clear Cart</button>
                    </div>
                    <ul id="cart-items">
                        {cart.length === 0 ? (
                            <li>Cart is empty</li>
                        ) : (
                            cart.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <span>{item.name}</span>
                                    <span>${item.price.toFixed(2)}</span>
                                    <span>Quantity: {item.quantity}</span>
                                    <button
                                        onClick={() => removeFromCart(index)}
                                        className="remove-item-btn"
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
import React from 'react'
import './Cart.css';
import { useAuth } from "../Context/ContextApi";
import Header from './Header';
import Footer from './Footer';

function Cart() {
    const { setCart, cart } = useAuth();
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    const totalPrice = cartItem.reduce((acc, curr) => acc + curr.price);
    return (
        <>
            <Header />
            <div className="cart-container">
                <div className="cart-table">
                    <section className="table-section">
                        <table className="table-cart">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
                <div className="cart-total">
                    <section className="total-section">
                        <div className="contain-total">
                            <span>Total: </span>
                            <p className="total-card">
                                {'55,000'}
                            </p>
                        </div>
                        <div className="contain-info">
                            <p>Local Delivery Fees not included yet</p>
                        </div>
                    </section>
                </div>
                <div className="cart-process">
                    <section className="cart-buttons">
                        <input type="submit" value="Continue Shopping" className="continue-btn" />
                        <input type="submit" value="Proceed to Checkout" className="checkout-btn" />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart


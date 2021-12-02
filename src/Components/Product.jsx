import React, { useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import './Product.css';
import '../App.css';
import { MdAddShoppingCart, MdStars } from 'react-icons/md';
import Stars from './Stars';
import { GiQueenCrown } from "react-icons/gi";
import { useAuth } from "../Context/ContextApi";

function Product() {

    const { cart, setCart } = useAuth();
    const location = useLocation();
    const vehicle = location.state;
    const { id } = useParams();

    const addToCart = () => {
        const product = { id: id, name: vehicle.carName, quantity: 1, price: vehicle.price, image: vehicle.image };
        setCart(currCart => [...currCart, product]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart)
    }, [cart]);

    return (
        <>
            <section className="product" key={id}>
                <div className="product-container-left">
                    <div className="product-image">
                        <img src={vehicle.image} alt="" />
                    </div>
                    <div className="product-info">
                        <h1>{vehicle.carName} - {vehicle.make}</h1>
                        <p className="car-desc">
                            <span> {vehicle.category} | </span>
                            <span> {vehicle.drive} | </span>
                            <span> {vehicle.engine} | </span>
                            <span> {vehicle.speed} </span>
                        </p>
                        <p className="product-star">
                            <Stars carStars={vehicle.stars} />
                        </p>
                        <div className="cart-btn">
                            <p className="price">
                                {
                                    vehicle.price.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        maximumFractionDigits: 0,
                                    })
                                }
                            </p>
                            <div className="product-shipping">
                                + shipping from $ 7,000 to Central Business District
                            </div>
                            <button onClick={addToCart} className="btn cart-button">
                                <MdAddShoppingCart className="btn-icon" />
                                <span>Add To Cart</span></button>
                        </div>
                        <div className="promotions">
                            <p><GiQueenCrown className="promotion-icons" /> <span>Get Free Delivery on your next order with WalkerAuto</span></p>
                            <p><MdStars className="promotion-icons" /><span>20% off capped at 10,000 when you pay with your Cente Card</span></p>
                            <p><MdStars className="promotion-icons" /><span>30% OFF Delivery countrywide</span></p>
                        </div>
                    </div>
                </div>
                <div className="product-container-right">
                </div>
            </section>
        </>
    )
}

export default Product

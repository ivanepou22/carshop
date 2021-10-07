import React from 'react';
import { useLocation, useParams } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import './Product.css';
import '../App.css';
import {MdAddShoppingCart, MdStars} from 'react-icons/md';
import Stars from './Stars';
import {GiQueenCrown} from "react-icons/gi";
// import {carStock} from "../apis/api";

function Product() {
    const location = useLocation();
    const vehicle = location.state;
    const { id } = useParams();

    const addItemCar = () => {
        let products = [];
        products = JSON.stringify(vehicle);
        localStorage.setItem('cart', products)
    }

    return (
        <>
        <Header />
            <section className="product" key={id}>
                <div className="product-container-left">
                    <div className="product-image">
                        <img src={vehicle.image} alt=""  />
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
                            <button  onClick={addItemCar} className="btn cart-button">
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
        <Footer />
        </>
    )
}

export default Product

import React from 'react'
import './Cart.css';
import { useAuth } from "../Context/ContextApi";
import { FcEmptyTrash } from 'react-icons/fc'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'

function Cart() {
    const { cart } = useAuth();
    const total = cart?.reduce((total, item) => total + item.price, 0);

    //delete item from cart array
    const handleDelete = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }



    return (
        <>
            <div className="cart-container">
                <div className="cart-table">
                    <div className="cart-table-header">
                        <FiShoppingCart size="20" />
                        <h2>Your Cart</h2>
                    </div>
                    <section className="table-section">
                        {
                            cart?.length > 0 ? (
                                <table className="table table-cart">
                                    <thead className="table-head">
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                            <th>Subtotal</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body">
                                        {cart?.map((item, index) => (
                                            <tr key={index} className="table-tr">
                                                <td>{index + 1}</td>
                                                <td><img src={item.image} alt="product" className="product-image" /></td>
                                                <td>{item.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    maximumFractionDigits: 0,
                                                })}</td>
                                                <td>{(item.price * item.quantity).toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    maximumFractionDigits: 0,
                                                })}</td>
                                                <td>
                                                    <button className="btn-delete" onClick={handleDelete(index)}>
                                                        <AiOutlineDelete />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="empty-cart">
                                    <FcEmptyTrash size={100} />
                                    <h3>Your cart is empty</h3>
                                    <p>Please add some items to your cart</p>
                                </div>
                            )
                        }

                    </section>
                </div>
                {
                    cart?.length > 0 ? (
                        <>
                            <div className="cart-total">
                                <section className="total-section">
                                    <div className="contain-total">
                                        <span>Total: </span>
                                        <p className="total-card">
                                            {total.toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'USD',
                                                maximumFractionDigits: 0,
                                            })}
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
                        </>) : (<></>)
                }
            </div>
        </>
    )
}

export default Cart


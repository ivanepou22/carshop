import React from 'react'
import './Header.css';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineHeart, AiOutlineMail, AiOutlineDelete } from 'react-icons/ai'
import { BiHelpCircle, BiBriefcaseAlt2, BiUserCheck } from 'react-icons/bi'
import { RiUser2Line, RiLiveLine, RiArrowDownSLine, RiMoneyDollarCircleLine } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi';
import { useAuth } from "../Context/ContextApi";
import { Link } from 'react-router-dom';
import { FcEmptyTrash } from 'react-icons/fc'

//import { useHistory } from "react-router-dom";


function Header() {
    //using the contextApi
    const { setUser, user, cart, setCart } = useAuth();
    //const history = useHistory();
    // const user = JSON.parse(localStorage.getItem("user"));
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    const total = cart?.reduce((total, item) => total + item.price, 0);

    console.log(cart)

    //handle Logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null)
    }
    console.log(cartItem);
    //delete item from cart array
    const handleDelete = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    }
    return (
        <header className="header">
            <div id="menu-btn"> <AiOutlineMenu /></div>
            <Link to="/" className="logo"> <span>Walker</span>Auto </Link>
            <div className="header-container">

                <form>
                    <input type="text" placeholder="Search Cars, Car Parts, Brands and Categories" />
                    <input type="submit" value="Search" />
                </form>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__listitem">
                            {
                                user ? (
                                    <div className="icon_container">
                                        <BiUserCheck className="header-icons" />
                                        {

                                            user.map(usr => (
                                                <p key={usr.id}>Hi, {usr.firstName}</p>
                                            ))
                                        }
                                        <RiArrowDownSLine className="header-icons-second" />
                                    </div>
                                ) : (
                                    <div className="icon_container">
                                        <HiOutlineUser className="header-icons" />
                                        <p>Account</p>
                                        <RiArrowDownSLine className="header-icons-second" />
                                    </div>)
                            }
                            <ul className="nav__listitemdrop">
                                {
                                    user ? ('') : (
                                        <Link to="/login" className='button-dropdown'>
                                            <span>
                                                Sign in
                                            </span>
                                        </Link>
                                    )
                                }
                                <li>
                                    <div className="li-contain">
                                        <RiUser2Line className="li-icon" />
                                        <span>My Account</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="li-contain">
                                        <BiBriefcaseAlt2 className="li-icon" />
                                        <span>Orders</span>
                                    </div>
                                </li>
                                {
                                    user ? (
                                        <li>
                                            <div className="li-contain">
                                                <AiOutlineMail className="li-icon" />
                                                <span>Inbox</span>
                                            </div>
                                        </li>
                                    ) : ('')
                                }
                                <li>
                                    <div className="li-contain">
                                        <AiOutlineHeart className="li-icon" />
                                        <span>Saved Items</span>
                                    </div>
                                </li>
                                {
                                    user ? (
                                        <li>
                                            <div className="li-contain">
                                                <RiMoneyDollarCircleLine className="li-icon" />
                                                <span>Walker Credit</span>
                                            </div>
                                        </li>
                                    ) : ('')
                                }
                                {
                                    user ? (
                                        <input type="button" className="button-dropdown-logout" value="Logout" onClick={handleLogout} />
                                    ) : ('')
                                }

                            </ul>
                        </li>
                        <li className="nav__listitem li-help">
                            <div className="icon_container">
                                <BiHelpCircle className="header-icons" />
                                <p>Help</p>
                                <RiArrowDownSLine className="header-icons-second" />
                            </div>
                            <ul className="nav__listitemdrop">
                                <li>Help Center</li>
                                <li>Place & Track Order</li>
                                <li>Order Cancellation</li>
                                <li>Returns and Refunds</li>
                                <li>Payments</li>
                                <li>WalkerAuto Account</li>
                                <div className='button-dropdown'>
                                    <div className="li-contain live-help">
                                        <RiLiveLine className="li-icon" />
                                        <span>Live Help</span>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav__listitem">
                            <div className="icon_container cart">
                                <AiOutlineShoppingCart className="header-icons" />
                                <span className="cart-quantity">
                                    {
                                        cart?.length
                                    }
                                </span>
                                <RiArrowDownSLine className="header-icons-second" />
                            </div>
                            <ul className="nav__listitemdrop cart-dropdown">
                                {
                                    cart?.length !== 0 ? (
                                        <div className="cart-header">
                                            <h2>Your Cart Summary</h2>
                                        </div>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }

                                {
                                    cart.length !== 0 ? (
                                        cart.map((item, index) => (
                                            <li key={item.id} className="item-li">
                                                <div className="item-info">
                                                    <div className="item-desc">
                                                        {item.name}
                                                    </div>
                                                    <div className="item-quantity">
                                                        {
                                                            item.quantity.toFixed(2)
                                                        }
                                                    </div>
                                                    <div className="item-price">
                                                        {
                                                            item.price.toLocaleString('en-US', {
                                                                style: 'currency',
                                                                currency: 'USD',
                                                                maximumFractionDigits: 0,
                                                            })
                                                        }
                                                    </div>
                                                    <div className="item-action">
                                                        <button className="btn-delete" >
                                                            <AiOutlineDelete onClick={
                                                                () => handleDelete(item.id)
                                                            } />
                                                        </button>
                                                    </div>

                                                </div>

                                            </li>
                                        ))
                                    ) : (
                                        <div className="empty-cart">
                                            <FcEmptyTrash size="50" />
                                            <p>Your Cart is Empty</p>
                                        </div>
                                    )
                                }
                                {
                                    cart?.length !== 0 ? (
                                        <>
                                            <div className="cart-subtotal">
                                                <h3>Total</h3>
                                                <h3>{total.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    maximumFractionDigits: 0,
                                                })}</h3>
                                            </div>
                                            <div className='button-dropdown'>
                                                <div className="li-contain go-to-cart">
                                                    <Link to="/cart">
                                                        <span>Go to Cart</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }

                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

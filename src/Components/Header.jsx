import React from 'react'
import './Header.css';
import {AiOutlineShoppingCart, AiOutlineMenu} from 'react-icons/ai'
import {BiHelpCircle} from 'react-icons/bi'
import {HiOutlineUser} from 'react-icons/hi'

function Header({email}) {
    return (
        <header className="header">
            <div id="menu-btn"> <AiOutlineMenu /></div>
            <a href="/" className="logo"> <span>Walker</span>Auto </a>
            <div className="header-container">

                <form action="">
                        <input type="text" placeholder="Search Cars, Car Parts, Brands and Categories" />
                        <input type="submit" value="Search" />
                </form>

                <div id="login-container">
                    <div className="icon_container">
                        <HiOutlineUser  className ="header-icons" />
                        <span>
                            {
                                email !== "" ? (email): 'Account'
                            }
                        </span>
                    </div>
                    <div className="icon_container">
                        <BiHelpCircle className ="header-icons" />
                        <span>Help</span>
                    </div>
                    <div className="icon_container cart">
                        <AiOutlineShoppingCart className ="header-icons"/>
                        <span>Cart</span>
                        <span className="cart-quantity">0</span>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header

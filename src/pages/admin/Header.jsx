import React from 'react'
import './Header.css';
import {AiOutlineMenu} from 'react-icons/ai'
import {BiHelpCircle} from 'react-icons/bi'
import {HiOutlineUser} from 'react-icons/hi'
import {FaRegBell} from 'react-icons/fa';

function Header() {
    return (
        <header className="header">
            <div id="menu-btn"> <AiOutlineMenu /></div>
            <a href="/" className="logo"> <span>Walker</span>Auto </a>
            <div className="header-container">

                <form action="">

                </form>

                <div id="login-container">
                    <div className="icon_container">
                        <BiHelpCircle className ="header-icons" />
                        <span>Help</span>
                    </div>
                    <div className="icon_container">
                        <FaRegBell className ="header-icons"/>
                        <span>Notifications</span>
                    </div>
                    <div className="icon_container">
                        <HiOutlineUser  className ="header-icons" />
                        <span>
                           Account
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

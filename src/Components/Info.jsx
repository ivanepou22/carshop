import React from 'react'
import './Info.css';
import { FaHome,FaUsers } from 'react-icons/fa';
import {AiFillCar} from 'react-icons/ai';
let Icon;
function Info(props) {
    Icon = '';
    if(props.icon === 'FaHome') {
        Icon = FaHome;
    } else if(props.icon === 'AiFillCar') {
        Icon = AiFillCar;
    } else if(props.icon === 'FaUsers') {
        Icon = FaUsers;
    }

    return (
            <div className="icons">
                <Icon />
                <div className="content">
                    <h3>{props.quantity}+</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
    )
}

export default Info

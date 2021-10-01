import React from 'react'
import './Services.css';
import {FaCarCrash, FaTools, FaCarBattery, FaGasPump} from 'react-icons/fa';
import {AiFillCar} from 'react-icons/ai';
import {RiCustomerServiceFill} from 'react-icons/ri';
import {SiCodeforces} from 'react-icons/si';
let IconService;

function Services(props) {
    IconService = '';
    switch (props.serviceIcon) {
        case 'FaCarCrash':
                IconService = FaCarCrash;
            break;
        case 'FaTools':
                IconService = FaTools;
            break;
        case 'FaCarBattery':
                IconService = FaCarBattery;
            break;
        case 'FaGasPump':
                IconService = FaGasPump;
            break;
        case 'AiFillCar':
                IconService = AiFillCar;
            break;
        case 'RiCustomerServiceFill':
                IconService = RiCustomerServiceFill;
            break;
        default:
                IconService = SiCodeforces;
            break;
    }
    return (
        <div className="box">
            <IconService />
            <h3>{props.title}</h3>
            <p>{props.serviceDesc}</p>
            <a href="/" className="btn"> read more</a>
        </div>
    )
}

export default Services

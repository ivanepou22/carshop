import React from 'react';
import './Sidemenu.css';
import {
    SiBmw,
    SiBugatti,
    SiFord,
    SiMercedes,
    SiHonda,
    SiAudi,
    SiNissan,
    SiLamborghini,
    SiVolkswagen,
    SiTesla
} from "react-icons/si";
import { GiHorseHead } from "react-icons/gi";
import { BiShieldQuarter } from "react-icons/bi"
import { Link } from 'react-router-dom';

function Sidemenu() {
    return (
        <div className="Sidemenu">
            <ul>
                <li><Link to="/#"><GiHorseHead />Ferari</Link></li>
                <li><Link to="/#"><SiBugatti />Bugatti</Link></li>
                <li><Link to="/#"><SiFord />Ford</Link></li>
                <li><Link to="/#"><SiMercedes /> Mercedes Benz</Link></li>
                <li><Link to="/#"><SiHonda />Honda</Link></li>
                <li><Link to="/#"><SiBmw />BMW</Link></li>
                <li><Link to="/#"><SiAudi />Audi</Link></li>
                <li><Link to="/#"><SiNissan />Nissan</Link></li>
                <li><Link to="/#"><SiLamborghini />Lamborghini</Link></li>
                <li><Link to="/#"><BiShieldQuarter />Porche</Link></li>
                <li><Link to="/#"><SiVolkswagen />Volkswagen</Link></li>
                <li><Link to="/#"><SiTesla />Tesla</Link></li>
            </ul>
        </div>
    )
}

export default Sidemenu

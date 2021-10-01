import React from 'react';
import './Sidemenu.css';
import {
    SiBmw,
    SiBugatti,
    SiFord,
    SiMercedes,
    SiHonda,
    SiAudi,
    SiBentley,
    SiNissan,
    SiLamborghini,
    SiVolkswagen,
    SiTesla
} from "react-icons/si";
import {GiHorseHead, GiSteelwingEmblem} from "react-icons/gi";
import {BiShieldQuarter} from "react-icons/bi"

function Sidemenu() {
    return (
        <div className="Sidemenu">
            <ul>
                <li><a href="/#"><GiHorseHead />Ferari</a></li>
                <li><a href="/#"><SiBugatti />Bugatti</a></li>
                <li><a href="/#"><SiFord />Ford</a></li>
                <li><a href="/#"><SiMercedes /> Mercedes Benz</a></li>
                <li><a href="/#"><SiHonda />Honda</a></li>
                <li><a href="/#"><SiBmw />BMW</a></li>
                <li><a href="/#"><SiAudi />Audi</a></li>
                <li><a href="/#"><GiSteelwingEmblem />Asto Martin</a></li>
                <li><a href="/#"><SiBentley />Bentley</a></li>
                <li><a href="/#"><SiNissan />Nissan</a></li>
                <li><a href="/#"><SiLamborghini />Lamborghini</a></li>
                <li><a href="/#"><BiShieldQuarter />Porche</a></li>
                <li><a href="/#"><SiVolkswagen />Volkswagen</a></li>
                <li><a href="/#"><SiTesla />Tesla</a></li>
            </ul>
        </div>
    )
}

export default Sidemenu

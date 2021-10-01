import React from 'react';
import './Home.css';
import Info from '../Components/Info';
import {companyInfo, ourService,featuredCarsFirst,featuredCarsSecond} from '../apis/api';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Subscribe from '../Components/Subscribe';
import Hero from '../Components/Hero';
import Sidemenu from '../Components/Sidemenu';
import Swipeslider from '../Components/Swipeslider';

function Home() {
    return (
        <div className="Home">
            <selection className="hero-container">
                <div className="menu-side">
                    <Sidemenu />
                </div>
                <div className="slide-side">
                    <Hero />
                </div>
            </selection>
            <section className="icons-container">
                {
                    companyInfo.map(company => (
                        <Info icon={company.icon} quantity={company.quantity} desc={company.desc} companyId={company.id} key={company.id} />
                    ))
                }
            </section>
            <section className="services" id="services">
                <h1 className="heading"> our <span>services</span> </h1>
                <div className="box-container">
                {
                    ourService.map(service => (
                        <Services title={service.title} serviceIcon={service.icon} serviceDesc={service.desc} serviceId={service.id} key={service.id} />
                    ))
                }
                </div>
            </section>
            <section className="featured">
                <h1 className="heading"> <span>featured</span> cars </h1>
                <Swipeslider cars={featuredCarsFirst} />
                <Swipeslider cars={featuredCarsSecond} />
            </section>
            <Subscribe />
            <Contact />
        </div>
    )
}

export default Home

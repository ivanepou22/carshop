import React from 'react';
import './Footer.css';
import {GrLocation} from 'react-icons/gr';
import {BsArrowReturnRight} from 'react-icons/bs'
import {AiOutlineGlobal, AiOutlineMail} from 'react-icons/ai';
import {FaPhoneAlt,
    FaFax,
    FaRegAddressCard,
    FaRegAddressBook,
    FaFacebookSquare,
    FaTwitter,
    FaInstagramSquare,
    FaLinkedin,
    FaPinterestSquare,
    FaYoutube
} from 'react-icons/fa'

function Footer() {
    return (
        <section className="footer" id="footer">
            <div className="box-container">
                <div className="box">
                    <h3>our branches</h3>
                    <a href="/#"> <GrLocation /> Uganda </a>
                    <a href="/#"> <GrLocation /> Ethiopia </a>
                    <a href="/#"> <GrLocation /> USA </a>
                    <a href="/#"> <GrLocation /> Japan </a>
                    <a href="/#"> <GrLocation /> Canada </a>
                    <a href="/#"> <GrLocation /> South Korea </a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="/#"> <BsArrowReturnRight /> home </a>
                    <a href="/#"> <BsArrowReturnRight /> vehicles </a>
                    <a href="/#"> <BsArrowReturnRight /> services </a>
                    <a href="/#"> <BsArrowReturnRight /> featured </a>
                    <a href="/#"> <BsArrowReturnRight /> reviews </a>
                    <a href="/#"> <BsArrowReturnRight /> contact </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="/#"> <AiOutlineGlobal /> walkerauto.com </a>
                    <a href="/#"> <FaPhoneAlt /> +256-700584851 </a>
                    <a href="/#"> <AiOutlineMail /> Sales@walkerauto.com</a>
                    <a href="/#"> <FaFax /> 214-5423-452 </a>
                    <a href="/#"> <FaRegAddressCard /> Kampala, Uganda </a>
                    <a href="/#"> <FaRegAddressBook /> 22351, P.O Box </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="/#"> <FaFacebookSquare /> facebook </a>
                    <a href="/#"> <FaTwitter /> twitter </a>
                    <a href="/#"> <FaInstagramSquare /> instagram </a>
                    <a href="/#"> <FaLinkedin /> linkedin </a>
                    <a href="/#"> <FaPinterestSquare /> pinterest </a>
                    <a href="/#"> <FaYoutube /> Youtube </a>
                </div>
            </div>
            <div className="credit"> WalkerAuto &copy; 2021 | rights reserved </div>
        </section>
    )
}

export default Footer

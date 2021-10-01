import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h1 className="heading"><span>contact</span> us</h1>
            <div className="row">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7426986505834!2d32.6124849141509!3d0.3527645640670576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbdd7a935669%3A0xd8f918aa863e88dd!2sNTINDA%20COMPLEX%20MASJID!5e0!3m2!1sen!2sug!4v1632861045026!5m2!1sen!2sug"  title="My map" allowFullScreen="" loading="lazy"></iframe>
                <form action="">
                    <h3>get in touch</h3>
                    <input type="text" placeholder="your name" className="box" />
                    <input type="email" placeholder="your email" className="box" />
                    <input type="tel" placeholder="subject" className="box" />
                    <textarea placeholder="your message" className="box" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" className="btn" />
                </form>
            </div>
        </section>
    )
}

export default Contact

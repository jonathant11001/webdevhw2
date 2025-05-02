import React from 'react';

const Contact = () => {
    return (
        <div className="Contact">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.434568033754!2d-73.99119962554772!3d40.62029734322698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2455f6ca93837%3A0x2e3c068cc4e26c4!2z5bCGIFdhc2hva3UgS3lv!5e0!3m2!1sen!2sus!4v1741551316431!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <form className="contact-form" action="#" method="post">
                <h2>Contact Us</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>            
        </div>
    );
};

export default Contact;
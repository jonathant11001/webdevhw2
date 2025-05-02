import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="business-hours">
                    <h2>Business Hours</h2>
                    <ul>
                        <li>Monday:<br />11:00 AM - 9:30 PM</li>
                        <li>Tuesday:<br />11:00 AM - 9:30 PM</li>
                        <li>Wednesday:<br />CLOSED</li>
                        <li>Thursday:<br />11:00 AM - 9:30 PM</li>
                        <li>Friday:<br />11:00 AM - 9:30 PM</li>
                        <li>Saturday:<br />11:00 AM - 9:30 PM</li>
                        <li>Sunday:<br />11:00 AM - 9:30 PM</li>
                    </ul>
                </div>
                <div className="social-media">
                    <a href="https://www.instagram.com/explore/locations/768244443325124/washoku-kyo/" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.yelp.com/biz/washoku-kyo-brooklyn" aria-label="Yelp">
                        <FontAwesomeIcon icon={faYelp} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
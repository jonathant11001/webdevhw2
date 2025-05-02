import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-[black] text-[white] p-[5px] text-center">
            <div className="flex justify-between items-center max-w-[1200px] mx-[auto] my-[0]">
                <div className="flex-[1] text-center">
                    <h2 className="text-[18px] mb-[10px] underline">Business Hours</h2>
                    <ul className="[list-style:none] p-0 m-0 text-[14px] flex flex-wrap justify-center gap-[20px]">
                        <li className="inline-block text-[14px] text-center">Monday:<br />11:00 AM - 9:30 PM</li>
                        <li className="inline-block text-[14px] text-center">Tuesday:<br />11:00 AM - 9:30 PM</li>
                        <li className="inline-block text-[14px] text-center">Wednesday:<br />CLOSED</li>
                        <li className="inline-block text-[14px] text-center">Thursday:<br />11:00 AM - 9:30 PM</li>
                        <li className="inline-block text-[14px] text-center">Friday:<br />11:00 AM - 9:30 PM</li>
                        <li className="inline-block text-[14px] text-center">Saturday:<br />11:00 AM - 9:30 PM</li>
                        <li className="inline-block text-[14px] text-center">Sunday:<br />11:00 AM - 9:30 PM</li>
                    </ul>
                </div>
                <div className="flex gap-[10px] items-center">
                    <a href="https://www.instagram.com/explore/locations/768244443325124/washoku-kyo/" aria-label="Instagram" className="p-[15px] text-[25px] w-[25px] text-center no-underline rounded-[50%] bg-[#125688] text-[white]">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.yelp.com/biz/washoku-kyo-brooklyn" aria-label="Yelp" className="p-[15px] text-[25px] w-[25px] text-center no-underline rounded-[50%] bg-[#ff6600] text-[white]">
                        <FontAwesomeIcon icon={faYelp} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
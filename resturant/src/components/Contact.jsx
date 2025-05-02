import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center items-center gap-[30px] p-[20px] flex-wrap">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.434568033754!2d-73.99119962554772!3d40.62029734322698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2455f6ca93837%3A0x2e3c068cc4e26c4!2z5bCGIFdhc2hva3UgS3lv!5e0!3m2!1sen!2sus!4v1741551316431!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <form className="w-2/5 p-[20px] pr-[40px] bg-[rgba(255,_255,_255,_0.1)] rounded-[10px] text-center" action="#" method="post">
                <h2 className="text-[24px] mb-[15px]">Contact Us</h2>
                <div className="mb-[15px] text-left">
                    <label htmlFor="name" className="block text-[16px] mb-[5px]">Name:</label>
                    <input type="text" id="name" name="name" required className="w-full p-[10px] border-[1px] border-[solid] border-[#ccc] rounded-[5px] text-[16px]"/>
                </div>
                <div className="mb-[15px] text-left">
                    <label htmlFor="email" className="block text-[16px] mb-[5px]">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full p-[10px] border-[1px] border-[solid] border-[#ccc] rounded-[5px] text-[16px]"/>
                </div>
                <div className="mb-[15px] text-left">
                    <label htmlFor="message" className="block text-[16px] mb-[5px]">Message:</label>
                    <textarea id="message" name="message" rows="5" required className="w-full p-[10px] border-[1px] border-[solid] border-[#ccc] rounded-[5px] text-[16px]"></textarea>
                </div>
                <button type="submit" className="w-full p-[10px] bg-[#d32f2f] text-[white] border-[none] rounded-[5px] text-[18px] cursor-pointer hover:bg-[#b71c1c]">Send Message</button>
            </form>            
        </div>
    );
};

export default Contact;
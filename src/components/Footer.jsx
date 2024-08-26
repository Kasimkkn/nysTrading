import React from 'react';
import phone from '../assets/img/phone.png';
import map from '../assets/img/map-marker.png';
import clock from '../assets/img/clock.png';
import logo from '../assets/img/logo.png';
const Footer = () => {
    return (
        <footer className="bg-dark-blue text-white pt-12 pb-4">
            <div className="container mx-auto">
                <div className="grid place-items-center place-content-center px-10 grid-cols-1 md:grid-cols-3 mb-8 max-md:place-items-start max-md:place-content-start max-md:gap-5">
                    {/* Office Address */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-text-color p-4 rounded-lg">
                                <img src={map} alt="Address Icon" className="w-6 h-6" />
                            </div>
                            <h4 className="ml-4 font-bold text-lg">OFFICE ADDRESS :</h4>
                        </div>
                        <p className="text-sm">
                            Second Floor, Property No. 112-B, Block-D, Near 30 Feet Road, Sitapuri, New Delhi, South West Delhi, Delhi, 110045.
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-text-color p-4 rounded-lg">
                                <img src={phone} alt="Phone Icon" className="w-6 h-6" />
                            </div>
                            <h4 className="ml-4 font-bold text-lg">PHONE :</h4>
                        </div>
                        <p className="text-sm">+91 9899444873</p>
                        <p className="text-sm">+91 9999376935</p>
                    </div>

                    {/* Email */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-text-color p-4 rounded-lg">
                                <img src={clock} alt="Email Icon" className="w-6 h-6" />
                            </div>
                            <h4 className="ml-4 font-bold text-lg">EMAIL :</h4>
                        </div>
                        <p className="text-sm">sagar@ruchicargo.com</p>
                        <p className="text-sm">info@ruchicargo.com</p>
                    </div>

                </div>

                {/* Company Info and Useful Links */}
                <div className="border-t border-gray-700 pt-4 grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 px-4">
                    {/* Company Info */}
                    <div>
                        <img src={logo} alt="Company Logo" className="w-full mb-4" />
                        <p className="text-sm">
                            Ruchi Cargo Agency was established and promoted by a group of shipping professionals, and are in the prime business of Shipping Agency, Customs Broking, Freight Forwarding, Stevedoring, Vessel Agency, and Chartering Agency Project cargo operator. Liasoning Agent.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">USEFULL LINKS</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Our Services</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Our Services Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">OUR SERVICES</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Custom Clearing</a></li>
                            <li><a href="#" className="hover:underline">Sea Freight</a></li>
                            <li><a href="#" className="hover:underline">Air Freight</a></li>
                            <li><a href="#" className="hover:underline">Project Cargo</a></li>
                            <li><a href="#" className="hover:underline">Warehousing</a></li>
                        </ul>
                    </div>
                    {/* Map */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">RICH US</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9052327934236!2d90.38425381489225!3d23.744189384592097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8973e74dd21%3A0x3e58f49010a6c6b5!2sDhaka!5e0!3m2!1sen!2sbd!4v1585542615000!5m2!1sen!2sbd"
                            width="100%"
                            height="150"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-4 flex flex-col px-4 md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; 2022 Ruchi Cargo Agency. All Rights Reserved. Developed & Managed By Connect To India Pvt. Ltd.</p>
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Privacy & Policy</a>
                        <a href="#" className="hover:underline">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

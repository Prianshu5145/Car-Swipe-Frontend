import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-10">
            <div className="container mx-auto px-4">
                
                {/* Logo and About Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-3">Car Swipe Services Pvt Ltd </h2>
                    <p className="text-white leading-relaxed">
                      Car Swipe offers the simplest and smartest way to buy or sell your vehicle — ensuring confidence, convenience, and satisfaction at every step.

                    </p>
                </div>

                {/* Explore & Contact Sections */}
                <div className="flex flex-wrap gap-8 justify-between items-start mb-0">
                    
                    {/* Explore Links */}
                    <div className="w-full sm:w-1/2 flex-1">
                        <h3 className="text-xl font-semibold mb-3">Explore</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
                            <li><a href="/Sell" className="hover:text-blue-500 transition">Sell Car</a></li>
                            <li><a href="/buy" className="hover:text-blue-500 transition">Buy Car</a></li>
                             <li><a href="/T&C" className="hover:text-blue-500 transition">Terms & Conditions</a></li>
                            <li><a href="/privacy-policy" className="hover:text-blue-500 transition">Privacy Policy</a></li>
                           
                            <li><a href="/Contact" className="hover:text-blue-500 transition">Contact Us</a></li>
                           
                        </ul>
                        <br/>
                        
                        
                    </div>


                    {/* Registered Office Address */}
                    <div className="w-full sm:w-1/2 flex-1">
                        <h3 className="text-xl font-semibold mb-3">Registered Office Address:</h3>
                        <p className="text-white">
                            Car Swipe Services Pvt Ltd, Taukalpur Nagra, Surapur, kadipur, Sultanpur, Uttar Pradesh, 228161
                        </p>
                        <p className="mt-2 text-white">
                            CIN : <span className="font-semibold">U45102UP2025PTC225693</span> {/* Example GSTIN */}
                        </p>
                         <p className="mt-2 text-white">
                            GSTIN : <span className="font-semibold">09AAMCC8090M1ZV</span> {/* Example GSTIN */}
                        </p>
                    </div>
                </div>

                {/* Contact Information (Mobile & Email) */}
                <div className="mb-0">
                    <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
                    
                    <div className="mt-3 space-y-2">
                        <p className="text-white">
                            Email : 
                            <a 
                                href="mailto:support@carswipe.in" 
                                className="hover:text-blue-500 transition ml-1"
                            >
                                info@carswipe.in
                            </a>
                        </p>
                        <p className="text-white">
                            Phone : 
                            <a 
                                href="tel:+919792983625" 
                                className="hover:text-blue-500 transition ml-1"
                            >
                                +919792983625
                            </a>
                        </p>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                

                {/* Divider */}
                <div className="border-t border-white mt-2 pt-6">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                        
                        {/* Copyright Text */}
                        <p className="text-white text-sm">© 2025 Car Swipe Services Pvt Ltd. All rights reserved.</p>

                        {/* Social Media Links */}
                        <div className="flex space-x-6">
                            <a href="/" className="hover:text-blue-500 transition">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="/" className="hover:text-blue-500 transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="/" className="hover:text-blue-500 transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="/" className="hover:text-blue-500 transition">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="/" className="hover:text-blue-500 transition">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

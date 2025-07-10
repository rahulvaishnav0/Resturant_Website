
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-14 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 tracking-wide"> 🍽 FoodieHub</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Savor the artistry — where every dish is a culinary masterpiece served with love and flavor.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/categories" className="hover:text-orange-500">Categories</a></li>
            <li><a href="/Testimonials" className="hover:text-orange-500">Testimonials</a></li>
            <li><a href="https://thedailyblog.co.nz/" className="hover:text-orange-500">Blogs</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
          </ul>
        </div>

        {/* Main Menu */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Main Menu</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
            <li><a href="/menu" className="hover:text-orange-500">Menu</a></li>
            <li><a href="/services" className="hover:text-orange-500">Services</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>Email: <a href="mailto:example@email.com" className="hover:text-orange-500">Foodiehub123@email.com</a></li>
            <li>Phone: <a href="tel:+64958248966" className="hover:text-orange-500">+91 924 241 956</a></li>
          </ul>
          <div className="flex gap-4 mt-4 text-lg text-gray-400">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-orange-500 cursor-pointer transition" />
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-600">
        © 2023 Dscode · All rights reserved.
      </div>
    </footer>
  );
}

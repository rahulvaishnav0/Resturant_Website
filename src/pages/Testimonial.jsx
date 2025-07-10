import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Testimonial() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 grid md:grid-cols-2 items-center gap-10">
      {/* Left: Chef image */}
      <div className="text-center md:text-left">
        <img src="/public/images/pngwing 2.png" alt="Chef" className="mx-auto md:mx-0 w-72" />
        <h2 className="text-2xl font-bold mt-4 text-orange-500 flex items-center justify-center md:justify-start gap-2">
          Our Best Chef <span>😊</span>
        </h2>
      </div>

      {/* Right: Testimonials */}
      <div>
        <h3 className="text-sm text-orange-400 font-semibold tracking-widest uppercase">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-6">
          What Our Customers Say About Us
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable."
        </p>
        
        <div className="flex mt-4">
          <img src="/public/images/Mask group (3).png" alt="user1" className="w-10 h-10 rounded-full border-2 border-white -ml-0" />
          <img src="/public/images/Mask group (4).png" alt="user2" className="w-10 h-10 rounded-full border-2 border-white -ml-4" />
          <img src="/public/images/Mask group (5).png" alt="user3" className="w-10 h-10 rounded-full border-2 border-white -ml-4" /> 
          <div className="flex items-center gap-2 text-yellow-500 mb-2">
          {Array(5).fill().map((_, i) => (
            <FaStar key={i} />
          ))}
         
        </div>
          <span className="text-gray-700 ml-2 font-medium">4.9</span>
          <span className="text-sm text-gray-500 ml-1">(18.6k reviews)</span>
        </div>
      </div>
    </section>
  );
}

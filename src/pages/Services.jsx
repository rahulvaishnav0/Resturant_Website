import React from 'react';
import { FaConciergeBell, FaTruck, FaMousePointer, FaGift } from 'react-icons/fa';

export default function StoryAndServices() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h4 className="text-orange-500 font-bold text-sm uppercase mb-2">Our Story & Services</h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Culinary Journey And Services
        </h2>
        <p className="text-gray-600 mb-6">
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-semibold shadow">
          Explore
        </button>
      </div>

      {/* Right Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-orange-50 rounded-xl p-5 shadow-md hover:shadow-lg transition">
          <FaConciergeBell className="text-3xl text-orange-500 mb-3" />
          <h4 className="font-semibold text-lg">Catering</h4>
          <p className="text-sm text-gray-600">Delight your guests with our flavors and presentation.</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-5 shadow-md hover:shadow-lg transition">
          <FaTruck className="text-3xl text-orange-500 mb-3" />
          <h4 className="font-semibold text-lg">Fast Delivery</h4>
          <p className="text-sm text-gray-600">We deliver your order promptly to your door.</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-5 shadow-md hover:shadow-lg transition">
          <FaMousePointer className="text-3xl text-orange-500 mb-3" />
          <h4 className="font-semibold text-lg">Online Ordering</h4>
          <p className="text-sm text-gray-600">Explore menu & order with ease using our Online Ordering.</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-5 shadow-md hover:shadow-lg transition">
          <FaGift className="text-3xl text-orange-500 mb-3" />
          <h4 className="font-semibold text-lg">Gift Cards</h4>
          <p className="text-sm text-gray-600">Give the gift of exceptional dining with Foodi Gift Cards.</p>
        </div>
      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import Toast from './Toast'; 
import foodData from '../data/foodData';

import 'swiper/css';

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';

export default function Menu() {
  const [likedItems, setLikedItems] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addToCart = (dish) => {
    setCartItems((prev) => [...prev, dish]);
    setToastMessage(`Added ${dish.title} to cart`);

    setTimeout(() => setToastMessage(''), 2000);
  };

  return (
    <section className="relative py-12 px-4 bg-white my-3 justify-center items-center">
      
     

      <h2 className="text-orange-500 text-xl font-semibold mb-2 text-center">Our Specials</h2>
      <h3 className="text-3xl font-bold text-center mb-8">Explore These Delights</h3>
      
      <Swiper
      
        spaceBetween={20}
        slidesPerView={1}
         modules={[Navigation]}
         navigation={{
    nextEl: '.next-button',
    prevEl: '.prev-button'
  }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.3 }
        }}
      >


        {cartItems.length > 0 && (
  <div className="mt-10 bg-gray-100 p-4 rounded-md">
    <h4 className="text-lg font-bold mb-2">🛒 Cart Items:</h4>
    <ul className="space-y-2 text-left">
      {cartItems.map((item, index) => (
        <li key={index} className="flex justify-between items-center text-sm text-gray-700">
          <div>
            <span>{item.title}</span> - <span>${item.price.toFixed(2)}</span>
          </div>
          <button
            onClick={() =>
              setCartItems((prev) =>
                prev.filter((_, i) => i !== index)
              )
            }
            className="text-xs text-red-500 hover:underline ml-2"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  </div>
)}


        
        {foodData.map((dish) => (
          
          <SwiperSlide key={dish.id}>
            
            <div className="bg-orange-50 p-5 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
              <img src={dish.image} alt={dish.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">{dish.title}</h4>
                <button onClick={() => toggleLike(dish.id)}>
                  
                  {likedItems[dish.id] ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-500" />
                  )}
                </button>
                
              </div>
              <p className="text-sm text-gray-600 mb-3">{dish.desc}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-bold">${dish.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(dish)}
                  className="bg-orange-500 hover:bg-orange-600 text-white py-1.5 px-4 rounded-lg flex items-center gap-2 text-sm"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
              
            </div>
            
          </SwiperSlide>
        ))}
        
        <div className="flex justify-center gap-6 mb-6 my-3">
  <button className="prev-button px-4 py-2 bg-white text-orange-500 border border-orange-500 rounded-full shadow hover:bg-orange-100 transition">
    ⬅️ Previous
  </button>
  <button className="next-button px-4 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition">
    Next ➡️
  </button>
</div>
      </Swiper>
      


      {/* Toast message if exists */}
      {toastMessage && <Toast message={toastMessage} />}
    </section>
  );
}

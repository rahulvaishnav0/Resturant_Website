import React from 'react';
import dessertImage from '../assets/dessert.png';
import burgerImage from '../assets/burger.png';
import juiceImage from '../assets/juice.png';
import sandwichImage from '../assets/sandwich.png';

const categories = [
  { title: 'Main Dish', count: 86, image: dessertImage },
  { title: 'Break Fast', count: 12, image: burgerImage },
  { title: 'Dessert', count: 48, image: juiceImage },
  { title: 'Browse All', count: 255, image: sandwichImage }
];

export default function Categories() {
  return (
    <section className="py-12 text-center bg-white">
      <h2 className="text-2xl font-semibold text-orange-500">Customer Favorites</h2>
      <h3 className="text-4xl font-bold mt-2 mb-10">Popular Categories</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {categories.map((cat, index) => (
          <div key={index} className="bg-orange-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <img src={cat.image} alt={cat.title} className="w-20 h-20 mx-auto mb-4" />
            <h4 className="text-xl font-semibold">{cat.title}</h4>
            <p className="text-sm text-gray-600 mt-1">({cat.count} {cat.title.toLowerCase()})</p>
          </div>
        ))}
      </div>
    </section>
  );
}

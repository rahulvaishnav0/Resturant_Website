import { FaPlay } from "react-icons/fa";

import React from 'react';

import Categories from "./Categories";
import TestimonialSection from "./Testimonial";
import Contact from "./Contact";
import StoryAndServices from "./Services";
import DishSlider from "./Menu";


const Home = () => {
  return (
    <>
    <div className="px-8 py-6 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between bg-white">
      <div className="max-w-xl mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
          Dive into Delights<br />Of Delectable <span className="text-green-500">Food</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
        </p>
        <div className="flex items-center gap-4 mt-6">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
            Order Now
          </button>
          <button className="flex items-center gap-2 text-gray-700 font-semibold hover:underline">
            <FaPlay className="bg-white shadow p-2 rounded-full text-green-500 text-2xl" />
            Watch Video
          </button>
        </div>
      </div>    


       <div className="relative mt-12 md:mt-9">
        <div className="bg-green-500 rounded-full w-80 h-80 md:w-[400px] md:h-[400px] flex items-center justify-center">
          <img
            src="../../public/images/Intersect (1).png"
            alt="Food Girl"
            className="rounded-xl w-72 md:w-80 object-cover"
          />
        </div>

        {/* Hot Tag */}
        <div className="absolute top-5 left-1/4 -translate-x-1/2 bg-red-100 text-red-500 px-3 py-1 rounded-2xl text-sm">
          Hot & Spicy Food 🌶️
        </div>

        {/* Bottom Food Labels */}
        <div className="flex justify-center gap-4 absolute -bottom-6 left-1/2 -translate-x-1/4">
          <div className="flex items-center gap-2 bg-white rounded-3xl shadow-md px-5 py-2 w-64">
              
             <div className="flex justify-center gap-4 absolute -bottom-6 left-1/8 -translate-x-1/2">
          <div className="flex items-center gap-2 bg-white rounded-3xl shadow-md px-5 py-2 w-64">
            <img
              src="../../public/images/Mask group.png"
              alt="Spicy Noodles"
              className="rounded-2xl w-20 h-20"
            />
            <div>
              <p className="text-sm font-semibold">Spicy Noodles</p>
              <p className="text-xs text-black-500">$18.00</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-3xl shadow-md px-3 py-2 w-64">
            <img
              src="../../public/images/Mask group (1).png"
              alt="Vegetarian Salad"
              className="rounded-2xl w-20 h-20"
            />
            <div>
              <p className="text-sm font-semibold">Vegetarian Salad</p>
              
              <p className="text-xs text-black-500 ">$23.00</p>
            </div>
            </div>
            </div>


          </div>
        </div>
      </div>


    </div>
   
    <Categories/>
    <DishSlider/>
    <TestimonialSection/>
    <StoryAndServices/>
    <Contact/>



    </>

  );
};

export default Home;


import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Categories', path: '/categories' },
    { name: 'Testimonials', path: '/testimonials' }
  ]

  const linkStyle = "hover:text-orange-500"
  const activeStyle = "text-orange-500"

  return (
    <header className="shadow-md w-full fixed top-0 left-0 bg-white z-50">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">

        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-orange-500">
          <span className="text-purple-600 text-3xl">🍽️</span>
          FoodieHub
        </div>

        {/* Hamburger icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="text-2xl absolute right-8 top-5 cursor-pointer md:hidden text-orange-500">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <ul className="md:flex hidden space-x-8 font-semibold text-gray-700">
          {navItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <ul className={`md:hidden absolute bg-white w-full left-0 transition-all duration-300 ease-in-out font-semibold text-gray-700 ${
          menuOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'
        }`}>
          {navItems.map(({ name, path }) => (
            <li key={path} className="py-3 px-4 border-b border-gray-200">
              <NavLink
                to={path}
                className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </header>
  )
}

export default Header

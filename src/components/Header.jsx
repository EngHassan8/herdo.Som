import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { FiHome, FiInfo, FiPhone, FiTrendingUp } from 'react-icons/fi'; // Icons for nav
import Herdo from "../assets/Herdo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-green-600 font-bold' : 'hover:text-green-500 transition-colors';

  return (
    <div className='fixed top-0 w-full bg-white shadow-md z-50 px-4 sm:px-20 py-2 flex justify-between items-center'>
      <img className='w-[100px] h-[50px]' src={Herdo} alt="Logo" />

      {/* Desktop Nav */}
      <ul className='hidden sm:flex gap-10 text-lg font-semibold tracking-wide'>
        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/About" className={navLinkClass}>About</NavLink></li>
        <li><NavLink to="/news" className={navLinkClass}>News</NavLink></li>
        <li><NavLink to="/Contact" className={navLinkClass}>Contact</NavLink></li>
      </ul>

      <NavLink to="/" className='hidden sm:inline-block'>
        <button className='bg-orange-400 hover:bg-orange-500 transition text-white px-4 py-2 rounded shadow-md'>Get Start</button>
      </NavLink>

      {/* Burger Icon */}
      <div className="sm:hidden z-50">
        {isOpen ? (
          <RxCross2 onClick={() => setIsOpen(false)} className="text-3xl cursor-pointer" aria-label="Close menu" />
        ) : (
          <CiMenuBurger onClick={() => setIsOpen(true)} className="text-3xl cursor-pointer" aria-label="Open menu" />
        )}
      </div>

      {/* Mobile Nav */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white py-6 px-8 font-semibold sm:hidden z-40 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className='flex flex-col gap-6 text-base tracking-wide'>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <div className='flex items-center gap-2'><FiHome /> Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <div className='flex items-center gap-2'><FiInfo /> About</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <div className='flex items-center gap-2'><FiTrendingUp /> News</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <div className='flex items-center gap-2'><FiPhone /> Contact</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <button className='bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded w-full shadow-md'>Get Start</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

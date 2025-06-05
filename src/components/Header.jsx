// components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import Herdo from "../assets/Herdo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-green-600 font-bold' : 'hover:text-green-400';

  return (
    <div className='fixed top-0 w-full bg-white shadow-md z-50 px-4 sm:px-20 py-2 flex justify-between items-center'>
      <img className='w-[100px] h-[50px]' src={Herdo} alt="Logo" />
      <ul className='hidden sm:flex gap-10 text-xl font-bold'>
        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/About" className={navLinkClass}>About</NavLink></li>
        <li><NavLink to="/news" className={navLinkClass}>News</NavLink></li>
        <li><NavLink to="/Contact" className={navLinkClass}>Contact</NavLink></li>
      </ul>
      <NavLink to="/" className='hidden sm:inline-block'>
        <button className='bg-orange-400 text-white px-4 py-2 rounded'>Get Start</button>
      </NavLink>
      <div className="sm:hidden z-50">
        {isOpen ? (
          <RxCross2 onClick={() => setIsOpen(false)} className="text-3xl cursor-pointer" aria-label="Close menu" />
        ) : (
          <CiMenuBurger onClick={() => setIsOpen(true)} className="text-3xl cursor-pointer" aria-label="Open menu" />
        )}
      </div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white py-6 px-8 font-bold sm:hidden z-40 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className='flex flex-col gap-6 text-xl'>
          <li><NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/About" onClick={() => setIsOpen(false)} className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/Contact" onClick={() => setIsOpen(false)} className={navLinkClass}>Contact</NavLink></li>
          <li><NavLink to="/news" onClick={() => setIsOpen(false)} className={navLinkClass}>News</NavLink></li>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <button className='bg-orange-400 text-white px-4 py-2 rounded w-full'>Get Start</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

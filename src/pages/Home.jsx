import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { FaGlobe, FaHeartbeat, FaSeedling, FaHandsHelping, FaLeaf, FaWater, FaUsers } from 'react-icons/fa';
import Header from '../components/Header';
import Herdo from "../assets/Herdo.jpg"
import mohamed  from "../assets/mohamed.jpg"
import moha  from "../assets/moha.jpg"
import eng  from "../assets/eng.jpg"
import Footer from '../components/Footer';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-green-600 font-bold' : 'hover:text-green-400';

  // Data for partners and services
  const partners = [
    { id: 1, name: "Green Earth Initiative", icon: <FaSeedling className="text-green-600 text-5xl mx-auto" />, description: "Environmental conservation and reforestation." },
    { id: 2, name: "Health For All", icon: <FaHeartbeat className="text-red-600 text-5xl mx-auto" />, description: "Community health and awareness programs." },
    { id: 3, name: "Global Aid Network", icon: <FaGlobe className="text-blue-600 text-5xl mx-auto" />, description: "International disaster relief and support." },
    { id: 4, name: "Helping Hands", icon: <FaHandsHelping className="text-yellow-600 text-5xl mx-auto" />, description: "Volunteer support and social services." }
  ];
  

  const services = [
    { id: 1, icon: <FaHandsHelping className="text-blue-700 text-4xl mx-auto mb-4" />, title: "Community Support", description: "Supporting local communities through aid and education." },
    { id: 2, icon: <FaLeaf className="text-green-700 text-4xl mx-auto mb-4" />, title: "Environmental Care", description: "Projects focused on sustainability and conservation." },
    { id: 3, icon: <FaWater className="text-cyan-700 text-4xl mx-auto mb-4" />, title: "Clean Water Access", description: "Providing safe drinking water solutions." },
    { id: 4, icon: <FaUsers className="text-purple-700 text-4xl mx-auto mb-4" />, title: "Capacity Building", description: "Training and empowering NGOs and volunteers." },
  ];
  
const initialFounders = [
   {
    id: 1,
    name: "Mohamud Abdi Sheikh Adan",
    role: "  EXECUTIVE DIRECTOR ",
    image: mohamed,
  },
{
    id: 2,
    name: "Mohamed Hassan",
    role: "DEPUTY DIRECTOR",
    image: moha,
  },
  {
    id: 3,
    name: "Omar Ali Isacck",
    role: "GENERAL DIRECTOR",
    image: eng
  },

  
 
  
  

];

  const [founders, setFounders] = useState(initialFounders);

  // Bedel sawirka founder-ka
  const handleImageChange = (e, founderId) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImageUrl = URL.createObjectURL(file);

    setFounders((prev) =>
      prev.map((f) =>
        f.id === founderId ? { ...f, image: newImageUrl } : f
      )
    );
  };


  return (
    <>
      {/* Header */}
     
        <Header/>
      {/* Main Content */}
      <main className=''>
        <Header/>

        {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-20 py-16 gap-10 rounded-lg shadow-lg ">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Hilaac Environment &amp; Relief Development Organization
            </h1>
            <p className="text-lg mb-8 max-w-md">
              Empowering communities and safeguarding nature across Somalia.
            </p>
        <NavLink to="/about">
           <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-3 rounded shadow-md transition">
              Welcome
            </button>   </NavLink> 
          </div>
          <div className="md:w-1/2">
            <img
              src={Herdo}
              alt="HERDO activities"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </section>


        {/* About Section */}
        <section className="bg-white py-16 px-6 sm:px-20 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-green-700">About Our NGO </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
           HERDO is an independent, non-government, non-partisan, and non-profit organization established in December 8, 2024, to address poverty, human displacement, and climatic challenges in Somalia's Southwest State. The organization also focuses on reducing catastrophes and coping with disaster aftermaths and their negative impacts on poverty. HERDO supports social services, including basic education, health services, and promotes human rights, protection, and peaceful coexistence to achieve lasting peace and post-conflict reconstruction. Founded by Somali professionals and community members, HERDO advocates for climate justice and human rights.
          </p>
        </section>

        {/* Partners Section */}
        <section className="bg-gray-50 py-16 px-6 sm:px-20 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-green-700">Our Partner NGOs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {partners.map(({ id, name, icon, description }) => (
              <div key={id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer">
                {icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{name}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Services Section */}
        <section className="bg-white py-16 px-6 sm:px-20 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-green-700">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {services.map(({ id, icon, title, description }) => (
              <div key={id} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                {icon}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Upcoming Events Section */}
<section className="bg-gray-100 py-20 px-6 sm:px-20">
  <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Upcoming Events</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    
    {/* Event Card 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5GCpEtCFm3k86T0sf7Atn1-YDE7YkCUn3JVx4wum77IQ7Jgw9zwMUnzyofaJPq12gA&usqp=CAU"
        alt="Community Cleanup"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Community Cleanup</h3>
        <p className="text-gray-600 mb-4">Join us for a local park cleanup to promote environmental awareness.</p>
        <p className="text-sm text-gray-500">📍 Baidoa, Somalia | 📅 July 15, 2025</p>
      </div>
    </div>

    {/* Event Card 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5GCpEtCFm3k86T0sf7Atn1-YDE7YkCUn3JVx4wum77IQ7Jgw9zwMUnzyofaJPq12gA&usqp=CAU"
        alt="Water Aid Campaign"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Water Aid Campaign</h3>
        <p className="text-gray-600 mb-4">Distributing clean water kits to remote villages and training locals.</p>
        <p className="text-sm text-gray-500">📍 Hudur, Somalia | 📅 August 10, 2025</p>
      </div>
    </div>

    {/* Event Card 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxjHP9lXQEPgQKNY3I_jG9hc-FatS93vEw&s"
        alt="Medical Outreach"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Medical Outreach</h3>
        <p className="text-gray-600 mb-4">Free check-ups and medicine distribution for underprivileged communities.</p>
        <p className="text-sm text-gray-500">📍 Marka, Somalia | 📅 September 5, 2025</p>
      </div>
    </div>

  </div>
</section>

  <section className="max-w-6xl mx-auto px-6 py-12">
    <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Mission, Vision & Values</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
      {[
        {
          id: 1,
          title: "Mission",
          description: "Our mission is to deliver quality solutions that empower businesses to grow and innovate.",
          borderColor: "border-indigo-500",
        },
        {
          id: 2,
          title: "Vision",
          description: "Our vision is to be a global leader in tech innovation, setting new standards for excellence.",
          borderColor: "border-pink-500",
        },
        {
          id: 3,
          title: "Values",
          description: "Integrity, creativity, and collaboration are at the heart of everything we do.",
          borderColor: "border-green-500",
        },
      ].map(({ id, title, description, borderColor }, index) => (
        <div
          key={id}
          className={`bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center animate-bounce-slow ${borderColor} border-4`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <h3 className="text-3xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  </section>
);


<div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
  {founders.map((founder) => (
    <div
      key={founder.id}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center
                 transition-transform duration-300 ease-in-out
                 hover:scale-105 hover:shadow-2xl hover:translate-y-[-10px]"
    >
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-indigo-500 cursor-pointer
                      transform transition-transform duration-300 ease-in-out
                      hover:rotate-3 hover:scale-110">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover"
          title="Guji sawirka si aad u bedesho"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, founder.id)}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
      <h3 className="text-xl font-semibold">{founder.name}</h3>
      <p className="text-indigo-600 font-medium">{founder.role}</p>
    </div>
  ))}
</div>

       
      </main>
<Footer/>
      {/* Footer */}
     
    </>
  );
}

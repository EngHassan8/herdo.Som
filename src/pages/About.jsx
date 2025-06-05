import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxjHP9lXQEPgQKNY3I_jG9hc-FatS93vEw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5GCpEtCFm3k86T0sf7Atn1-YDE7YkCUn3JVx4wum77IQ7Jgw9zwMUnzyofaJPq12gA&usqp=CAU",
];

export default function About () {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Gacanta ku beddel sawirka
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
  <Header/>
    <div className="bg-white text-gray-800">
  {/* 1. Who We Are */}
  <section className="max-w-6xl mx-auto p-8 text-center">
    <h2 className="text-3xl font-bold text-indigo-600 mb-4">Who We Are</h2>
    <p className="text-lg text-gray-700">
      We are a non-profit organization committed to empowering communities, supporting education, and improving lives across the region through innovation and compassion.
    </p>
  </section>

  {/* 2. Our Mission */}
  <section className="bg-indigo-50 py-10">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700">
        To create sustainable solutions for underserved communities by promoting education, health, and economic development.
      </p>
    </div>
  </section>

  {/* 3. Our Vision */}
  <section className="py-10">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-700">
        A world where every individual has equal access to opportunities, dignity, and a better quality of life.
      </p>
    </div>
  </section>

  {/* 4. Our Core Values */}
  <section className="bg-indigo-100 py-10">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-800 text-center mb-6">Our Core Values</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <li className="bg-white shadow-md p-4 rounded-xl">Integrity</li>
        <li className="bg-white shadow-md p-4 rounded-xl">Transparency</li>
        <li className="bg-white shadow-md p-4 rounded-xl">Empowerment</li>
        <li className="bg-white shadow-md p-4 rounded-xl">Innovation</li>
        <li className="bg-white shadow-md p-4 rounded-xl">Collaboration</li>
        <li className="bg-white shadow-md p-4 rounded-xl">Respect</li>
      </ul>
    </div>
  </section>

  {/* 5. What We Do */}
  <section className="py-10">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">What We Do</h2>
      <p className="text-lg text-gray-700 mb-6">
        From building schools and clinics to launching job training programs, our work spans a wide range of humanitarian and development initiatives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">📚 Education Programs</div>
        <div className="bg-white p-4 rounded-lg shadow">🏥 Health Campaigns</div>
        <div className="bg-white p-4 rounded-lg shadow">💼 Economic Empowerment</div>
      </div>
    </div>
  </section>

  {/* 6. Our Team */}

  {/* 7. Get Involved */}
  <section className="py-10">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Get Involved</h2>
      <p className="text-lg text-gray-700 mb-6">
        Join our mission to bring positive change. Whether you want to volunteer, donate, or partner with us — your contribution matters.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition">
        Join Us Now
      </button>
    </div>
  </section>
</div>

    <div className="relative w-full max-w-4xl mx-auto mt-10 rounded-lg shadow-lg overflow-hidden">
      {/* Sawirka hadda */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-64 sm:h-96 object-cover transition-transform duration-700 ease-in-out"
      />

      {/* Arrow Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Next slide"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-green-600" : "bg-gray-300"
            } transition`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Details() {
  return (
    <div>
      <Header />
<div class="w-full">
  {/* <!-- 1. Hero / Who We Are --> */}
  <section class="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 text-center">
    <h2 class="text-4xl font-bold mb-4">Who We Are</h2>
    <p class="text-lg max-w-3xl mx-auto">
      We are a non-governmental organization dedicated to improving lives, promoting education, and building a better future for all.
    </p>
  </section>
{/* 
  <!-- 2. Our Mission --> */}
  <section class="py-16 bg-white text-center">
    <h2 class="text-3xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
    <p class="text-gray-600 max-w-3xl mx-auto text-lg">
      To serve vulnerable communities by providing education, healthcare, and sustainable development programs.
    </p>
  </section>

  {/* <!-- 3. Our Vision --> */}
  <section class="py-16 bg-indigo-50 text-center">
    <h2 class="text-3xl font-semibold text-indigo-800 mb-4">Our Vision</h2>
    <p class="text-gray-700 max-w-3xl mx-auto text-lg">
      A world where everyone has equal access to opportunities, dignity, and hope.
    </p>
  </section>
{/* 
  <!-- 4. Our Values --> */}
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-indigo-700 mb-6">Core Values</h2>
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div class="bg-indigo-100 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Integrity</h3>
          <p class="text-gray-700">We uphold honesty and transparency in all our actions.</p>
        </div>
        <div class="bg-indigo-100 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Compassion</h3>
          <p class="text-gray-700">We care deeply about the communities we serve.</p>
        </div>
        <div class="bg-indigo-100 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Collaboration</h3>
          <p class="text-gray-700">We work together to amplify our impact.</p>
        </div>
      </div>
    </div>
  </section>
{/* 
  <!-- 5. What We Do --> */}
  <section class="py-16 bg-indigo-600 text-white text-center">
    <h2 class="text-3xl font-bold mb-6">What We Do</h2>
    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
      <div class="bg-indigo-700 p-6 rounded-lg shadow">📚 Education & Literacy</div>
      <div class="bg-indigo-700 p-6 rounded-lg shadow">💉 Health & Wellness</div>
      <div class="bg-indigo-700 p-6 rounded-lg shadow">🌱 Sustainable Development</div>
    </div>
  </section>

  {/* <!-- 6. Our Team --> */}
  <section class="py-16 bg-white text-center">
    <h2 class="text-3xl font-bold text-indigo-700 mb-6">Meet Our Team</h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      <div class="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition">
        <img src="https://randomuser.me/api/portraits/men/45.jpg" class="w-24 h-24 mx-auto rounded-full mb-3" />
        <h4 class="text-lg font-semibold">Ahmed Mohamed</h4>
        <p class="text-gray-600 text-sm">Founder & CEO</p>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition">
        <img src="https://randomuser.me/api/portraits/women/30.jpg" class="w-24 h-24 mx-auto rounded-full mb-3" />
        <h4 class="text-lg font-semibold">Hodan Ali</h4>
        <p class="text-gray-600 text-sm">Co-Founder & Secretary</p>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition">
        <img src="https://randomuser.me/api/portraits/men/28.jpg" class="w-24 h-24 mx-auto rounded-full mb-3" />
        <h4 class="text-lg font-semibold">Mohamud Abdi</h4>
        <p class="text-gray-600 text-sm">Ex Director</p>
      </div>
    </div>
  </section>

  {/* <!-- 7. Get Involved --> */}
  <section class="py-20 bg-indigo-800 text-white text-center">
    <h2 class="text-3xl font-bold mb-4">Get Involved</h2>
    <p class="text-lg mb-6">Want to make a difference? Volunteer, donate, or partner with us today.</p>
    <button class="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
      Join Us
    </button>
  </section>
</div>

      <Footer/>

    </div>
  )
}

export default Details

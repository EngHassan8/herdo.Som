import React from "react";
import Header from '../components/Header'

import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaBuilding,
} from "react-icons/fa";


function Contact() {
  return (
    <div>
<Header/>
    
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Header with Adjusted Spacing */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4">
            Nala Xiriir
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Waxaad nagu soo diri kartaa fariin haddii aad u baahan tahay
            macluumaad dheeraad ah ama taageero
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <main className="flex-grow py-12 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form - Tight Layout */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-white text-xl mr-3" />
                  <h2 className="text-xl font-semibold text-white">
                    Fariimaha
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Geli magacaaga"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                     Enter Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Geli iimaylkaaga"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message 
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                      placeholder="Geli fariintaada"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-6 rounded-lg hover:from-blue-700 hover:to-blue-600 transition duration-200 shadow-md flex items-center justify-center mt-2"
                  >
                    <FaPaperPlane className="mr-2" />
                    Dir Fariinta
                  </button>
                  <p className="mt-4">Ama nagala soo xiriir: <a href="https://wa.me/252615052329" className="text-blue-500">WhatsApp</a></p>  

                </form>
              </div>
            </div>

            {/* Contact Info - Compact Layout */}
            <div className="space-y-4">
              {/* Office Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
                  <div className="flex items-center">
                    <FaBuilding className="text-white text-xl mr-3" />
                    <h2 className="text-xl font-semibold text-white">
                      Xafiiskeena
                    </h2>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p>Baidoa, Somalia</p>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p>herdosom@gmail.com</p>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p>+252 61 5052329 </p>
                  </div>
                  <div className="flex items-start">
                    <FaClock className="text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p>Isniinta - Jimcaha: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map - Fixed Height */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808521043341!2d45.3189113153306!3d2.046597359578982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5842591e6a1ea7%3A0x3a4dfa8f4c8d5b1e!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-[200px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </div>
  );
}

export default Contact;

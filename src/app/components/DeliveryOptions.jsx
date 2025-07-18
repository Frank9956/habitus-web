"use client"
import React from 'react'

export default function DeliveryOptions() {
  return (
    <div className="bg-[#1AA248] text-white py-20 px-4 flex flex-col items-center">
      {/* Title */}
      <div className="relative mb-16 w-full text-center flex flex-col items-center">
        <h1 className="absolute text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-extrabold text-white/20 opacity-40 blur-sm pointer-events-none select-none leading-none">
          DELIVERY OPTIONS
        </h1>
        <h2 className="text-5xl sm:text-8xl md:text-8xl font-extrabold relative z-10">CHOOSE DELIVERY STYLE</h2>
        <p className="mt-3 text-base sm:text-lg md:text-3xl font-bold text-white/90 z-10">
          Flexible choices for your convenience
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8 w-full max-w-4xl">
  {/* 1-Day Delivery (Recommended) */}
  <div className="group bg-white hover:bg-[#FFE049] transition-colors duration-300 text-black rounded-2xl p-6 sm:p-8 shadow-xl w-full border-l-8 border-yellow-400">
    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
      1-Day Delivery <span className="ml-2 px-2 py-1 bg-yellow-300 text-sm font-semibold rounded">Recommended</span>
    </h3>
    <p className="text-base sm:text-lg text-gray-700 mb-4">
      Get your groceries the same day within our <span className="text-[#1AA248] font-semibold"> operating hours</span>. Best for daily essentials and quick restocks.
    </p>
    <a
      href="https://wa.me/919266950492?text=Hi%20Habitus%2C%20I%20want%20to%20place%20a%201-Day%20Delivery%20order."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#1AA248] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#18893f] transition"
    >
      📦 Order Now
    </a>
  </div>

  {/* Express Delivery */}
  <div className="group bg-white hover:bg-[#FFE049] transition-colors duration-300 text-black rounded-2xl p-6 sm:p-8 shadow-xl w-full">
    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Express Delivery</h3>
    <p className="text-base sm:text-lg text-gray-700 mb-4">
      Need it urgently? We'll deliver within <span className="text-[#1AA248] font-semibold">10–30 minutes</span> in select areas. Perfect for last-minute needs.
    </p>
    <a
      href="https://wa.me/919266950492?text=Hi%20Habitus%2C%20I%20want%20Express%20Delivery%20within%2030%20minutes."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#1AA248] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#18893f] transition"
    >
      ⚡ Order Now
    </a>
  </div>

  {/* Super Saver Delivery */}
  <div className="group bg-white hover:bg-[#FFE049] transition-colors duration-300 text-black rounded-2xl p-6 sm:p-8 shadow-xl w-full">
    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Super Saver Delivery</h3>
    <p className="text-base sm:text-lg text-gray-700 mb-4">
      Place your order today and receive it <span className="text-[#1AA248] font-semibold">early morning tomorrow</span>. Best for planned grocery needs with savings.
    </p>
    <a
      href="https://wa.me/919266950492?text=Hi%20Habitus%2C%20I%20want%20to%20schedule%20a%20Super%20Saver%20next%20day%20delivery."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#1AA248] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#18893f] transition"
    >
      🌅 Order Now
    </a>
  </div>
</div>

    </div>
  )
}

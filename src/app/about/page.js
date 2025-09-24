"use client";
import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/about.webp"
          alt="About Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">YourStore</span> – your
            ultimate destination for premium products delivered right to your
            doorstep.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide high-quality products, exceptional
            service, and a seamless online shopping experience. We believe in
            trust, transparency, and customer satisfaction above all.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2025, our team is dedicated to sourcing the best products
            and offering them at competitive prices. Thank you for choosing us
            for your shopping needs!
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Quality</h3>
            <p>
              We only offer products that meet our high standards of quality.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Trust</h3>
            <p>Transparency and honesty guide every decision we make.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Customer First</h3>
            <p>Your satisfaction is our top priority, always.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

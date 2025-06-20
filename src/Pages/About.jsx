// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-700">About Biine.app</h1>
      
      <p className="mb-4 text-lg">
        <strong>Biine.app</strong> is Zambia’s modern take on the beloved <em>Sangwapo</em> classifieds system — a simple, trusted way people used to buy, sell, and share offers before the age of smartphones and social media.
      </p>
      
      <p className="mb-4 text-lg">
        As digital platforms grew, many buyers and sellers found themselves limited to closed circles like WhatsApp groups and Facebook connections. This created barriers, especially for individuals and small businesses who couldn’t afford to advertise or lacked access to the right digital spaces.
      </p>
      
      <p className="mb-4 text-lg">
        <strong>Biine</strong> is here to change that.
      </p>
      
      <p className="mb-4 text-lg">
        We provide an open, easy-to-use platform where <strong>anyone in Zambia can post ads, find products or services, and connect with real buyers or sellers</strong> — all without needing a middleman or being stuck in private groups.
      </p>

      <p className="mb-4 text-lg">
        Whether you’re a farmer selling surplus produce, a parent looking to buy school uniforms, or a business owner advertising services, <strong>Biine.app is your digital marketplace</strong> — proudly built for Zambia, by Zambians.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Biine?</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>🛒 <strong>Free to Use</strong> – Post and browse ads at no cost</li>
        <li>🌍 <strong>Locally Focused</strong> – Tailored to Zambian communities</li>
        <li>🔐 <strong>No Middlemen</strong> – Direct communication between buyers and sellers</li>
        <li>📱 <strong>Mobile Friendly</strong> – Works on all devices, no app required</li>
        <li>📢 <strong>Wide Reach</strong> – Go beyond social circles with open access to listings</li>
      </ul>

      <p className="mt-6 text-lg">
        Join thousands of Zambians using <strong>Biine.app</strong> to buy, sell, and discover new opportunities every day.
      </p>

      <p className="mt-4 text-xl font-bold text-green-800 italic">
        Biine — Because everyone has something to offer.
      </p>
    </section>
  );
}


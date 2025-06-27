// src/Pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>
      <p>If you have any questions, suggestions, or need support, reach out:</p>
      <ul className="list-disc pl-5 mt-2">
        <li>Email: <a href="mailto:info@biine.app" className="text-blue-500">info@biine.app</a></li>
        <li>Phone: +260 981 325 485</li>
        <li>Office: Biine App, c/o Tobs Engineering Services, Lusaka, Zambia</li>
      </ul>
    </div>
  );
}

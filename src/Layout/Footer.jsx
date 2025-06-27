// src/layout/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-600 mt-10 py-6 border-t">
      <div className="flex justify-center gap-4">
        <a href="/terms.html" className="hover:underline">Terms</a>
        <a href="/privacy.html" className="hover:underline">Privacy</a>
        <Link to="/faq" className="hover:underline">FAQs</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} BiineApp a Tobs Engineering Services Innovation. All rights reserved.</p>
    </footer>
  );
}
// src/components/NoAdsFound.jsx
import { Link } from 'react-router-dom';

export default function NoAdsFound() {
  return (
    <div className="text-center py-10 px-4">
      <img
        src="/assets/img/no-ads.png"
        alt="No ads"
        className="mx-auto w-40 h-40 opacity-70 mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-700">No ads found</h2>
      <p className="text-gray-500 mb-4">
        Try browsing a different category or posting a new ad.
      </p>
      <Link
        to="/categories"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Browse Categories
      </Link>
    </div>
  );
}

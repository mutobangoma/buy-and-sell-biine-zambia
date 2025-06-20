import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function AdCard({ ad }) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleLike = () => setLiked(!liked);

  const image = ad.imageUrl || "/assets/img/placeholder.jpg";

  return (
    <div className="relative">
      {/* Favorite Button */}
      <button
        onClick={toggleLike}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 shadow hover:scale-105 transition"
        aria-label="Favorite"
      >
        {liked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-400" />
        )}
      </button>

      <Link
        to={`/ad/${ad.id}`}
        className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
      >
        <div className="relative">
          {/* Spinner while loading */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            </div>
          )}

          <img
            src={image}
            alt={ad.title}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
            className={`w-full h-60 sm:h-72 object-cover transition-opacity duration-300 ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Featured badge */}
          {ad.featured && (
            <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-black px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>

        <div className="p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-semibold mb-1">{ad.title}</h2>
          <p className="text-gray-600 mb-2 text-sm line-clamp-2">{ad.description}</p>

          {ad.price && (
            <p className="text-green-700 font-semibold text-sm">
              Price: ${ad.price}
            </p>
          )}

          {ad.category && (
            <p className="text-xs text-gray-500 mt-1">Category: {ad.category}</p>
          )}
        </div>
      </Link>
    </div>
  );
}

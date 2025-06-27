import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "categories"));
        const fetched = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(fetched);
      } catch (error) {
        console.error("❌ Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="p-4">Loading categories...</p>;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-12 h-12 object-contain rounded"
                />
              )}
              <h3 className="font-semibold text-lg">{cat.name}</h3>
            </div>

            {Array.isArray(cat.subcategories) && cat.subcategories.length > 0 ? (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {cat.subcategories.map((sub, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/category/${cat.name}/${sub}`}
                      className="text-blue-600 hover:underline"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400 italic">No subcategories</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

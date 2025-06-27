import {
  Car,
  Home,
  Briefcase,
  Smartphone,
  Dog,
  Shirt,
  Tractor,
  Hammer,
  BookOpen,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryGridPills({
  categories = [],
  adCounts = {}, // Format: { "Electronics": { "Phones": 10, "Laptops": 5 } }
}) {
  const iconMap = {
    "Cars & Vehicles": Car,
    "Real Estate": Home,
    "Jobs": Briefcase,
    "Electronics": Smartphone,
    "Services": Hammer,
    "Pets": Dog,
    "Fashion & Beauty": Shirt,
    "Agriculture": Tractor,
    "Education": BookOpen,
    "Furniture": Home,
  };

  return (
    <section className="py-6 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Browse Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.name] || Package;
          const subCounts = adCounts[cat.name] || {};

          return (
            <div
              key={cat.id}
              className="border rounded-lg shadow p-4 bg-white dark:bg-gray-800 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.subcategories?.map((sub, idx) => (
                  <Link
                    key={idx}
                    to={`/category/${cat.name}/${sub}`}
                    className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm hover:bg-green-200 transition flex items-center gap-1"
                  >
                    {sub}
                    <span className="ml-1 bg-white rounded-full px-2 py-0.5 text-xs text-green-700 font-semibold shadow-sm">
                      {subCounts[sub] || 0}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// components/CategoryGridPills.jsx
import { Link } from "react-router-dom";
import {
  Car, Home, Briefcase, Smartphone, Dog, Shirt,
  Tractor, Hammer, BookOpen, Package
} from "lucide-react";

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

export default function CategoryGridPills({ categories = [], adCounts = {} }) {
  return (
    <section className="py-6 px-4 md:px-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Browse Categories</h2>
      {categories.map((cat) => {
        const Icon = iconMap[cat.name] || Package;
        const subcategories = cat.subcategories || Object.keys(adCounts[cat.name] || {});

        return (
          <div key={cat.id} className="border-b pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </div>

            {subcategories.length > 0 && (
              <div className="flex flex-wrap gap-2 ml-9">
                {subcategories.map((sub, idx) => {
                  const subName = typeof sub === "string" ? sub : sub.name;
                  const count = adCounts[cat.name]?.[subName] || 0;

                  return (
                    <Link
                      to={`/category/${cat.name}/${subName}`}
                      key={idx}
                      className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full hover:bg-green-200 transition whitespace-nowrap"
                    >
                      {subName} <span className="ml-1 text-xs text-gray-600">({count})</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

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

export default function CategoryGrid({ categories, selectedCategory, onSelect }) {
  // Icon map matching category names to Lucide icons
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
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {categories.map((cat, idx) => {
          const Icon = iconMap[cat.name] || Package; // fallback icon
          return (
            <button
              key={idx}
              onClick={() => onSelect(cat.name)}
              className={`bg-white p-3 sm:p-4 rounded-lg shadow text-center text-sm sm:text-base transition duration-200 ${
                selectedCategory === cat.name
                  ? "border-2 border-green-500"
                  : "hover:bg-green-50"
              }`}
            >
              <Icon className="w-6 h-6 mx-auto mb-1 text-green-600" />
              <span className="block font-medium">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

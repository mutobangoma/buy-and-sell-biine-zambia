import React from "react";
import {
  Smartphone,
  Laptop,
  Shirt,
  Hammer,
  Apple,
  Car,
  Home,
  PawPrint,
  Utensils,
  BookOpen,
  Briefcase,
  Building2,
  ShoppingCart,
  Truck,
} from "lucide-react";

const iconMap = {
  Phones: Smartphone,
  Computers: Laptop,
  Fashion: Shirt,
  Tools: Hammer,
  Food: Utensils,
  Agriculture: Apple,
  Cars: Car,
  Electronics: Smartphone,
  RealEstate: Home,
  Pets: PawPrint,
  Books: BookOpen,
  Jobs: Briefcase,
  Businesses: Building2,
  Shopping: ShoppingCart,
};

export default function SubCategoryGrid({
  subcategories = [],
  selectedSubcategory,
  onSelect,
}) {
  return (
    <section className="py-4 px-4 md:px-8">
      <h3 className="text-lg font-semibold mb-3 text-center sm:text-left">Browse Subcategories</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {subcategories.map((sub, idx) => {
          const Icon = iconMap[sub.name] || ShoppingCart;
          return (
            <button
              key={idx}
              onClick={() => onSelect(sub.name)}
              className={`bg-white p-3 sm:p-4 rounded-lg shadow text-center text-sm sm:text-base transition duration-200 ${
                selectedSubcategory === sub.name
                  ? "border-2 border-green-500"
                  : "hover:bg-green-50"
              }`}
            >
              <div className="flex justify-center text-green-600 mb-1">
                <Icon size={28} />
              </div>
              <span className="block font-medium">{sub.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

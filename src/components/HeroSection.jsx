// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection({ categories, selectedCategory, onSelect, locations, selectedLocation, onLocationSelect }) {
  return (
    <div className="bg-green py-6 px-4 shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Filter Ads</h2>

      <div className="flex flex-wrap gap-2">
        <select
          value={selectedCategory || ""}
          onChange={(e) => onSelect(e.target.value || null)}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <select
          value={selectedLocation || ""}
          onChange={(e) => onLocationSelect(e.target.value || null)}
          className="border rounded p-2"
        >
          <option value="">All Locations</option>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

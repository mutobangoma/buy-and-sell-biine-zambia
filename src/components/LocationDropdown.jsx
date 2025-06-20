import React from "react";

const cities = [
  "Lusaka",
  "Kitwe",
  "Ndola",
  "Kabwe",
  "Chingola",
  "Mufulira",
  "Luanshya",
  "Livingstone",
  "Kasama",
  "Chipata",
  "Kalulushi",
  "Mazabuka",
  "Chililabombwe",
  "Mongu",
  "Kafue",
  "Choma",
  "Mansa",
  "Monze",
];

export default function Location({ selectedLocation, onSelect }) {
  return (
    <select
      className="px-4 py-2 rounded shadow text-black w-full sm:w-auto"
      value={selectedLocation || ""}
      onChange={(e) => onSelect(e.target.value === "All Locations" ? null : e.target.value)}
    >
      <option>All Locations</option>
      {cities.map((city) => (
        <option key={city}>{city}</option>
      ))}
    </select>
  );
}

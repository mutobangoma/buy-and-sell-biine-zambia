import { MapPin, Building2, Globe } from "lucide-react";

const locationIcons = {
  Lusaka: MapPin,
  Kitwe: Building2,
  Ndola: Globe,
  // Add more mappings or use fallback
};

export default function LocationGrid({ locations, selectedLocation, onSelect }) {
  return (
    <section className="py-6 px-4 md:px-8">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">Browse by Location</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {locations.map((location, idx) => {
          const Icon = locationIcons[location] || MapPin;
          return (
            <button
              key={idx}
              onClick={() => onSelect(location)}
              className={`bg-white p-3 sm:p-4 rounded-lg shadow text-center text-sm sm:text-base transition duration-200 ${
                selectedLocation === location ? "border-2 border-green-500" : "hover:bg-green-50"
              }`}
            >
              <Icon className="mx-auto mb-1 text-xl" />
              <span className="block font-medium">{location}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default function Location({ selectedLocation, onSelect, locations = [] }) {
  return (
    <select
      className="px-4 py-2 rounded shadow text-black w-full sm:w-auto"
      value={selectedLocation || ""}
      onChange={(e) =>
        onSelect(e.target.value === "All Locations" ? null : e.target.value)
      }
    >
      <option>All Locations</option>
      {locations.map((loc, i) => (
        <option key={i}>{loc}</option>
      ))}
    </select>
  );
}

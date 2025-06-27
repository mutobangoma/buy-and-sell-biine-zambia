import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const mockAds = [
  { id: 1, title: 'Toyota Corolla', category: 'Vehicles' },
  { id: 2, title: 'iPhone 13', category: 'Electronics' },
  { id: 3, title: 'Wooden Table', category: 'Furniture' },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filtered = mockAds.filter(ad =>
      ad.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="space-y-2">
          {results.map(ad => (
            <li key={ad.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{ad.title}</h3>
              <p className="text-sm text-gray-600">Category: {ad.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

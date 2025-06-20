import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Directory() {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catSnap = await getDocs(collection(db, "categories"));
        const locSnap = await getDocs(collection(db, "locations"));

        const catList = catSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const locList = locSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCategories(catList);
        setLocations(locList);
      } catch (err) {
        console.error("Error fetching data from Firestore:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Categories</h2>
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      )}

      <h2 style={{ marginTop: "2rem" }}>Locations</h2>
      {locations.length === 0 ? (
        <p>No locations found.</p>
      ) : (
        <ul>
          {locations.map((loc) => (
            <li key={loc.id}>{loc.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

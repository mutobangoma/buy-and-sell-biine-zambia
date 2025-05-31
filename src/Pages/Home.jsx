// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ads"));
        const listings = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAds(listings);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Latest Ads</h1>
      <div className="grid gap-4">
        {ads.map(ad => (
          <div key={ad.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{ad.title}</h2>
            <p>{ad.description}</p>
            <p className="text-sm text-gray-500">Price: ${ad.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

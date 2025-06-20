import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AdDetails() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const fetchAd = async () => {
      const docRef = doc(db, "ads", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAd({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchAd();
  }, [id]);

  if (!ad) return <p className="p-4">Loading ad details...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img
        src={ad.image || "https://via.placeholder.com/800x400"}
        alt={ad.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{ad.title}</h1>
      <p className="text-green-600 text-xl mb-1">{ad.price}</p>
      <p className="text-sm text-gray-500 mb-4">{ad.location}</p>
      <div>{ad.description}</div>
    </div>
  );
}

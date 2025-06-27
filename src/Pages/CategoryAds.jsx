import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import AdCard from "../components/AdCard";
import NoAdsFound from '../components/NoAdsFound';

function CategoryAds() {
  const { category, subcategory } = useParams();
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const adsRef = collection(db, 'ads');
        const q = query(
          adsRef,
          where('category', '==', category),
          where('subcategory', '==', subcategory)
        );
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAds(results);
      } catch (err) {
        console.error('❌ Error fetching filtered ads:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, [category, subcategory]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Ads in {category} › {subcategory}
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Browse the latest ads in this category.
      </p>
      {loading ? (
        <p>Loading ads...</p>
      ) : ads.length === 0 ? (
        <NoAdsFound />  // ✅ Use fallback here
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ads.map(ad => (
            <AdCard key={ad.id} ad={ad} />              
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryAds;

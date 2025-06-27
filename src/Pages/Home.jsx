import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import AdGrid from "../components/AdGrid";
import CategoryGridPills from "../components/CategoryGridPills"; // New pills component
import SubCategoryGrid from "../components/SubCategoryGrid";
import HeroCarousel from "../components/HeroCarousel";

function Home() {
  const [ads, setAds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [promotedCategories, setPromotedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [subcategoriesByCategory, setSubcategoriesByCategory] = useState({});
  const [adCounts, setAdCounts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adsSnapshot = await getDocs(collection(db, "ads"));
        const adsData = adsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAds(adsData);

        const subs = {};
        const counts = {};

        adsData.forEach(ad => {
          if (!ad.category || !ad.subcategory) return;

          if (!subs[ad.category]) subs[ad.category] = new Set();
          subs[ad.category].add(ad.subcategory);

          if (!counts[ad.category]) counts[ad.category] = {};
          if (!counts[ad.category][ad.subcategory]) counts[ad.category][ad.subcategory] = 0;
          counts[ad.category][ad.subcategory]++;
        });

        const finalSubs = {};
        for (const cat in subs) {
          finalSubs[cat] = Array.from(subs[cat]).map(name => ({ name }));
        }

        setSubcategoriesByCategory(finalSubs);
        setAdCounts(counts);

        const catSnapshot = await getDocs(collection(db, "categories"));
        const allCategories = catSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCategories(allCategories);
        setPromotedCategories(allCategories.filter(cat => cat.promoted));

      } catch (error) {
        console.error("❌ Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredAds = ads
    .filter(ad => !selectedCategory || ad.category === selectedCategory)
    .filter(ad => !selectedSubcategory || ad.subcategory === selectedSubcategory);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <HeroCarousel />

      {/* Ad placeholder box or real AdSense component */}
      <div className="px-4 py-6 sm:px-8 flex justify-center">
        {import.meta.env.DEV ? (
          <div className="w-full h-20 bg-gray-200 border border-gray-300 rounded text-center text-gray-600 flex items-center justify-center">
            Ad slot placeholder (visible only during development)
          </div>
        ) : (
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-5658209077209925"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        )}
      </div>

      {promotedCategories.length > 0 && (
        <section className="py-4 px-4 md:px-8">
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">🌟 Top Categories</h3>
            <CategoryGridPills
              categories={promotedCategories}
              adCounts={adCounts}
            />
          </div>
        </section>
      )}

      <CategoryGridPills
        categories={categories}
        adCounts={adCounts}
      />

      {selectedCategory && (
        <div className="py-4 px-2 sm:px-6 md:px-8">
          <SubCategoryGrid
            subcategories={subcategoriesByCategory[selectedCategory]}
            selectedSubcategory={selectedSubcategory}
            onSelect={setSelectedSubcategory}
          />
        </div>
      )}

      <section className="px-2 sm:px-6 md:px-8 py-8">
        {filteredAds.length > 0 ? (
          <AdGrid ads={filteredAds} loading={false} />
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              No ads found for the selected filters.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import HeroCarousel from "../components/HeroCarousel";
import HeroSection from "../components/HeroSection";
import CategoryGrid from "../components/CategoryGrid";
import SubCategoryGrid from "../components/SubCategoryGrid";
import AdGrid from "../components/AdGrid";

function Home() {
  const [ads, setAds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [subcategoriesByCategory, setSubcategoriesByCategory] = useState({});

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ads"));
        const adsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAds(adsData);

        // Group subcategories by category
        const subs = {};
        adsData.forEach((ad) => {
          if (!ad.category || !ad.subcategory) return;
          if (!subs[ad.category]) subs[ad.category] = new Set();
          subs[ad.category].add(ad.subcategory);
        });

        const finalSubs = {};
        for (const cat in subs) {
          finalSubs[cat] = Array.from(subs[cat]).map((name) => ({ name }));
        }

        setSubcategoriesByCategory(finalSubs);
      } catch (error) {
        console.error("Failed to fetch ads:", error);
      }
    };

    fetchAds();
  }, []);

  const filteredAds = ads
    .filter((ad) => !selectedCategory || ad.category === selectedCategory)
    .filter((ad) => !selectedSubcategory || ad.subcategory === selectedSubcategory)
    .filter((ad) => !selectedLocation || ad.location === selectedLocation);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <HeroCarousel />

      <HeroSection
        categories={Object.keys(subcategoriesByCategory).map((name) => ({ name }))}
        selectedCategory={selectedCategory}
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setSelectedSubcategory(null);
        }}
        selectedLocation={selectedLocation}
        onLocationSelect={setSelectedLocation}
        locations={[
          "Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola", "Mufulira",
          "Choma", "Livingstone", "Solwezi", "Mazabuka", "Kasama", "Chipata",
        ]}
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

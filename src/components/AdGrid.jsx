import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AdCard from "./AdCard";

export default function AdGrid({ ads, loading }) {
  if (loading) return <p className="text-center py-6">Loading ads...</p>;
  if (ads.length === 0) {
    return <p className="px-4 text-gray-600">Post A Free Ad! to over 10 million Online Users!</p>;
  }

  return (
    <section className="py-6 px-4 md:px-8">
      <h2 className="text-xl font-semibold mb-4">Latest Ads</h2>

      {/* Carousel for mobile, grid for desktop */}
      <div className="block md:hidden">
        <Swiper spaceBetween={16} slidesPerView={1.1}>
          {ads.map((ad) => (
            <SwiperSlide key={ad.id}>
              <AdCard ad={ad} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad) => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </div>
    </section>
  );
}

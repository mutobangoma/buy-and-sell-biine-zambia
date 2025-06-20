// components/HeroCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  {
    id: 1,
    title: "Biine is your local marketplace.",
    subtitle: "Browse Ads, Buy & Sell",
    imageUrl: "/assets/img/hero-1.jpg",
  },
  {
    id: 2,
    title: "Promote your services!",
    subtitle: "Contractors, Mechanics, Services.",
    imageUrl: "/assets/img/hero-2.jpg",
  },
  {
    id: 3,
    title: "Get the best deals in your area.",
    subtitle: "Ka Biine Pafupi.",
    imageUrl: "/assets/img/hero-3.jpg",
  },
  {
    id: 4,
    title: "Freshest produce, groceries, and more.",
    subtitle: "Direct from the farm to your table.",
    imageUrl: "/assets/img/hero-4.jpg",
  },
  {
    id: 5,
    title: "Combining Latest Tech with Traditional Markets.",
    subtitle: "Sell Fast & Reliable...",
    imageUrl: "/assets/img/hero-5.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-72 sm:h-96 mb-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/40 flex flex-col justify-start items-start text-left p-4 font-mulish">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">{slide.title}
                </h1>
                <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-white drop-shadow-md">{slide.subtitle}
                </p>
              </div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

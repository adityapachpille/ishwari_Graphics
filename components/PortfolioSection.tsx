'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function PortfolioSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // mobile view
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet view
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const images = [
    '/portfolio/portfolio1.jpg',
    '/portfolio/portfolio2.jpg',
    '/portfolio/portfolio3.jpg',
    '/portfolio/portfolio4.jpg',
    '/portfolio/portfolio5.jpg',
    '/portfolio/portfolio6.jpg',
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Portfolio</h2>
        <Slider {...settings}>
          {images.map((imgSrc, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={`Portfolio ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
} 
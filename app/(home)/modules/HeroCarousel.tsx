"use client";

import Overlay from "@/components/Overlay";
import Image from "next/image";
import React, { useEffect } from "react";

const images = ["/parapija.jpg", "/hero2.jpg", "/hero3.jpg"];

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentIndex] = React.useState(0);

  const handleImageChange = (newIndex: number) => {
    if (newIndex !== currentImageIndex) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentImageIndex]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-1000
                         ${
                           index === currentImageIndex
                             ? "opacity-100 scale-105"
                             : "opacity-0 scale-100"
                         }`}
          >
            <Image
              src={img}
              alt={`Carousel Image ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === currentImageIndex}
            />
          </div>
        ))}
      </div>
      <Overlay />
    </>
  );
};

export default HeroCarousel;

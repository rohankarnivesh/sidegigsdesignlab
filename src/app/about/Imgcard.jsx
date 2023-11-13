"use client"
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


   
export default function Imgcard() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
      };
    
      const images = [
        'https://res.cloudinary.com/dwevgksvg/image/upload/v1699893597/sidegigs/p87wcyqmcgtfnpizru34.png',
        'https://res.cloudinary.com/dwevgksvg/image/upload/v1699893597/sidegigs/amjr4emt96bjnnjjwtcy.png',
        'https://res.cloudinary.com/dwevgksvg/image/upload/v1699893597/sidegigs/lwec5htclriohb0qpe9h.png',
        'https://res.cloudinary.com/dwevgksvg/image/upload/v1699893596/sidegigs/du0dr4s7nxvewe8hazx8.png',
      ];
  return (
    <Slider {...settings}>
    {images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Slide ${index + 1}`} />
      </div>
    ))}
  </Slider>
  );
};

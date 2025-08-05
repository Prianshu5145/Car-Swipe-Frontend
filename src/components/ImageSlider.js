import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  // Image arrays for mobile and laptop views
  const mobileImages = [
    'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750066393/family-vacation-holiday-happy-family-road-trip-their-car-mom-driving-car-while-her-daughter-sitting-beside-mom-daughter-are-traveling-summer-ride-by-automobile_idsken.jpg',
    'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750066581/smiley-couple-traveling-by-car_v6k8gt.jpg',
    'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750066864/young-handsome-man-sitting-car_wkrgwz.jpg'
  ]

  const laptopImages = [
    'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750058374/freepik__enhance__80738_sazhfd.png',
   'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750058548/freepik__enhance__80744_ulxrgt.png',
   'https://res.cloudinary.com/dztz5ltuq/image/upload/v1750058826/freepik__enhance__90949_vluflh.png'
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Automatically change the image every 1.7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (isMobile ? mobileImages.length : laptopImages.length));
    }, 1700);

    return () => clearInterval(interval);
  }, [isMobile, mobileImages.length, laptopImages.length]);

  // Detect if the screen size changes to switch between mobile and laptop images
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentImage = isMobile ? mobileImages[currentImageIndex] : laptopImages[currentImageIndex];

  return (
    <div className="relative w-full h-84 lg:h-[64vh] lg:w-full overflow-hidden rounded-sm">
      {/* Image slider */}
      <img
        src={currentImage}
        alt="Slideshow"
        className="w-full h-full object-cover transition-all duration-450 ease-in-out"
      />

      {/* Pagination indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
        {(isMobile ? mobileImages : laptopImages).map((_, index) => (
          <span
            key={index}
            className={`w-1 h-1 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

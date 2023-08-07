import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; 
import breakfast from '../assets/breakfast.jpg'; 
import development from '../assets/development.jpg';
import meeting from '../assets/meeting.jpg';
import play from '../assets/play.jpg';

const ImageCarousel = () => {
  const images = [
    breakfast,
    development,
    meeting,
    play
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-carousel">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        selectedItem={activeIndex}
        interval={null} 
      >
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

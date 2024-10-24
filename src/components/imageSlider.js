import React, { useRef } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Pic from '../assets/pizzaLeft.jpg';




const slideImage = [
  { src: Pic, alt: 'Pizza Variety 1' },
  
 
];

const ImageSlider = () => {
  const zoomRef = useRef();  

  const goToPrev = () => {
    if (zoomRef.current) {
      zoomRef.current.goToPrev();
    }
  };

  const goToNext = () => {
    if (zoomRef.current) {
      zoomRef.current.goToNext();
    }
  };

  return (
    <div className='slider-wrapper'>
      <Zoom ref={zoomRef} scale={1.05} autoplay={true} duration={3000} infinite={true}>
        {slideImage.map((image, index) => (
          <div key={index} className='each-slide'>
            <img src={image.src} alt={image.alt} className='slider-image' />
           
          </div>
        ))}
      </Zoom>

    
      <div className="prev" onClick={goToPrev}>&#10094;</div>
      <div className="next" onClick={goToNext}>&#10095;</div>
    </div>
  );
};

export default ImageSlider;

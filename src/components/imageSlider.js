import React, { useRef } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Pic from '../assets/pizzaLeft.jpg';
import Pic2 from '../assets/pedrotechspecial.jpg';
import Pic3 from '../assets/pizza4.jpg';
import Pic4 from '../assets/pizza5.jpg';
import Pic5 from '../assets/pizza6.jpg';



const slideImage = [
  { src: Pic, alt: 'Pizza Variety 1' },
  { src: Pic2, alt: 'Pizza Variety 2' },
  { src: Pic3, alt: 'Pizza Variety 3' },
  { src: Pic4, alt: 'Pizza Variety 4' },
  { src: Pic5, alt: 'Pizza Variety 5' },

 
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

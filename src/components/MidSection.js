import React from 'react';
import ImageSlider from './imageSlider';
import '../styles/MidSection.css';
const MidSection = () => {
  return (
    <div className='MidSection'>
      <ImageSlider/>
      <button className='OrderBtn'>ORDER NOW!</button>
    </div>
  );
};


export default MidSection;

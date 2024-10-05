import React from'react';
import Pic from '../assets/pizzaLeft.jpg';
import '../styles/MidSection.css'
const MidSection = () => {
    return (
      <div className='MidSection'>
        <div>
            <img src={Pic} alt='PizzaLogo'/>
            <button className='Btn'>ORDER NOW!</button>
        </div>
      </div>
    )
  }
  
  export default MidSection;
  
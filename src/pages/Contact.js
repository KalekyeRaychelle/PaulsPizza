import React, { useState } from 'react';
import Pic from '../assets/makingpizza.jpeg';
import '../styles/Contact.css';
import Transitions from '../components/Transitions';

const Contact = () => {
  const [shake, setShake] = useState(false);

  const handleImageClick = () => {
    setShake(true); 

    
    setTimeout(() => {
      setShake(false);
    }, 500);
  };

  return (
    <Transitions>
    <div className='Contact'>
      <div className='contactLeftSide'>
        <img
          src={Pic}
          alt='PizzaLogo'
          className={shake ? 'shake' : ''} 
          onClick={handleImageClick} 
        />
      </div>
      <div className='rightSide'>
        <form>
          <p>CONTACT US ON: </p>
          <label>Full Name:</label>
          <input />
          <label>Email:</label>
          <input />
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </Transitions>
  );
 
};

export default Contact;

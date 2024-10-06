import React from 'react'
import Pic from '../assets/makingPizza.jpeg';
const Contact = () => {
  return (
    <div className='Contact'>
      <div className='leftSide'>
      <img src={Pic} alt='PizzaLogo'/>
      </div>
      <div className='rightSide'>
            <form>
                <label>Full Name:</label>
                <input/>
                <label>Email:</label>
                <input/>
                <label htmlFor="message">Message</label>
                <textarea
                rows="6"
                placeholder="Enter message..."
                name="message"
                required> </textarea>
                <button type="submit"> Send Message</button>
               
            </form>

      </div>
    </div>
  )
}

export default Contact

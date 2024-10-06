
import React from 'react'
import '../styles/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
     <div className='leftSide'>
        <p>PAUL'S PIZZA &copy; {new Date().getFullYear()}</p>
     </div>

      <div className='midSide'>
        <button>RESERVE NOW!</button>
      </div>
    </div>
  )
}
export default Footer;
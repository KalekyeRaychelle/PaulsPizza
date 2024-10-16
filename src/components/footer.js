import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Font Awesome Icons

const Footer = () => {
  return (
    <div className="footer">
     
      <div className="leftSide">
        <p>PAUL'S PIZZA &copy; {new Date().getFullYear()}</p>
      </div>

   
      <div className="midSide">
        <button>RESERVE NOW!</button>
      </div>

      <div className="rightSide">
      
        <div className="socialLinks">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

     

        {/* Links to Policies */}
        <div className="policies">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

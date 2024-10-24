import React from 'react';
import '../styles/About.css';
import Transitions from '../components/Transitions';
import aboutPic from '../assets/picturetwo.webp';
import aboutPic2 from '../assets/aboutPic.jpg';
import aboutPic3 from '../assets/toppictureabout.jpg';
const About = () => {
  return (
    <Transitions>
      <div class='About'>
      <div className='section1'>
      
    
    <div className='shortDescription'>
      <h3>About us</h3>
   
        <p>
        At Paul’s Pizza, we are more than just a restaurant – we are a family tradition, a gathering spot, 
        and a celebration of authentic, hand-crafted pizzas made with love. Located in the heart of the community,
         we’ve been serving up delicious slices of happiness for over 30 years, always using the freshest
          ingredients and staying true to our family’s time-honored recipes. Whether it’s the aroma 
          of our stone-baked crust, the perfect blend of bubbling cheeses, or the tang of our signature sauce, 
          each bite takes you on a journey. Whether you’re grabbing a quick bite, celebrating a milestone,
           or simply sharing moments with loved ones, Paul’s Pizza is where every slice tells a story. 
           Come taste the tradition that has brought generations together.
        </p>
        <button>RESERVE NOW!</button>


    </div>
    <div className='aboutPic'>
        <img src={aboutPic} alt='About '/>
    </div>
      </div>
    <div className='section2'>
      <div className='aboutPic2'>
        <img src={aboutPic2} alt='section2'/>
      </div>
      <div className='history'>
          <h3>Our History</h3>
          <p className='historyP1'>
          Paul’s Pizza was born in 1990, out of a dream shared by Muema and Paul,
          a couple passionate about good food and family. Paul, originally a baker,
          perfected his dough recipe over the years while Maria experimented with sauces
          and toppings in their kitchen. What began as small, intimate family gatherings
          around their kitchen table soon turned into neighborhood pizza nights, with friends
          and family lining up for a taste.

          </p>
          <p>
          Seeing the smiles and joy their food brought to others, Paul and Muema decided to open
          their very own pizzeria. The restaurant became an instant hit, loved for its warm, 
          welcoming environment and, of course, its mouth-watering pizzas. Over the years, 
          the pizzeria grew, but its heart remained the same – a place where every customer was 
          treated like family. Paul and Maria passed down their passion to their children,
          Kamene and Mitchelle, who now run the restaurant with the same dedication and love that
            started it all.
          </p>
          
      </div>
    </div>
   
    <h3>Our mission and values</h3>
      <div className='Mission'>
        
       <p className='missionP1'>
       At Paul’s Pizza, we are on a mission to serve great food, but more than that,
        we aim to create lasting memories. We believe in the power of community and connection, 
        and food is our way of bringing people together. Our values are rooted in quality, 
        integrity, and care – from the ingredients we use to the way we treat our customers and
        staff. We believe that every meal shared at Paul’s Pizza should be an experience filled 
        with warmth, flavor, and love.
       </p>
       <p>
       Our pizzas are made fresh daily, using locally-sourced produce and the finest ingredients.
        Whether it’s hand-pulling mozzarella or simmering our signature tomato sauce for hours, 
        every step is taken with attention to detail and respect for the craft of pizza-making.
       </p>
      </div>
      <div className='section3'>
      <img src={aboutPic3} alt='about'/>
      <div className='community'>
        <h3>
          Community and giving back
        </h3>
        <p>
        Paul’s Pizza has always believed in giving back to the community that helped build it.
        Over the years, we’ve sponsored local school events, organized pizza nights to raise 
        funds for local charities, and donated meals to frontline workers. Our commitment to
        being a positive force in the community extends beyond serving great pizza – it’s about
        being there for the people who have supported us since day one.
        </p>
        <p>
        As a family-owned business, we believe that our success is deeply tied to the well-being 
        of our neighborhood. That’s why we’re always looking for new ways to give back, whether 
        through hosting community events or supporting local causes.
        </p>
      </div>
      </div>
      
    <h3>Customer testimonials</h3>
      <div className='testimonials'>
        
        <p>"Our family has been coming to Paul’s Pizza for over a decade, and we’ve never been 
          disappointed. The food is amazing, but what keeps us coming back is the warm, 
          family-friendly atmosphere. We always feel like we’re part of something special here."
          
           – The Williams Family</p>
        <p>
        "I love Paul’s Pizza because it’s more than just a pizza joint – it’s a community spot.
         You can feel the love in every slice, and the staff always go above and beyond to make
          your visit memorable."
           – Sarah T.
        </p>
      </div>
      
    </div>
    </Transitions>
  )
 
}

export default About

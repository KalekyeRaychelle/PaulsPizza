import React from 'react'
import {motion} from 'framer-motion'
const Transitions = ({children}) => {
  /*const opacityAnimation={
    initial:{ opacity:0,
         
      },
     animate:{
       opacity:1,
      
     },
     exit:{
       opacity:0,
       
     },
  }*/
  const rotateAnimation={
    initial:{ 
      rotateY:90,
         
      },
     animate:{
       rotateY:0,
      
     },
     exit:{
       rotateY:-90,
       
     },
  }
  return (
    <motion.div 
    className='page'
    
    transition={{
      ease:'easeInOut',
      duration:1,

    }}
    variants={
      rotateAnimation
    }
    initial='initial'
    animate='animate'
    exit='exit'
    >
    <div>
      
    </div>
    {children}
    </motion.div>
  )
}

export default Transitions

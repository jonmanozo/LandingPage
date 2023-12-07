import React from 'react'
import {motion} from 'framer-motion'

const sliderVariant = {
  initial: {
    x:0,
  },
  animate: {
    x: "-110%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 13,
    },
  },
};

const textVariant = {
    initial: {
      x:500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition:{
        duration:1.5,
        staggerChildren: 0.1,
      },
    },

};



export default function YowIam() {
  return (
    <>
      
      <section className=''>
        <div id="Iam" className="flex justify-center w-[100%] h-[100%]  bg-black pt-14 max-notebook:pt-5">
        <div   className="flex w-[80%] h-[100%] max-laptop:w-[90%]">

            <motion.div className="flex w-[50%] h-[55vw]  min-w-[100px] z-1 max-laptop:w-[45%]"><img src="/images/intro.png" alt="Image" className=''/></motion.div>
            <motion.div className="flex  w-[45%] text-white max-laptop:w-[55%] "
              variants={textVariant}
              initial="initial"
              animate="animate"
            >
                <motion.div class="flex flex-col w-[100%] mt-[10vw] ml-20 max-notebook:ml-10 " variants={textVariant}>
                    <motion.div class="text-[5vw] font-bold max-laptop:text-[4vw]" variants={textVariant}><span>YOW!</span></motion.div>
                    <motion.div class="text-[5vw] font-bold max-laptop:text-[4vw] max-laptop:-mt-2 -mt-6 " variants={textVariant}>I AM  ALJON</motion.div>
                    <motion.div class="text-[5vw] font-bold max-laptop:text-[4vw] max-laptop:-mt-2 -mt-6 text-gray-500" variants={textVariant}><strong className='text-red text-[4vw] animate-pulse -z-2'>FULL STACK</strong></motion.div>
                    <motion.div class="text-[2vw] font-bold max-laptop:text-[1vw] max-laptop:-mt-2 -mt-6  text-gray-500" variants={textVariant}><strong className='text-gray-500 text-[3vw] animate-pulse -z-2'>WEB DEVELOPER</strong></motion.div>
                </motion.div>
            </motion.div>
            
  
        </div>    
        
      </div>  
      </section>  
      <motion.div className="flex  text-[13vw] font-bold mt-[-20vw] whitespace-nowrap z-0 text-gray-500 text-opacity-5 "  
            variants={sliderVariant}
            initial="initial"
            animate="animate">
              Creative Fullstack / FrontEnd</motion.div>    
    
    </> 
    
)
}

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
      
      <section className='border-red border-2'>
        <div id="Iam" className="flex justify-center w-[100%] h-[100vh]  bg-black mt-14">
        <div className="flex w-[80%]">

            <motion.div className="flex mt-auto w-[50%] h-[100%] max-h-[1000px] min-w-[700px] z-1"><img src="/images/intro.png" alt="Image" /></motion.div>
            <motion.div className="flex items-center w-[45%] text-white "
              variants={textVariant}
              initial="initial"
              animate="animate"
            >
                <motion.div class="flex flex-col h-[400px] w-[100%] ml-20 -mt-40" variants={textVariant}>
                    <motion.div class="text-[5vw] font-bold" variants={textVariant}><span>YOW!</span></motion.div>
                    <motion.div class="text-[5vw] font-bold -mt-6" variants={textVariant}>I AM  ALJON</motion.div>
                    <motion.div class="text-[5vw] font-bold text-gray-500 -mt-6" variants={textVariant}><strong className='text-red text-[4vw] animate-pulse -z-2'>FULL STACK</strong></motion.div>
                    <motion.div class="text-[2vw] font-bold text-gray-500 -mt-6" variants={textVariant}><strong className='text-gray-500 text-[2.2vw] animate-pulse -z-2'>/ FRONTEND DEVELOPER</strong></motion.div>
                </motion.div>
            </motion.div>
            
        <motion.div className=" absolute text-[30vh] font-bold -bottom-20 whitespace-nowrap z-0 text-gray-500 text-opacity-5 "  
            variants={sliderVariant}
            initial="initial"
            animate="animate">
              Creative Fullstack / FrontEnd</motion.div>  
        </div>    
        
      </div>  
      </section>    
    
    </> 
    
)
}

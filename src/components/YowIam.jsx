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


const HeroImageVariant = {
  initial: {
    x:0,
    opacity: 0,
  },
  animate: {
    rotate: 360,
    opacity: 1,
    transition:{
      duration:2,
    },
  },
};

const HeroMainImageVariant = {
  initial: {
    x:0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition:{
      duration:2,
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

           
            <motion.div className="flex  w-[50%] text-white max-laptop:w-[55%]"
              variants={textVariant}
              initial="initial"
              animate="animate"
            >
                <motion.div class="flex flex-col w-[100%] mt-[10vw] max-notebook:ml-10 " variants={textVariant}>
                    <motion.div class="text-[2vw] font-bold" variants={textVariant}><span>Yow! I am </span></motion.div>
                    <motion.div class="text-[4vw] font-bold max-laptop:text-[4vw]" variants={textVariant}><span>Aljon Mañozo</span></motion.div>
                    <motion.div class="text-[2.5vw] mb-4 max-laptop:text-[3vw] text-red  font-extrabold " variants={textVariant}><span>FRONTEND <span className='text-gray-400'>DEVELOPER</span></span></motion.div>
                    <motion.div className="pr-20 text-[1vw] max-laptop:text-[1.6vw]" variants={textVariant}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit quasi pariatur deleniti modi, 
                    sit minima vitae neque ullam blanditiis, eligendi commodi explicabo fuga dolorem iste doloribus atque repellendus nisi.</motion.div>
                    <motion.div className="flex gap-10 mt-10">
                        <motion.button variants={textVariant} className=" border-4 text-gray-400 font-bold border-gray-400 w-[200px] rounded-md">DOWNLOAD MY CV</motion.button>
                        <motion.button variants={textVariant} className="bg-red font-extrabold text-black w-[200px] py-2 rounded-md">HIRE ME</motion.button>
                       

                    </motion.div>
                </motion.div>
                   
  
            </motion.div>
            <motion.div variants={HeroImageVariant}  className="flex w-[50%] mt-[-50px]  min-w-[100px] z-1 max-laptop:w-[45%]">
              
            <motion.img   src="/images/heromainimage.png" alt="Image" className='z-1'/>
            <motion.img variants={HeroImageVariant}  initial="initial"
              animate="animate"  src="/images/heroimageback.png" alt="Image" className='ml-[-100%]'/>
            </motion.div>
         
        </div>  

        
      </div>  
      </section>  
    
    </> 
    
)
}

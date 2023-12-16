import React from 'react'
import {motion}  from 'framer-motion'

export default function Navbar() {
  

const textVariant = {
  initial: {
    y:-100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration:1.5,
      staggerChildren: 0.1,
    },
  },

};


  return (
    <>
      <motion.div className="fixed flex justify-center items-center w-[100%] py-2 bg-black z-20 max-minitab:h-5">
            <motion.div         
              variants={textVariant}
              initial="initial"
              animate="animate" className="flex w-[80%] text-white">

                <motion.div  variants={textVariant} className="w-[50%] flex  text-[30px] font-bold  max-notebook:text-[20px]"><h1  className='text-red'>ALJON MAÑOZO</h1></motion.div>
                <motion.div variants={textVariant} className='flex w-[50%] max-notebook:hidden'>
                  <motion.div variants={textVariant} className="w-[25%] flex items-center justify-center font-bold "><a href="#Iam" className='NavLinkhover'>WHO AM I</a></motion.div>
                  <motion.div variants={textVariant} className="w-[25%] flex items-center justify-center font-bold "><a href="#Projects"  className='NavLinkhover'>PROJECTS</a></motion.div>
                  <motion.div variants={textVariant} className="w-[25%] flex items-center justify-center font-bold "><a href="#CanDo"  className='NavLinkhover'>CAN DO</a></motion.div>
                  <motion.div variants={textVariant} className="w-[25%] flex items-center justify-center font-bold "><a href="#Contact"  className='NavLinkhover'>CONTACT</a></motion.div>
                </motion.div>
            </motion.div>
      </motion.div>
    
    </>
  )
}

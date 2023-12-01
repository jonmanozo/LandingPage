import React from 'react'
import {motion} from 'framer-motion'


const textVariant = {
  initial: {
    x:500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren: 0.3,
    },
  },

};


const textVariant2 = {
  initial: {
    x:-500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    },
  },

};




export default function Projects() {
  return (
    <>
    
      <section>
        <div id="Projects" className="flex justify-center w-[100%] h-[100vh] bg-black">

            <div className="flex justify-evenly items-center w-[80%]">
                <motion.div 
                  className="flex w-[40%] h-[500px] rounded-xl bg-gray-500"
                  initial={{opacity: 0, scale: 0.5}}
                  whileInView={{opacity: 1, scale: 1, x:10, y:10}}
                  whileHover={{rotate: 10}}
                  transition={{duration: 0.8}}
                >

                </motion.div>

                <div className="flex w-[50%] h-[500px]">
                <motion.div className="flex flex-col justify-center w-100 text-gray-300 pl-10"
                      variants={textVariant}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div className='text-[60px] font-bold'  variants={textVariant}>EASYSHOP</motion.div>
                        <motion.p className='mt-8 text-[20px]'  variants={textVariant}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusantium commodi 
                          quod quasi fuga aliquam. Veniam eveniet quam sed, dolor error, voluptate non rem natus, 
                          repellat dolores fuga accusamus impedit!</motion.p>
                        <motion.button className='w-[200px] py-2 mt-8 font-bold rounded-lg bg-red'  variants={textVariant}>See Demo</motion.button>
                    </motion.div>
                </div>
            </div>

        </div>
      </section>


      <section>
        <div id="Projects" className="flex justify-center w-[100%] h-[100vh] bg-black">

            <div className="flex justify-evenly items-center w-[80%]">
              
            <div className="flex w-[50%] h-[500px]">
                    <motion.div className="flex flex-col justify-center items-end w-100 text-gray-300 pl-10"
                      variants={textVariant2}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div className='text-[60px] font-bold'  variants={textVariant2}>EASYSHOP</motion.div>
                        <motion.p className='mt-8 text-[20px] text-right'  variants={textVariant2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusantium commodi 
                          quod quasi fuga aliquam. Veniam eveniet quam sed, dolor error, voluptate non rem natus, 
                          repellat dolores fuga accusamus impedit!</motion.p>
                        <motion.button className='w-[200px] py-2 mt-8 font-bold rounded-lg bg-red'  variants={textVariant2}>See Demo</motion.button>
                    </motion.div>
                </div>

                <motion.div 
                  className="flex w-[40%] h-[500px] rounded-xl bg-gray-500"
                  initial={{opacity: 0, scale: 0.5}}
                  whileInView={{opacity: 1, scale: 1, x:10, y:10}}
                  whileHover={{rotate: 10}}
                  transition={{duration: 0.8}}
                >


                </motion.div>

            </div>

        </div>
      </section>


      <section>
        <div id="Projects" className="flex justify-center w-[100%] h-[100vh] bg-black">

            <div className="flex justify-evenly items-center w-[80%]">
            <motion.div 
                  className="flex w-[40%] h-[500px] rounded-xl bg-gray-500"
                  initial={{opacity: 0, scale: 0.5}}
                  whileInView={{opacity: 1, scale: 1, x:10, y:10}}
                  whileHover={{rotate: 10}}
                  transition={{duration: 0.8}}
                >

                </motion.div>

                <div className="flex w-[50%] h-[500px]">
                <motion.div className="flex flex-col justify-center w-100 text-gray-300 pl-10"
                      variants={textVariant}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div className='text-[60px] font-bold'  variants={textVariant}>EASYSHOP</motion.div>
                        <motion.p className='mt-8 text-[20px]'  variants={textVariant}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusantium commodi 
                          quod quasi fuga aliquam. Veniam eveniet quam sed, dolor error, voluptate non rem natus, 
                          repellat dolores fuga accusamus impedit!</motion.p>
                        <motion.button className='w-[200px] py-2 mt-8 font-bold rounded-lg bg-red'  variants={textVariant}>See Demo</motion.button>
                    </motion.div>
                </div>
            </div>

        </div>
      </section>


    </>
  )
}

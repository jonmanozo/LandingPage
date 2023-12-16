import React from 'react'
import {motion} from 'framer-motion'


const textVariant = {
  initial: {
    y:100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren: 0.3,
    },
  },

};


const textVariant2 = {
  initial: {
    y:100,
    opacity: 0,
  },
  animate: {
    y: 0,
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
    
      <section className='flex py-20 justify-center items-center  max-notebook:py-5'>
        <div id="Projects" className="flex justify-center w-[80%] h-[100%] bg-black">

            <div className="flex w-[100%] gap-20 max-minitab:flex-col max-minitab:mt-10">
                <motion.div 
                  className="flex w-[40%] m-0 py-10 max-notebook:w-[70%]"
                  initial={{opacity: 0, scale: 0.5}}
                  whileInView={{opacity: 1, scale: 1, x:10, y:10}}
                  transition={{duration: 0.8}}
                ><img src="/images/Easy1.jpg" alt="Image" className='w-[100%] bg-[#363539] rounded-xl pt-7 px-2 pb-2'/>

                </motion.div>

                <div className="flex w-[48%] h-[500px] max-notebook:w-[100%]">  
                <motion.div className="flex flex-col justify-center w-100 text-gray-300 pl-10 max-minitab:justify-normal"
                      variants={textVariant}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div className='text-[60px] font-bold text-red max-notebook:text-[30px] max-minitab:mt-10 max-minitab:text-center'  variants={textVariant}>EASYSHOP</motion.div>
                        <motion.p className='mt-8 text-[20px] max-notebook:text-[15px]'  variants={textVariant}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusantium commodi 
                          quod quasi fuga aliquam. Veniam eveniet quam sed, dolor error, voluptate non rem natus, 
                          repellat dolores fuga accusamus impedit!</motion.p>
                        <motion.button className='w-[200px] py-2 mt-8 font-bold rounded-lg bg-red max-minitab:m-auto '  variants={textVariant}>See Demo</motion.button>
                    </motion.div>
                </div>
            </div>

        </div>
      </section>
      
      <section className='flex py-20 justify-center items-center  max-notebook:py-5'>
        <div id="Projects" className="flex justify-center w-[80%] h-[100%] bg-black">

            <div className="flex w-[100%] gap-20 max-minitab:flex-col max-minitab:mt-10">

              
            <div className="flex text-right w-[48%] h-[500px] max-notebook:w-[100%]">  
                <motion.div className="flex flex-col justify-center w-100 text-gray-300 pl-10 max-minitab:justify-normal"
                      variants={textVariant2}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div className='text-[60px] font-bold max-notebook:text-[30px] max-minitab:mt-10 max-minitab:text-center'  variants={textVariant2}>EASYSHOP</motion.div>
                        <motion.p className='mt-8 text-[20px] max-notebook:text-[15px]'  variants={textVariant2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusantium commodi 
                          quod quasi fuga aliquam. Veniam eveniet quam sed, dolor error, voluptate non rem natus, 
                          repellat dolores fuga accusamus impedit!</motion.p>
                        <motion.button className='flex self-end justify-center w-[200px] py-2 mt-8 font-bold rounded-lg bg-red max-minitab:m-auto '  variants={textVariant2}>See Demo</motion.button>
                    </motion.div>
                </div>
                <motion.div 
                  className="flex w-[40%] m-0 py-10 max-notebook:w-[70%]"
                  initial={{opacity: 0, scale: 0.5}}
                  whileInView={{opacity: 1, scale: 1, x:10, y:10}}
                  transition={{duration: 0.8}}
                ><img src="/images/Easy1.jpg" alt="Image" className='w-[100%] bg-[#363539] rounded-xl pt-7 px-2 pb-2'/>

                </motion.div>

            </div>

        </div>
      </section>
      
      <section className='flex py-20 justify-center items-center  max-notebook:py-5'>
        <div id="Projects" className="flex justify-center w-[80%] h-[100%] bg-black">

            <div className="flex w-[100%] gap-20 max-minitab:flex-col max-minitab:mt-10">
                <motion.div 
                  className="flex w-[40%] m-0 py-10 max-notebook:w-[70%]"
                  initial={{opacity: 0, scale: 0.5}}
                  whileInView={{opacity: 1, scale: 1, x:10, y:10}}
                  transition={{duration: 0.8}}
                ><img src="/images/Easy1.jpg" alt="Image" className='w-[100%] bg-[#363539] rounded-xl pt-7 px-2 pb-2'/>

                </motion.div>

                <div className="flex w-[48%] h-[500px] max-notebook:w-[100%]">  
                <motion.div className="flex flex-col justify-center w-100 text-gray-300 pl-10 max-minitab:justify-normal"
                      variants={textVariant}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div className='text-[60px] font-bold max-notebook:text-[30px] max-minitab:mt-10 max-minitab:text-center'  variants={textVariant}>EASYSHOP</motion.div>
                        <motion.p className='mt-8 text-[20px] max-notebook:text-[15px]'  variants={textVariant}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusantium commodi 
                          quod quasi fuga aliquam. Veniam eveniet quam sed, dolor error, voluptate non rem natus, 
                          repellat dolores fuga accusamus impedit!</motion.p>
                        <motion.button className='w-[200px] py-2 mt-8 font-bold rounded-lg bg-red max-minitab:m-auto '  variants={textVariant}>See Demo</motion.button>
                    </motion.div>
                </div>
            </div>

        </div>
      </section>




    </>
  )
}

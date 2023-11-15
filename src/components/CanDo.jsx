import React from 'react'

export default function CanDo() {
  return (
    <>
        <div id="CanDo" className="flex justify-center w-[100%] h-[100vh] bg-darkgray">
          <div class="flex flex-col w-[55%] ">
              <h2 className='text-red font-bold text-[40px] mt-10'>I CAN</h2>
              <div class="w-[100%] h-[750px] overflow-y-auto pr-10">
                    <div class="flex  bg-backgray p-5 mt-5  hover-rotate"> 
                        
                        <div class="flex justify-center items-center w-[25%] h-[100%]">
                          <img src="/images/DevLogo.png" alt="" className='w-[50%] h-[50%]'/>
                        </div>
                        <div class="flex flex-col w-[80%]">
                            <div class="font-bold text-gray-400  text-[25px]">BACK END</div>
                            <p className='text-white text-[18px]'> I excel in backend development. With a solid grasp of 
                                server-side technologies and databases, I'm skilled at crafting efficient and reliable 
                                software systems. Let's create exceptional digital experiences together!
                            </p>
                        </div>
                    </div>
                    <div class="flex  bg-backgray p-5 mt-5  hover-rotate"> 
                        
                        <div class="flex justify-center items-center w-[25%] h-[100%]">
                          <img src="/images/DesignLogo.png" alt="" className='w-[50%] h-[50%]'/>
                        </div>
                        <div class="flex flex-col w-[80%]">
                            <div class="font-bold text-gray-400  text-[25px]">FRONT END</div>
                            <p className='text-white text-[18px]'> I'm a full stack developer with a passion for 
                                    creating captivating user interfaces. Proficient in HTML, CSS, and JavaScript, 
                                    I love turning design concepts into seamless and interactive web experiences. 
                                    Let's build something beautiful and user-friendly! 
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex  bg-backgray p-5 mt-5  hover-rotate"> 
                        
                        <div class="flex justify-center items-center w-[25%] h-[100%]">
                          <img src="/images/DatabaseLogo.png" alt="" className='w-[50%] h-[50%]'/>
                        </div>
                        <div class="flex flex-col w-[80%]">
                            <div class="font-bold text-gray-400  text-[25px]">DATABASE MANAGEMENT</div>
                            <p className='text-white text-[18px]'> I specialize in database management. With expertise in designing, 
                                    optimizing, and maintaining databases, I ensure seamless data organization 
                                    and retrieval. Let's harness the power of data to drive smarter decisions 
                                    and enhance your projects!
                            </p>
                        </div>
                    </div>
                    <div class="flex  bg-backgray p-5 mt-5  hover-rotate"> 
                        
                        <div class="flex justify-center items-center w-[25%] h-[100%]">
                          <img src="/images/GraphicLogo.png" alt="" className='w-[50%] h-[50%]'/>
                        </div>
                        <div class="flex flex-col w-[80%]">
                            <div class="font-bold text-gray-400  text-[25px]">GRAPHIC DESIGNING</div>
                            <p className='text-white text-[18px]'> a graphic designer with a flair for creativity and a strong command 
                                    of Adobe Photoshop. I love transforming ideas into stunning visuals, 
                                    whether it's designing logos, illustrations, or captivating graphics. 
                                    Let's bring your vision to life through the magic of design! 
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex  bg-backgray p-5 mt-5  hover-rotate"> 
                        
                        <div class="flex justify-center items-center w-[25%] h-[100%]">
                          <img src="/images/API-LOGO.png" alt="" className='w-[50%] h-[50%]'/>
                        </div>
                        <div class="flex flex-col w-[80%]">
                            <div class="font-bold text-gray-400  text-[25px]">API INTEGRATION</div>
                            <p className='text-white text-[18px]'>I specialize in API integration. I have a knack for seamlessly connecting 
                                    applications and services, enabling smooth data exchange and enhanced 
                                    functionality. Whether it's integrating third-party APIs or building 
                                    custom ones, I'm ready to streamline your digital ecosystem. Let's unlock 
                                    the full potential of your projects together!
                            </p>
                        </div>
                    </div>
                    

                    

                    

                    
                    
              </div>



          </div>

          <div class="flex  justify-center items-center w-[40%]">
              <div class=" flex justify-center items-center w-[80%]">
                  <img src="/images/darkprofile.png" alt="" className='flex w-[100%] h-[80%] bg-black'/>
              </div>
          </div>
         

        </div>
    </>
  )
}

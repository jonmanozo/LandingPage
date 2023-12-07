import React from 'react'

export default function CanDo() {
  return (
    <>
    <section className='flex py-20  bg-darkgray'>
        <div id="CanDo" className="flex justify-center flex-col w-[100%] h-[100%] ">
          
        <h2 className='flex w-[100%] justify-center text-red font-bold text-[40px] mt-10 mb-10'>I CAN DO</h2>
          <div class="flex w-[100%]">
              <div class="flex flex-wrap justify-evenly gap-10 w-[100%] pr-10 pl-10">

                    <div class="flex flex-col w-[25%] p-5 mt-5 rounded-lg hover-rotate bg-black py-10"> 
                        <div class="flex justify-center items-center">
                          <img src="/images/DevLogo.png" alt="" className='w-[100px] h-[100px]'/>
                        </div>
                        <div class="flex  justify-center font-bold text-gray-400 text-center  text-[25px] mt-10">BACK END</div>
               
                    </div>

                    <div class="flex flex-col w-[25%] p-5 mt-5 rounded-lg hover-rotate  bg-black py-10"> 
                        
                        <div class="flex justify-center items-center">
                          <img src="/images/DesignLogo.png" alt="" className='w-[100px] h-[100px]'/>
                        </div>
                        <div class="flex  justify-center font-bold text-gray-400 text-center  text-[25px] mt-10">FRONT END</div>
                     
                    </div>

                    <div class="flex flex-col w-[25%] p-5 mt-5 rounded-lg hover-rotate  bg-black py-10"> 
                        
                        <div class="flex justify-center items-center">
                          <img src="/images/DatabaseLogo.png" alt="" className='w-[100px] h-[100px]'/>
                        </div>
                        <div class="flex  justify-center font-bold text-gray-400 text-center text-[25px] mt-10">DATABASE MANAGEMENT</div>
               
                    </div>
                    <div class="flex flex-col w-[25%] p-5 mt-5 rounded-lg hover-rotate  bg-black py-10"> 
                        
                        <div class="flex justify-center items-center">
                          <img src="/images/GraphicLogo.png" alt="" className='w-[100px] h-[100px]'/>
                        </div>

                        <div class="flex  justify-center font-bold text-gray-400 text-center  text-[25px] mt-10">GRAPHIC DESIGNING</div>
                    
                    </div>
                    
                    <div class="flex flex-col w-[25%]  p-5 mt-5 rounded-lg hover-rotate  bg-black py-10"> 
                        
                        <div class="flex justify-center items-center">
                          <img src="/images/API-LOGO.png" alt="" className='w-[100px] h-[100px]'/>
                        </div>
                        <div class="flex  justify-center font-bold text-gray-400 text-center  text-[25px] mt-10">API INTEGRATION</div>
                    </div>
                    

                    

                    

                    
                    
              </div>



          </div>

 

        </div>
      </section>
    </>
  )
}

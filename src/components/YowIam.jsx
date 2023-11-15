import React from 'react'

export default function YowIam() {
  return (
    <>
      <div id="Iam" className="flex justify-center w-[100%] bg-black">
        <div className="flex w-[80%] mt-40">
            <div className="flex w-[45%]"><img src="/images/intro.png" alt="Image" /></div>
            <div className="flex justify-center items-center w-[45%] text-white">
                <div class="flex flex-col w-[100%]">
                    <div class="text-[80px] font-bold">YOW! I AM</div>
                    <div class="text-[90px] font-bold">ALJON</div>
                    <div class="text-[60px] font-bold text-gray-500"><strong className='text-red text-[80px] animate-pulse'>FULL STACK</strong> <br />WEB DEVELOPER</div>
                </div>
            </div>
        </div>      
      </div>      
    
    </> 
    
)
}

import React from 'react'

export default function Footer() {
  return (
    <>
     <section className='flex flex-col h-[700px] bg-black'>
         <div id="Contact" className="flex justify-center w-[100%] h-[700px]">
                <div className="flex justify-evenly w-[90%] h-[500px] mt-20"> 
                  <div className="flex flex-col w-[50%]">
                      <span className='text-[35px] text-red font-extrabold'>LETS TALK</span>
                      <form action="" className='ml-10 mt-10'>
                         <label for="input-label-with-helper-text" className="block text-sm font-medium mb-2 dark:text-white">Full Name</label>
                         <input type="text" id="input-label-with-helper-text" className="w-[70%] h-10 rounded-md pl-3" placeholder="Enter Full Name" aria-describedby="hs-input-helper-text" />
                         
                         <label for="input-label-with-helper-text" className="block text-sm font-medium mb-2 dark:text-white mt-5">Email</label>
                         <input type="email" id="input-label-with-helper-text" className="w-[70%] h-10 rounded-md pl-3" placeholder="you@site.com" aria-describedby="hs-input-helper-text" />
                         
                         <label for="input-label-with-helper-text" className="block text-sm font-medium dark:text-white  my-5">Message</label>
                         <textarea
                                id="message"
                                name="Message"
                                rows={3}
                                className=" shadow-md p-2 pl-3 h-[150px] w-[70%] border-gray-300 bg-gray-100 rounded block border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                      
                          <button className='w-[70%] bg-red py-3 rounded-lg mt-5 font-bold'>SEND MESSAGE</button>
                      </form>
                  </div>
                  <div className="flex w-[40%] "><span className='text-[35px] text-red font-extrabold'>FOLLOW ME ON</span></div>
                </div>
         </div>
         
         <div className="flex w-[100%] h-[70px] items-center justify-center font-extrabold text-lg bg-gray-700 text-black">Copyright &copy;  2023 </div>
      </section>
    </>
  )
}

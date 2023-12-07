import { Link } from 'react-router-dom'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ts5l2j', 'template_la3hhjv', form.current, 'iu_CXwVV7AzT83MBJ')
      .then((result) => {
          console.log(result.text);
          toast.success("Message successfully send");
      }, (error) => {
          console.log('Message not send');
          toast.error("Error : Message not send");
      });
  };




  return (
    <>
     <section className='flex flex-col h-[700px] bg-black'>
         <div id="Contact" className="flex justify-center w-[100%] h-[700px]">
                <div className="flex justify-evenly  w-[90%] h-[500px] mt-20"> 
                  <div className="flex w-[40%] flex-col text-xl text-white">
                    <span className='text-[35px] text-red font-extrabold mb-10 '>LET'S TALK</span>
                    <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laborum 
                    eveniet maiores explicabo laboriosam qui, quibusdam delectus! Alias ea autem repellat delectus 
                    soluta illum, rerum incidunt voluptatibus exercitationem, nisi aut.</div>
                    
                    <div className="flex mt-10">
                      <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                      </span>
                      <span className='ml-5'>Biñan City, Laguna, Philippines PH 4024</span>
                    </div>

                    <div className="flex mt-5">
                      <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                      </span>
                      <span className='ml-5'>manozoaljon23@gmail.com</span>
                    </div>

                    <div className="flex mt-5">
                      <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                      </span>
                      <span className='ml-5'>+639-682-688-622</span>
                    </div>


                    <div className="mt-10">Connect with me:</div>
                    
                    <div className="flex gap-5 pt-5">
                        <span>
                          <Link to="https://www.facebook.com/yow2311" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-red" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                          </Link>
                        </span>

                        <span>
                          <Link to="https://www.linkedin.com/in/aljonmanozo/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-red" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                            </svg>
                          </Link>
                        </span>

                        <span>
                          <Link to="https://github.com/jonmanozo" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-red" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                          </Link>
                        </span>

                        <span>

                        </span>

                    </div>
                  
                  </div>
                  
                  <div className="flex flex-col w-[30%]">
                      <span className='text-[35px] text-red font-extrabold'></span>
                      <form  ref={form} onSubmit={sendEmail} className='mt-10'>
                         <label  className="block text-md font-bold mb-2 dark:text-white">Full Name</label>
                         <input type="text"  name="from_name" className="w-[100%] h-10 rounded-md pl-3" placeholder="Enter Full Name" aria-describedby="hs-input-helper-text" />
                         
                         <label  className="block text-md font-bold mb-2 dark:text-white mt-5">Email</label>
                         <input type="email"  name="sender_email"  className="w-[100%] h-10 rounded-md pl-3" placeholder="you@site.com" aria-describedby="hs-input-helper-text" />
                         
                         <label  className="block text-md font-bold dark:text-white  my-5">Message</label>
                         <textarea
                                id="message"
                                name="message"
                                rows={3}
                                className=" shadow-md p-2 pl-3 h-[150px] w-[100%] border-gray-300 bg-gray-100 rounded block border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                      
                          <button type="submit" value="Send" className='ml-[15%] w-[70%] bg-red py-3 rounded-lg mt-5 font-bold'>SEND MESSAGE</button>
                      </form>
                  </div>
                 
                </div>
         </div>
         
         <div className="flex w-[100%] h-[100px] pt-20 pb-10 items-center justify-center font-extrabold text-lg bg-black text-red">Copyright &copy;  2023 </div>
      </section>
      <ToastContainer/>
    </>
  )
}
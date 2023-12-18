import React from 'react'
import {motion} from 'framer-motion'



const opacitybackground = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition:{
      duration:2,
      staggerChildren: 0.1,
    },
  },

};

const iconlogo = {
  initial: {
    y:-100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration:0.5,
      staggerChildren: 0.1,
    },
  },

};

const cardbox = {
  initial: {
    y:-100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration:0.8,
      staggerChildren: 0.3,
      
    },
    
  },

};


export default function CanDo() {

  return (
    <>
    <section className='flex flex-col pt-[100px] mb-[100px] '>

        <motion.div id="CanDo" className="flex  justify-evenly w-[100%] h-100 py-4 -skew-y-3 bg-brown mb-10"
          variants={opacitybackground}
          initial='initial'
          whileInView='animate'
        >
          
          <motion.div className="flex  justify-evenly w-[100%] h-100 py-4 "     
          variants={iconlogo} 
          initial='initial' 
          whileInView='animate'>
        
          <motion.div className="w-20 h-20" variants={iconlogo} >

              <svg className='hover:scale-150' fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> <g id="c133de6af664cd4f011a55de6b000d0b"> 
                    <path display="inline" d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501 H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213 l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133 h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62 l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32 l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013 v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"></path> 
                  </g> 
                  </g>
              </svg>
            </motion.div>

            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                  <g id="c133de6af664cd4f011a55de6b001a2b"> 
                  <path display="inline" d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492 V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308 V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034 c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9 l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574 l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542 l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26 l0.26-0.112l109.086-46.639L369.477,176.444z"></path> 
                  </g> 
                </g>
              </svg>
            </motion.div>

            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Framer icon</title>
                  <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z">
                  </path>
                </g>
              </svg>
            </motion.div>


            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className=' hover:scale-150' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="#000000">
                  </path> 
                </g>
              </svg>
            </motion.div>


            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                  <path d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z" fill="#000000"></path> <path d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z" fill="#000000">
                  </path> 
                </g>
              </svg>
              </motion.div>

            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <title>react</title> <rect width="24" height="24" fill="none"></rect> 
                  <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z">
                  </path> 
                </g>
              </svg>
            </motion.div>

            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                  <g id="5151e0c8492e5103c096af88a51e7e7e"> 
                    <path display="inline" d="M218.195,257.521c0,64.719,4.624,119.1-27.309,151.283c-17.961,18.105-46.301,28.772-81.17,28.772 c-57.192,0-88.947-27.862-109.215-66.416c19.512-12.459,39.452-24.502,59.775-36.154c8.292,23.188,36.291,49.258,67.888,33.21 c20.027-10.18,17.715-41.04,17.715-74.537c0-69.549,0-149.78,0-212.528c-0.063-1.044-0.125-2.087,0.732-2.214 c23.866,0,47.728,0,71.585,0C218.195,134.832,218.195,198.069,218.195,257.521z M399.727,215.462 c-18.247-7.814-40.928-17.058-46.488-33.952c-6.233-18.934,4.396-34.533,16.231-39.841c26.023-11.688,57.038,7.556,63.463,27.301 c19.583-11.657,39.103-23.384,56.826-36.896c-20.826-34.584-51.354-59.342-107.003-57.561 c-30.64,0.979-53.657,10.652-70.841,25.088c-16.771,14.085-29.721,33.854-31.737,61.989 c-6.025,84.212,56.988,105.708,110.695,129.137c16.93,7.385,35.751,14.842,43.54,29.517c16.061,30.282-12.389,50.26-36.898,52.397 c-39.336,3.427-65.858-19.587-81.175-43.54c-19.133,11.86-39.938,22.045-58.298,34.683c25.537,44.908,67.409,73.98,132.831,73.793 c66.74-0.188,116.219-32.366,120.281-92.977C516.677,262.216,454.956,239.105,399.727,215.462z"> 
                    </path> 
                  </g> 
                </g>
              </svg>
            </motion.div>

            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                  <path fill-rule="nonzero" clip-rule="nonzero" d="M7.58638 0.102166C7.8199 -0.0340553 8.10867 -0.0340553 8.34219 0.102166L14.5565 3.72717C14.7869 3.86157 14.9286 4.10825 14.9286 4.375V11.625C14.9286 11.8918 14.7869 12.1384 14.5565 12.2728L8.34219 15.8978C8.10867 16.0341 7.8199 16.0341 7.58638 15.8978L6.03281 14.9916C5.67502 14.7829 5.55417 14.3236 5.76288 13.9658C5.97159 13.6081 6.43083 13.4872 6.78862 13.6959L7.96429 14.3817L13.4286 11.1942V4.80578L7.96429 1.61828L2.5 4.80578V11.1942L3.6168 11.8457C3.96098 11.9561 4.38611 11.9831 4.68576 11.8507C4.82477 11.7893 4.95031 11.6893 5.04968 11.5107C5.15426 11.3227 5.25 11.0098 5.25 10.5V5.25C5.25 4.83579 5.58579 4.5 6 4.5C6.41421 4.5 6.75 4.83579 6.75 5.25V10.5C6.75 11.1902 6.62104 11.7716 6.36047 12.2399C6.09471 12.7176 5.71466 13.036 5.29192 13.2228C4.48562 13.579 3.59523 13.433 3.04999 13.2371C3.00686 13.2216 2.96525 13.2022 2.92567 13.1791L1.3721 12.2728C1.14168 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14168 3.86157 1.3721 3.72717L7.58638 0.102166ZM8.24655 5.28323C8.64339 4.81081 9.26318 4.5 10.1042 4.5C10.8847 4.5 11.4792 4.76756 11.8815 5.19314C12.166 5.49417 12.1527 5.96885 11.8516 6.25338C11.5506 6.53792 11.0759 6.52455 10.7914 6.22352C10.7038 6.13087 10.5202 6 10.1042 6C9.66182 6 9.47952 6.14753 9.39511 6.24802C9.28615 6.37774 9.25 6.54184 9.25 6.625C9.25 6.70816 9.28615 6.87226 9.39511 7.00198C9.47952 7.10247 9.66182 7.25 10.1042 7.25C10.1782 7.25 10.2497 7.26073 10.3173 7.28072C10.9368 7.37001 11.4089 7.64784 11.7326 8.03323C12.1049 8.47643 12.2292 8.99983 12.2292 9.375C12.2292 9.75017 12.1049 10.2736 11.7326 10.7168C11.3358 11.1892 10.716 11.5 9.87501 11.5C9.0945 11.5 8.49996 11.2324 8.09768 10.8069C7.81315 10.5058 7.82652 10.0311 8.12755 9.74662C8.42857 9.46208 8.90325 9.47546 9.18779 9.77648C9.27536 9.86913 9.459 10 9.87501 10C10.3174 10 10.4997 9.85247 10.5841 9.75198C10.693 9.62226 10.7292 9.45816 10.7292 9.375C10.7292 9.29184 10.693 9.12774 10.5841 8.99802C10.4997 8.89753 10.3174 8.75 9.87501 8.75C9.80097 8.75 9.72943 8.73927 9.66188 8.71928C9.04237 8.62999 8.57028 8.35216 8.24655 7.96677C7.87427 7.52357 7.75 7.00017 7.75 6.625C7.75 6.24983 7.87427 5.72643 8.24655 5.28323Z" fill="#000000">
                  </path> 
                </g>
              </svg>
            </motion.div>

            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.3,19a2.42,2.42,0,0,1-2.5.56l-2.35,2.35a.34.34,0,0,1-.49,0l-1-1a.36.36,0,0,1,0-.49l2.36-2.35a2.39,2.39,0,0,1,3.39-2.91L19.12,16.8l1,1,1.62-1.62A2.39,2.39,0,0,1,21.3,19ZM22,8v5.76A4.47,4.47,0,0,0,19.5,13a4.57,4.57,0,0,0-1.29.19V9.29H16.66V14A4.5,4.5,0,0,0,15,17.5a4.07,4.07,0,0,0,0,.5H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H20A2,2,0,0,1,22,8ZM11,15,9.09,9.27H7L5.17,15h1.7l.29-1.07H9L9.29,15Zm4.77-3.89a1.67,1.67,0,0,0-.55-1.35,2.43,2.43,0,0,0-1.62-.47h-2V15h1.54V13.11h.44a2.75,2.75,0,0,0,1-.17,1.82,1.82,0,0,0,.67-.44,1.63,1.63,0,0,0,.36-.64A2.36,2.36,0,0,0,15.75,11.11Zm-7.3.62-.12-.44-.15-.58c0-.21-.08-.37-.11-.5a4.63,4.63,0,0,1-.1.48c0,.19-.08.38-.13.57s-.08.34-.12.47l-.24.93H8.69Zm5.59-1a.63.63,0,0,0-.5-.17h-.4v1.31h.31a.9.9,0,0,0,.37-.07.59.59,0,0,0,.27-.22.75.75,0,0,0,.11-.42A.57.57,0,0,0,14,10.71Z">
                  </path>
                  <rect width="24" height="24" fill="none"></rect>
                </g>
              </svg>
            </motion.div>

            <motion.div className="w-20 h-20" variants={iconlogo}>
              <svg className='hover:scale-150' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                  <title>ps</title> 
                  <path d="M19,5V19H5V5H19m0-2H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5a2,2,0,0,0-2-2Z"></path> 
                  <rect width="24" height="24" fill="none"></rect> 
                  <g> 
                    <path d="M12.11,10.47a2.41,2.41,0,0,1-.8,1.94,3.36,3.36,0,0,1-2.25.67H8.35v2.79H6.68V8H9.19a3.32,3.32,0,0,1,2.17.62A2.22,2.22,0,0,1,12.11,10.47ZM8.35,11.72h.54A1.82,1.82,0,0,0,10,11.41a1,1,0,0,0,.38-.88,1.08,1.08,0,0,0-.32-.87,1.51,1.51,0,0,0-1-.28H8.35Z"></path> <path d="M17.32,14.09a1.68,1.68,0,0,1-.64,1.41,3.2,3.2,0,0,1-1.92.48,6,6,0,0,1-1.12-.09,4,4,0,0,1-.87-.26V14.28a6.52,6.52,0,0,0,1,.36,4.58,4.58,0,0,0,1,.14c.59,0,.89-.17.89-.51a.44.44,0,0,0-.12-.32,1.5,1.5,0,0,0-.4-.27l-.78-.36a4.61,4.61,0,0,1-1-.54,1.55,1.55,0,0,1-.47-.56,1.89,1.89,0,0,1-.15-.79,1.44,1.44,0,0,1,.62-1.24,3.05,3.05,0,0,1,1.76-.44,4.89,4.89,0,0,1,2.11.48l-.49,1.18a8.28,8.28,0,0,0-.84-.32,2.72,2.72,0,0,0-.8-.12c-.49,0-.73.13-.73.39a.46.46,0,0,0,.24.38,5.56,5.56,0,0,0,1,.48,5,5,0,0,1,1,.53,1.59,1.59,0,0,1,.48.57A1.68,1.68,0,0,1,17.32,14.09Z">
                    </path> 
                  </g> 
                </g>
              </svg>
            </motion.div>
            </motion.div>

           
        </motion.div>

        <motion.div className="flex bg-brown w-100 -skew-y-3  text-gray-200"
          variants={opacitybackground}
          initial='initial'
          whileInView='animate'
        >
          
        <motion.div className="flex flex-wrap justify-center items-center gap-10 w-[100%] p-20  text-gray-200"
          variants={cardbox}
          initial='initial'
          whileInView='animate'
        >
          
            <motion.div className="flex flex-col w-[300px] min-h-[350px] bg-black rounded-lg justify-center text-center p-5"
              variants={cardbox}
            >
              <motion.h2 className='text-red font-bold text-[1.8rem] mb-5' variants={cardbox}>FRONTEND</motion.h2>
              <motion.p className='' variants={cardbox}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis earum 
              eius reprehenderit tenetur culpa delectus modi molestiae fugiat autem, ad quam animi saepe sequi in recusandae 
              illum placeat rem.</motion.p>
            </motion.div>

           
            <motion.div className="flex flex-col w-[300px] min-h-[350px] bg-black rounded-lg justify-center text-center p-5"
              variants={cardbox}
            >
              <motion.h2 className='text-red font-bold text-[1.8rem]  mb-5' variants={cardbox}>WEB DESIGN</motion.h2>
              <motion.p className='' variants={cardbox}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis earum 
              eius reprehenderit tenetur culpa delectus modi molestiae fugiat autem, ad quam animi saepe sequi in recusandae 
              illum placeat rem.</motion.p>
            </motion.div>

           
            <motion.div className="flex flex-col w-[300px] min-h-[350px] bg-black rounded-lg justify-center text-center p-5"
              variants={cardbox}
            >
              <motion.h2 className='text-red font-bold text-[1.8rem]  mb-5' variants={cardbox}>GRAPHIC DESIGN</motion.h2>
              <motion.p className='' variants={cardbox}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis earum 
              eius reprehenderit tenetur culpa delectus modi molestiae fugiat autem, ad quam animi saepe sequi in recusandae 
              illum placeat rem.</motion.p>
            </motion.div>

           
            <motion.div className="flex flex-col w-[300px] min-h-[350px] bg-black rounded-lg justify-center text-center p-5"
              variants={cardbox}
            >
              <motion.h2 className='text-red font-bold text-[1.8rem]  mb-5' variants={cardbox}>API INTEGRATION</motion.h2>
              <motion.p className='' variants={cardbox}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis earum 
              eius reprehenderit tenetur culpa delectus modi molestiae fugiat autem, ad quam animi saepe sequi in recusandae 
              illum placeat rem.</motion.p>
            </motion.div>

           

        </motion.div>
        </motion.div>
      </section>
    </>
  )
}

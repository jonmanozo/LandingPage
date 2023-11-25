import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="fixed flex justify-center items-center w-[100%] py-2 bg-black z-20 ">
            <div className="flex w-[80%] text-white ">
                <div className="w-[50%] flex items-center text-[30px] font-bold justify-center "><h1  className='text-red'>ALJON MAÑOZO</h1></div>
                <div className="w-[10%] flex items-center justify-center font-bold "><a href="#Iam" className='NavLinkhover'>WHO AM I</a></div>
                <div className="w-[10%] flex items-center justify-center font-bold "><a href="#Projects"  className='NavLinkhover'>PROJECTS</a></div>
                <div className="w-[10%] flex items-center justify-center font-bold "><a href="#CanDo"  className='NavLinkhover'>CAN DO</a></div>
                <div className="w-[10%] flex items-center justify-center font-bold "><a href="#Contact"  className='NavLinkhover'>CONTACT</a></div>
            </div>
      </div>
    
    </>
  )
}

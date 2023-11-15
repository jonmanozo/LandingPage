import React from 'react'
import Navbar from './components/Navbar'
import YowIam from './components/YowIam'
import CanDo from './components/CanDo'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Root() {
  return (
    <>
      <Navbar></Navbar>
      <YowIam></YowIam>
      <CanDo></CanDo>
      <Projects></Projects>
      <Footer></Footer>
    </>
  )
}

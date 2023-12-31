import React from 'react'
import Navbar from './components/Navbar'
import YowIam from './components/YowIam'
import CanDo from './components/CanDo'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Root() {
  return (
    <>
      <Navbar/>
      <YowIam></YowIam>
      <Projects></Projects>
      <CanDo></CanDo>
      <Footer></Footer>
    </>
  )
}

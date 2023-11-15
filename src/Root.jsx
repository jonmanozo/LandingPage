import React from 'react'
import Navbar from './components/Navbar'
import YowIam from './components/YowIam'
import CanDo from './components/Cando'
import Projects from './components/projects'
import Footer from './components/footer'

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

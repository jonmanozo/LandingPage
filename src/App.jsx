import React, { useState } from 'react'

import Root from './Root'
//components
import Navbar from './components/Navbar'

import {createBrowserRouter, 
  BrowserRouter, 
  Route, 
  createRoutesFromElements
} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
        <Route path="/" element={<Root/>}>
          
        </Route>
      </>
  )
)




function App() {

  
  const [count, setCount] = useState(0)

  return (
    <>
     
     <RouterProvider router={router}/>
    </>
  )
}

export default App

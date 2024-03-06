import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import User from './Components/User'
import{ createBrowserRouter,RouterProvider} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    }
  ])

  return (
    <>
    
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App

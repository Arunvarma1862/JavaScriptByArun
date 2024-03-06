import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <nav>
         <NavLink to="/" className={(e)=>{ return e.isActive?"red":""}}>  <li>Home</li></NavLink> 
         <NavLink to="/About" className={(e)=>{ return e.isActive?"red":""}}>  <li>About</li></NavLink>  
         <NavLink to="/Login" className={(e)=>{return e.isActive?"red":""}}> <li>Login</li></NavLink>  
        </nav>
      
    </div>
  )
}

export default Navbar

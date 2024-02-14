import React from 'react'
import Footer from './footer'

function Navbar(props) {
  return (
    
    <div>
      <div className="logo">{props.logoText}</div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </nav>
        <Footer/>
      
    </div>
  )
}

export default Navbar

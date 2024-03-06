import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log('nav bar is rendered')
  return (
    <div>

        I am {adjective} nav bar
        <button onClick={()=>{getAdjective}}>{getAdjective()}</button>
      
    </div>
  )
}

export default memo(Navbar)

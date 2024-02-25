import {React, useEffect} from 'react'

const Navbar = ({color}) => {

   // Case1: Run on every render
  useEffect(() => {
    alert('Run on every render')
   })
 
   // case2: Run on first render
   useEffect(() => {
     alert('Run on first render')
    },[])
    
    // case3: Run on when color changed
   useEffect(() => {
     alert('color changed')
    },[color])

    // Example of cleanUp function

    useEffect(() => {
     
          alert("welcome to helloo")
    
      return () => {
          alert('component was unmounted')
      }
    }, [])
    

  return (
    <div>
         I am navbar {color} color
    </div>
  )
}

export default Navbar

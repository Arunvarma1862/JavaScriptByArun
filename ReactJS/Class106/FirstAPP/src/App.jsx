import Navbar from "./Components/Navbar"
import Footer from "./Components/footer"
import Card from "./Components/card"
import { useState } from "react"

function App() {

  const [count,setCount] =  useState(0)
  return (
    <>

    <Navbar/>
   
     <div className="cards">
      <Card title='card1' description='card1' />
      <Card title='card2' description='card2' />
      <Card title='card3' description='card3' />
      <Card title='card4' description='card4' />
     </div> 
     <div className="count">
      <button onClick={()=>{setCount(count+1)}}>count is {count}</button>
     </div>

    <Footer/>
    </>
  )
}

export default App

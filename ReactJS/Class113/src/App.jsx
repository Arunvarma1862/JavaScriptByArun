import { useState,useEffect,useRef } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [cards, setcards] = useState([])

  const fetchData=async ()=>{
    let a= await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await a.json()
    setcards(data);
    console.log(data)
  }
useEffect(() => {

  fetchData()
  
}, [])

  return (
    <>
     <Navbar/>
      <div className="conatiner">

          {cards.map((card)=>{
            return <div  key={card.id} className="cards">
                  <h1>{card.title}</h1>    
                  <p>{card.body}</p>    
                  <span> the userId is {card.userId}</span>
                   </div>
          })}
       
      </div>
    </>
  )
}

export default App

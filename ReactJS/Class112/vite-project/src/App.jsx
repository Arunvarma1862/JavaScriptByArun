import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("harry")
  const [form, setForm] = useState({email:"",phone:""})
  const first = useRef(null)

  const handleClick =()=>{
    alert("hello")
  }

  const color=()=>{
    let var1= Math.ceil(0+Math.random()*255)
    let var2= Math.ceil(0+Math.random()*255)
    let var3= Math.ceil(0+Math.random()*255)
    return `rgb(${var1}, ${var2},${var3})`
  }

  const mouseMove=()=>{
  
    first.current.style.backgroundColor=color()
    alert("I am mouseover")
  }

  const handleChange =(e)=>{
       setname(e.target.value)
       setForm({...form, [e.target.name]:e.target.value})
      console.log(form)
  }
  return (
    <>
     <div className="buttons">
      <button  onClick={handleClick}>Click me</button>
     </div>

     <div ref={first} className="red" onMouseOver={mouseMove}>
      I am a red div
     </div>
    <input type="text"  value={name} onChange={handleChange} />
     <input type="text" name="email" value={form.email?form.email:""} onChange={handleChange}/>
     <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange}  style={{backgroundColor:"blue"}}/>
    </>
  )
}

export default App

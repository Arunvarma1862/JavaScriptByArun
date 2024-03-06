import { useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const first = useRef(null)
  const [todos, settodos] = useState([{
    title:"hello",
    logo:"virat"
     },
     {
      title:"djbh",
      logo:"cnas"
     }
])

  const color= ()=>{
    let var1= Math.ceil(0+Math.random()*255)
    let var2= Math.ceil(0+Math.random()*255)
    let var3= Math.ceil(0+Math.random()*255)
    return `rgb(${var1},${var2},${var3})`
  }

  useEffect(() => {
    
    first.current.style.backgroundColor=color()
   
  }, [count])
  
  const Hello=(hey)=>{
    return(
    <>
    I am {hey.jk}
    </>
  )}

  return (
    <>

    <Hello jk="jsd"/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     {todos.map((todos)=>{
        return (
          <div className="container" key={todos.title}  style={{border:"1px solid blue"}}>
            <div className="title">{todos.title}</div>
            <div className="logo">{todos.logo}</div>
          </div>
        )
      }) }
      {/* {showbtn?<button>show me on click </button>:<button>Show me off click</button>} */}
      {showbtn && <button>show me when I click</button>}
      <div className="btn">
        <button onClick={()=>{setshowbtn(!showbtn)}}>show me</button>
      </div>
      <div className="card">
        <button ref={first}  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

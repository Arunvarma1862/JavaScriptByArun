import { useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
  
// const Todo=({todod})=>{
//   return (
//     <>
//     <div className="conatiner"  style={{border:"1px solid blue"}}>
//     <div className="todo">{todod.title}</div>
//     <div className="todo">{todod.desc}</div>
//     </div>
//     </>
   
//   )
// }

function App() {
  const [count, setCount] = useState(52)
  const [showbtn, setshowbtn] = useState(false);
  const [todos, settodos] = useState([
    {
    title:"heyk",
    desc:"heldsjcdsnc"
  },
  {
    title:"hedsjyk",
    desc:"helndsjcdsnc"
  },
  {
    title:"hebsasyk",
    desc:"heldkjsanjsasjcdsnc"
  },
])


const ref = useRef(null)

// useEffect(() => {
//   alert('run on every render')
  
// })

const color=()=>{
  let aar1=Math.ceil(0+Math.random()*255)
  let aar2=Math.ceil(0+Math.random()*255)
  let aar3=Math.ceil(0+Math.random()*255)
  
  return `rgb(${aar1},${aar2},${aar3})`
}



  useEffect(() => {
  //  alert("count is changed")
   ref.current.style.backgroundColor=color()
  }, [count])

  
  // const Main=(hello)=>{
  //   return (
  //     <>
  //     <div>Hello  {hello.hello} </div>
  //     </>
  //   )
  // }
  
  return (<>
      <div>

        <Card titles ="logo"/>
        {/* <Main hello="hiiii" /> */}

      
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
     {/* <Todo/> */}
      {todos.map((todod, i)=>{
      //  return  <Todo key={i} todod={todoe}/>

      return (
        <div className="conatiner" key={todod.title} style={{border:"1px solid blue"}}>
        <div ref={ref} className="todo">{todod.title}</div>
        <div className="todo">{todod.desc}</div>
        </div>
      )
      })}
      
      {/* {showbtn?<button>Show me True</button>:<button>Show me false</button>} */}
      {showbtn && <button>Show me when i click</button>}
      <div className="card">
        
        <button onClick={() => setshowbtn(!showbtn)}>
          show me
        </button>

        <button ref={ref} onClick={()=>{setCount(count+1)}}>Count is {count}</button>

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

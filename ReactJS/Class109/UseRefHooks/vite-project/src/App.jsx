import {useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  // const ref = useRef(0);

  // function HandleClick(){

  //   ref.current=ref.current+1;
  //   alert(`you clicked ${ref.current} times`)

  // }
  // return (
  //   <>
  //   <button onClick={HandleClick}>Click me</button>
   
  //   </>


// const ref = useRef(null);

// function HandleClick(){

//   ref.current.focus();

// }
// return (
//   <>

//   <input ref={ref} />
//   <button onClick={HandleClick}>Click me</button>
 
//   </>




const [count, setCount] = useState(0)
const btnRef = useRef(null)


  useEffect(() => {
   console.log(`First render...`) 
   btnRef.current.style.backgroundColor="blue"
  },[])

  function handleclick(){
    btnRef.current.style.display="none"
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button  onClick={handleclick}>Change Me</button>
    </>
  )
}

export default App

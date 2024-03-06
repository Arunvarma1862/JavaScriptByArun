import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleEdit=()=>{

  }
  const handleDelete=()=>{

  }
  const handleAdd=()=>{

    settodos([...todos, {todo,iscompleted:false}])
    settodo("")

  }
  const handlechange=(e)=>{
     settodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
     <div className="container mx-auto bg-red-200 rounded-xl my-5 p-5 min-h-[80vh]">
      <div className="addtodo my-5">
        <h2 className='text-lg font-bold'>Add Todo</h2>
        <input onChange={handlechange} value={todo} type="text" className='w-80' />
        <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white font-bold mx-3 rounded-md text-sm'>Add</button>
      </div>

      <h2 className='text-xl font-bold'>Your Todos</h2>
      <div className="todos">
        {todos.map((item =>{
      return  <div className="todo flex  w-1/2 justify-between" key={todo}  >
          <div className={item.iscompleted?"":"line-through"}  >{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white font-bold mx-1 rounded-md text-sm'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white font-bold mx-1 rounded-md text-sm'>Delete</button>
            </div>
        </div>
         }))}
      </div>
     </div>
    </>
  )
}

export default App

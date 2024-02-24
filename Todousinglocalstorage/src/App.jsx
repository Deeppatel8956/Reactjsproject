import { useEffect, useState } from 'react'

// import './App.css'
import { Todoprovider } from './context';
import { TodoItem, Todoform } from './Components';

function App() {
const [todos,setTodo]=useState([]);
const addtodo=(todo)=>{
  setTodo((prev)=>[{id:Date.now,...todo},...prev])
}
const updatetodo=(id,todo)=>{
  setTodo((prev)=>prev.map((prevtodo)=>(
    prevtodo===id?todo:prevtodo
  )))
}

const deletetodo=(id)=>{
  setTodo((prev)=>prev.filter((todo)=>todo.id!==id))
}
const toggleComplete=(id)=>{
  setTodo((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo)))
}

useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodo(todos)
  }
}, [])
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

  return (
    <Todoprovider value={{todos,addtodo,deletetodo,updatetodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen w-full py-8">
                <div className="w-full h-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                           <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App

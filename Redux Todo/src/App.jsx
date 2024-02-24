import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './componentes/Addtodo'
import Todos from './componentes/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux toolkit</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App

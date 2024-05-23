import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
     <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/> 
       
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App

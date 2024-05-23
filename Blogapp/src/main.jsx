import React from 'react'
import ReactDOM from 'react-dom/client'
// import Sign from './Tem/02Sign'
import App from './App.jsx'
// import './index.css'
// import Landpage from './Tem/01Landpage'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
// import Landingpage from './Netflixpage/Landingpage'
import Netflixform from './Netflixform/Netflixform';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Landpage/> */}
{/* <Home/> */}
    {/* <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/> 
       
      </Routes>
    </Router> */}
  </React.StrictMode>,
)

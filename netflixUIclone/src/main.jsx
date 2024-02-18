import React from 'react'
import ReactDOM from 'react-dom/client'
// import Sign from './Tem/02Sign'
// import App from './App.jsx'
// import './index.css'
import Landpage from './Tem/01Landpage'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Landingpage from './Netflixpage/Landingpage'
import Netflixform from './Netflixform/Netflixform';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Landpage/> */}

    <Router>
      <Routes>
         <Route path="/" element={<Landingpage/>}/>
        <Route path='/signin' element={<Netflixform/>}/> 
       
      </Routes>
    </Router>
  </React.StrictMode>,
)

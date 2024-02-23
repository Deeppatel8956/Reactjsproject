import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Images from './Compo/01Images.jsx'
import Faq from './Compo/Faq.jsx'
import Question from './Compo/Question.jsx'
import Qutoe from './Compo/Qutoe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Images/> */}
    {/* <Faq/> */}
    {/* <Question/> */}
    <Qutoe/>
  </React.StrictMode>,
)

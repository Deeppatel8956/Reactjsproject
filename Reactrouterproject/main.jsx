import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";
import Layout from './Layout.jsx'
import About from './Componentes/About/About.jsx'
import Home from './Componentes/Home/Home.jsx'
import Contact from './Componentes/Contact/Contact.jsx';
import User from './Componentes/User/User.jsx';
import Git, { gitInfo } from './Componentes/Github/Git.jsx';
// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//      },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/contact",
//       element:<Contact/>
//     }
//   ]
// }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:userid' element={<User/>}/>
      <Route 
      loader={gitInfo}
      path='/git'
      element={<Git/>}/>
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

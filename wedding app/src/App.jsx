import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import WeddingCategories from './components/WeddingCategories/WeddingCategories'
import WeddingVenues from './components/WedingVenu/WeddingVenues'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/> 
       <HeroSection/>
      <WeddingCategories/>
      <WeddingVenues/>
      <Gallery/>
      <Footer/> 
      
    </>
  )
}

export default App

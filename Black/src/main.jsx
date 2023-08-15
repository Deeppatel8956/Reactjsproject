import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.jsx'
// import './index.css'
import './Bootstrapintro/css/style.css'
import Header from './Bootstrapintro/01Header'
import Hero from './Bootstrapintro/02Hero'
import About from './Bootstrapintro/03About'
import Values from './Bootstrapintro/04Values'
import Count from './Bootstrapintro/05Count'
import Features from './Bootstrapintro/06Features'
import Service from './Bootstrapintro/07Service'
import Pricing from './Bootstrapintro/08Pricing'
import Faq from './Bootstrapintro/09Faq'
import Portfolio from './Bootstrapintro/10Portfolio'
import Test from './Bootstrapintro/11Test'
import Team from './Bootstrapintro/12Team'
import Client from './Bootstrapintro/13Client'
import Blog from './Bootstrapintro/14Blog'
import Contact from './Bootstrapintro/15Contact'
import Footer from './Bootstrapintro/16Footer'
// import './Bootstrapintro/css/bootstrap.min.css'
// import './Bootstrapintro/js/main.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    
    <Header/>
    <Hero/>
    <About/>
    <Values/>
    <Count/>
    <Features/>
    <Service/>
    <Pricing/>
    <Faq/>
    <Portfolio/>
    <Test/>
    <Team/>
    <Client/>
    <Blog/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)

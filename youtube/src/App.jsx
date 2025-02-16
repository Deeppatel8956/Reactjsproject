import { useEffect, useState } from 'react'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './App.css'
import HomeVideos from './components/Homevideos/HomeVideos'
import TrendingVideos from './components/Trending/TrendingVideos'
import Searchpage from './components/Searchpage/Searchpage'
import VideoPlayPage from './components/VideoPlaycard/VideoPlayPage'
function App() {
  const [isSidebarVisiable, setIsSidebarVisiable] = useState(false)
  const[isSmallScreen,setIsSmallScreen]=useState(false)

  useEffect(()=>{
       const mediaquery=window.matchMedia('(max-width:768px)')
       const handelchange=()=>setIsSmallScreen(mediaquery.matches)
       handelchange()
       mediaquery.addEventListener('change',handelchange)
       return()=>mediaquery.removeEventListener('change',handelchange)
      },[])

  useEffect(()=>{
    if (isSmallScreen) {
      setIsSidebarVisiable(false)
    } else {
      setIsSidebarVisiable(true)
    }
  },[isSmallScreen]) 
  
  const toggleSidebar=()=>{
    setIsSidebarVisiable((pre)=>!pre)
  }
  return (
    <>
    <Router>
    <Header toggleSidebar={toggleSidebar}/>
    <div className="appContainer">
    {isSidebarVisiable &&   <Sidebar/>}
      <div style={{width:'100%'}}>
    <Routes>
      <Route path='/' element={<HomeVideos/>}/>
      <Route path='/trending' element={<TrendingVideos/>}/>
      <Route path='/search/:searquery' element={<Searchpage/>}/>
      <Route path='/videoplaypage/:videoId' element={<VideoPlayPage/>}/>
    </Routes>
    </div>
    </div>

    </Router>
    </>
  )
}

export default App

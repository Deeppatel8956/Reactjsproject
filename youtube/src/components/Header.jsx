import React, { useEffect, useState } from 'react';
import logo from '../logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import '../style/Header.css'
import { Link } from 'react-router-dom';
function Header({toggleSidebar}) {
    const[searquery,setSearchquery]=useState('')
    const[showSearch,setshowSearch]=useState(false)
    const[isSmallScreen,setIsSmallScreen]=useState(false)

    useEffect(()=>{
     const mediaquery=window.matchMedia('(max-width:768px)')
     const handelchange=()=>setIsSmallScreen(mediaquery.matches)
     handelchange()
     mediaquery.addEventListener('change',handelchange)
     return()=>mediaquery.removeEventListener('change',handelchange)
    },[])
    return (
        <>
         <div className="header">
            {!showSearch &&(
            <div className="header-left">
              <MenuIcon onClick={toggleSidebar}/>
              <Link to='/'> 
               <img src={logo} className='header-log' alt="does not show" />
              </Link>
            </div>
            )}


            <div className="searchinput" style={{flex:isSmallScreen&&showSearch?1:isSmallScreen&&0,
                display:isSmallScreen&&showSearch?'flex':isSmallScreen&&'none',
                margin:'auto'
            }}>
                <input type="text" placeholder='search' value={searquery} onChange={(e)=>setSearchquery(e.target.value)}/>
                <Link to={`/search/${searquery}`}>
                <SearchIcon className='searchicon-header'/>
                </Link>
            </div>
             {showSearch &&(
                  <CloseIcon className='CloseToggleicon headericon' onClick={()=>{setshowSearch(false)}}/>
             )}
            {!showSearch && (
            <div className="header-icons">
                {isSmallScreen&&!showSearch&&(
                    <SearchIcon className='searchToggleicon headericon' onClick={()=>{
                        setshowSearch(true)
                    }}/>
                )}
                <VideoCallIcon className='header-icon'/>
               <NotificationsIcon className='header-icon'/>
               <AccountCircleIcon className='header-icon'/>
            </div>
            )}
         </div>
        </>
    );
}

export default Header;
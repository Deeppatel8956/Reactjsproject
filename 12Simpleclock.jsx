import React, { useState } from 'react';

function Simpleclock(props) {
    let time=new Date().toLocaleTimeString();
    const [atime,setTime]=useState(time);
    
    const Updatetime=()=>{
        time=new Date().toLocaleTimeString();
        setTime(time);
    }

    setInterval(Updatetime, 1000);
    return (
        <>
        <div className="container mt-5 text-center">
         <h1>{atime}</h1> 
         </div>  
        </>
    );
}

export default Simpleclock;
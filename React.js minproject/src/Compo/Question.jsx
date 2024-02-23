
import React, { useState } from 'react';

function Question({question}) {
    const [isopen,setIsopen]=useState(false)
    return (
        <>
         <div className={isopen?"open":"close"}>
         <h4>{question.title}</h4>
         <button onClick={()=>setIsopen(!isopen)}>{isopen?"-":"+"}</button>
         {isopen && <p>{question.info}</p>}    
        </div>   
        </>
    );
}

export default Question;

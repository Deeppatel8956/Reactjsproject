import React from 'react';
import { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Git(props) {
    const data=useLoaderData();
    // const[data,setData]=useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    
    return (
        <>
         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github acount
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>   
        </>
    );
}

export default Git;

export const gitInfo=async()=>{
    const responce=await fetch('https://api.github.com/users/hiteshchoudhary')
    return responce.json();
}
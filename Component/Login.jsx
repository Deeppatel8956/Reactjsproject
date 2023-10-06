import React, { useContext, useState } from 'react'
import Usercontext from '../Context/Usercontext'
const Login = () => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[age,setAge]=useState('')
    const{setUser}=useContext(Usercontext);
    const toggle=(e)=>{
        e.preventDefault()
        setUser({username,password,age})
    }
  return (
    <>
    <div>
        <input type="text" name="" id="" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter your name'/>
        <br /><br />
        <input type="password" name="" id="" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password' />
        <br /><br />
        <input type="number" name="" id="" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='Enter your age'/>
        <br /><br />
        <button onClick={toggle}> Submit </button>
    </div>
    </>
  )
}

export default Login;
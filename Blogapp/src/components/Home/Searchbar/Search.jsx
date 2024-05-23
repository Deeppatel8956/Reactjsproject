import React from 'react'
import './stylesd.css'
const Search = ({value,handelsearchkey,clearsearch,formsubmit}) => {
  return (
    <>
    <div className='search-wrap'>
        <form action="" onSubmit={formsubmit}>
            <input type="text" onChange={handelsearchkey} value={value} placeholder='Search by category'/>
            {value &&<span onClick={clearsearch}>X</span>}
            <button>Go </button>
        </form>
    </div>
    
    </>
  )
}

export default Search
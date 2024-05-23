import React, { useState } from 'react';
import Header from '../../components/Home/Header/Header';
import Search from '../../components/Home/Searchbar/Search';
import BlogList from '../../components/Home/BlogList'
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';

function Home(props) {
    const [blogs,setBlogs]=useState(blogList)
    const [searchkey,setSearchkey]=useState(' ')

    const handelsubmit=(e)=>{
        e.preventDefault()
        handelsearchresult()
    }

    const handelsearchresult=()=>{
        const allblog=blogList
        const filterlist=allblog.filter((blog)=>blog.category.toLowerCase().includes(searchkey.toLowerCase().trim()))
        setBlogs(filterlist)
    }

    const handelclearsearch=()=>{
        setBlogs(blogList)
        setSearchkey('')
    }
    return (
        <div>
         <Header/>  


        {/* Search item build */}
         <Search 
         value={searchkey}
         clearsearch={handelclearsearch}
          formsubmit={handelsubmit}
           handelsearchkey={(e)=>setSearchkey(e.target.value)}/>


        {/* Pass blog list item */}
        {!blogs.length ?<EmptyList/> : <BlogList blogs={blogs}/>}
        </div>
    );
}

export default Home;
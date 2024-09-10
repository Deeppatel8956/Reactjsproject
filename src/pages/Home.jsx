import React, { useEffect, useState } from 'react'
import Header from '../component/common/Header'

import { getCategoryMovies } from '../services/api'
import { NOWPLAYING_API_URL } from '../constants/constant'

// mui component
import { Box, styled } from '@mui/material'
import Banner from '../component/Banner'
import Upnext from '../component/Upnext'
import Slide from '../component/Slide'


const Wrapper=styled(Box)`
  display:flex;
  padding:20px 0;
`
const Container=styled(Box)`
    padding:0 115px;
`
const Home = () => {
  const [movies,setMovies]=useState([])

  useEffect(()=>{
    const getData=async()=>{
     let responce=await getCategoryMovies(NOWPLAYING_API_URL)
     setMovies(responce.results)
    }
    getData()
  },[])
  return (
    <>
        <Header/>
        <Container>
        <Wrapper>
          <Banner movies={movies}/>
          <Upnext movies={movies}/>
        </Wrapper>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        <Slide movies={movies}/>
        </Container>
    </>
  )
}

export default Home
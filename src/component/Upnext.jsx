import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
  width: 40%;
  diplay:flex;
  flex-direction:column;
  align-items:baseline;
  padding-left:20px;
  & > p{
    color:#FFFF;
    font-weight :600;
    font-size:16px;
    margin-bottom:20px;
  }
`;

const Wrapper=styled(Box)`
  color:#FFFF;
  display:flex;
  & > p{
    margin-left:20px;
  }
`;

const Poster = styled('img')({
  width: 88,
})

const Upnext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {
        movies.slice(0, 3).map((movie, index) => (
          <Wrapper key={index}>
            <Poster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
            <Typography>{movie.original_title}</Typography>
          </Wrapper>
        ))
      }
    </Component>
  )
}

export default Upnext

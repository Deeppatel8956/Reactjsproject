import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Typography, Box, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { logoURL } from '../../constants/constant';
// componente
import Headermenu from './Headermenu';

import { useNavigate } from 'react-router-dom';

import { routePath } from '../../constants/routes';
const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > *{
    padding:0 16px;
  }
    & > div{
    display:flex;
    align-items:center;
    cursor:pointer;
    & > p{
    font-size:14px;
    font-weigth:600;
    }
    }
    & >p {
      font-size:14px;
      font-weigth:600;
    }

`;

const InputSearchField = styled(InputBase)`
  background: #FFFFFF;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Logo = styled('img')({
  width: 64,
});

const Header = () => {
  const [open,setOpen]=useState(null)

  const handleClick=(e)=>{
    setOpen(e.currentTarget)
  }

  const handleClose=()=>{
    setOpen(null)
  }

  const navigate=useNavigate()
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Logo src={logoURL} alt="logo" onClick={()=>navigate(routePath.home)} />
        <Box onClick={handleClick}>
          <MenuIcon />
          <Typography >
            Menu
          </Typography>
        </Box>
        <Headermenu open={open} handleClose={handleClose}/>
        <InputSearchField placeholder="Search..." />
        <Typography >
          IMDb<Box component="span" >
            Pro
          </Box>
        </Typography>
        <Box >
          <BookmarkAddIcon />
          <Typography >
            Watchlist
          </Typography>
        </Box>
        <Typography >Sign In</Typography>
        <Box >
          <Typography >
            EN
          </Typography>
          <ExpandMoreIcon />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

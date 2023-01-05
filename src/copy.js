import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto' 
});

export default function BottomNavBar(){
  return (
    <React.Fragment>
      <AppBar 
      position = "fixed" 
      color = "inherit" 
      sx = {{ 
        top: 'auto', 
        bottom: 0 
      }}
      >
        <Toolbar>
          <IconButton sx = {{ marginLeft: "0px" }} color = "inherit" onClick={changeColor} >
            <HomeRoundedIcon />
          </IconButton>
          <IconButton color="inherit" >
            <AssessmentRoundedIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddRoundedIcon fontSize='large'/>
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <AccountBalanceWalletRoundedIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
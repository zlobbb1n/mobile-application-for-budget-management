import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto'
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#3d5afe',
    },
  },
});

export default function BottomNavBar(){
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
    <BottomNavigation 
      sx = {{width: '100%', position: 'fixed', bottom: 0}}
      value = {value}
      onChange = {(e, newValue) => {
        setValue(newValue);
      }}
      >
      <BottomNavigationAction icon = {<HomeRoundedIcon/>}/>
      <BottomNavigationAction icon = {<AssessmentRoundedIcon/>}/>
      <StyledFab color="primary" aria-label="add">
        <AddRoundedIcon fontSize='large'/>
      </StyledFab>
      <BottomNavigationAction icon = {<AccountBalanceWalletRoundedIcon/>}/>
      <BottomNavigationAction icon = {<PersonRoundedIcon/>}/>
    </BottomNavigation>
    </ThemeProvider>
  );
}
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

function homePage() {
    window.location.href="/home"
}
function overviewPage() {
    window.location.href="/overview"
}
function walletPage() {
    window.location.href="/wallet"
}
function profilePage() {
    window.location.href="/profile"
}

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
            sx = {{
                width: '100%', 
                position: 'fixed', 
                bottom: 0
            }}
            value = {value}
            onChange = {(e, newValue) => {
                setValue(newValue);
            }}>
            <BottomNavigationAction icon = {<HomeRoundedIcon/>} onClick = {homePage}/>
            <BottomNavigationAction icon = {<AssessmentRoundedIcon/>} onClick = {overviewPage}/>
            <StyledFab color="primary" aria-label="add">
                <AddRoundedIcon fontSize='large'/>
            </StyledFab>
            <BottomNavigationAction icon = {<AccountBalanceWalletRoundedIcon/>} onClick = {walletPage}/>
            <BottomNavigationAction icon = {<PersonRoundedIcon/>} onClick = {profilePage}/> 
        </BottomNavigation>
        </ThemeProvider>
    );
}
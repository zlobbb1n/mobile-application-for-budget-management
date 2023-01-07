import React from 'react';
import BottomNavBar from '../components/bottomNavBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';

const SyledHome = styled(Typography)({
    fontWeight: "bold",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
})


export default function Wallet(){
    return(
        <React.Fragment>
            <AppBar 
                position = "relative" 
                color = "inherit" 
                sx = {{ 
                    top: 0, 
                    bottom: 'auto',
                    boxShadow: 'none'  
                }}>
                <Toolbar>
                <IconButton 
                    color = "inherit"
                    sx = {{ 
                        background: 'rgba(0, 0, 0, 0.03)',
                        borderRadius: 2
                    }} >
                    <WindowRoundedIcon />
                </IconButton>
                    <SyledHome variant = 'h5'>Wallet</SyledHome>
                <IconButton color = "inherit">
                    
                </IconButton>
                </Toolbar>
            </AppBar>
            <Paper square sx = {{ pb: '70px', mt: '0' }}>
                
            </Paper>
            <BottomNavBar/>
        </React.Fragment>
    )
}
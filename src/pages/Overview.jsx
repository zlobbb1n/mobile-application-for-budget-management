import React from 'react';
import BottomNavBar from '../components/bottomNavBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Chart from '../components/Chart';
import Totals from '../UI/Totals';
import IncExpButton from '../UI/IncExpButton';
import Expenses from '../components/Expenses';

const SyledHome = styled(Typography)({
    fontWeight: "bold",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
})

export default function Overview(){
    
    return(
        <>
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
                    }}>
                    <WindowRoundedIcon />
                </IconButton>
                    <SyledHome variant = 'h5'>Overview</SyledHome>
                <IconButton color = "inherit">
                    
                </IconButton>
                </Toolbar>
            </AppBar>
            
            <Paper square sx = {{ pb: '70px', mt: '0' }}>
                <Totals/>
                <Box sx = {{ pb: '5%', m: '0 2%', maxHeight: 500 }}>
                    <Chart />  
                </Box>
                <IncExpButton/>
                <Expenses/>
            </Paper>
            <BottomNavBar value = {1} />
        </>
    )
}
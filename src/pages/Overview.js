import React from 'react';
import BottomNavBar from '../components/bottomNavBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import styled from '@emotion/styled';
import { Grid, Paper, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Chart from '../components/Chart';
import Totals from '../components/Totals';
import IncExpButton from '../components/IncExpButton';
import Income from '../components/Income';
import Expenses from '../components/Expenses';

const SyledHome = styled(Typography)({
    fontWeight: "bold",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
})
const Statistics = styled(Typography)({
    fontWeight: 'bold', 
    display: 'inline-block', 
    marginTop: '7%', 
    marginLeft: '5%', 
    width: '75%'
})


export default function Overview(){
    const [period, setPeriod] = React.useState('');

    const handleChange = (event) => {
        setPeriod(event.target.value);
    };
    return(
        <React.Fragment>
            <AppBar position = "relative" color = "inherit" sx = {{ top: 0, bottom: 'auto' }}>
                <Toolbar>
                <IconButton color = "inherit" >
                    <WindowRoundedIcon />
                </IconButton>
                    <SyledHome variant = 'h5'>Overview</SyledHome>
                <IconButton color = "inherit">
                    
                </IconButton>
                </Toolbar>
            </AppBar>
            <Paper square sx = {{ pb: '70px', mt: '0' }}>
                <Totals/>
                <Typography>
                    <Statistics variant='h5'>Statistics</Statistics>
                    <Box sx = {{ width: '100%' }}>
                        <Grid container justifyContent = 'center'>
                            <Tooltip placement = 'left'>
                                <Typography sx = {{ width: '60%' }}>Apr 01 - Apr 30</Typography>
                            </Tooltip>
                            <Tooltip placement = 'right'>
                                <FormControl variant = 'standard' sx = {{ width: '30%', bottom: 20 }}>
                                    <InputLabel 
                                        sx = {{ 
                                            fontWeight: 'bold' 
                                        }}>
                                        Monthly
                                    </InputLabel>
                                    <Select
                                        id="period"
                                        value={period}
                                        onChange={handleChange}
                                        sx = {{m: 0}}>
                                        <MenuItem value={1}>Weekly</MenuItem>
                                        <MenuItem value={2}>Monthly</MenuItem>
                                        <MenuItem value={3}>Yearly</MenuItem>
                                    </Select>
                                </FormControl>
                            </Tooltip>
                        </Grid>
                    </Box>
                </Typography>
                <Box sx = {{pb: '5%'}}>
                <Chart/>  
                </Box>
                <IncExpButton/>
                <Income/><Expenses/>
            </Paper>
            <BottomNavBar/>
        </React.Fragment>
    )
}
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import BottomNavBar from '../components/bottomNavBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import styled from '@emotion/styled';
import Card from '../components/Card';
import { Transactions } from '../components/Transactions';
import { Grid, Tooltip } from '@mui/material';

const SyledHome = styled(Typography)({
    fontWeight: "bold",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
})
const Transaction = styled(Typography)({
    fontWeight: 'bold', 
    display: 'inline-block', 
    marginTop: '5px', 
    marginLeft: '5%', 
    width: '75%'
})

export default function Home(){
    
    return (
        <React.Fragment>
            
            <AppBar position = "relative" color = "inherit" sx = {{ top: 0, bottom: 'auto' }}>
                <Toolbar>
                <IconButton color = "inherit" >
                    <WindowRoundedIcon />
                </IconButton>
                    <SyledHome variant = 'h5'>Home</SyledHome>
                <IconButton color = "inherit">
                    <NotificationsActiveRoundedIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
            <CssBaseline />
            <Paper square sx = {{ pb: '70px', mt: '0' }}> 
                <Card/>
                <Transaction variant='h5'>
                    Transactions
                </Transaction>
                <Typography 
                    sx = {{
                        display: 'inline-block',
                        fontWeight: 'bold',
                        color: 'rgba(0, 0, 0, 0.5)' 
                    }}>
                    See All
                </Typography> 
                <List sx = {{ mb: 2 }}>
                    {Transactions.map(({ id, primary, secondary, logo }) => (
                        <React.Fragment key={id}>
                            {id === 1 && (   
                                <ListSubheader sx = {{ bgcolor: 'inherit' }}></ListSubheader>
                            )}
                            {id === 4 && (
                                <ListSubheader sx = {{ bgcolor: 'inherit' }}></ListSubheader> 
                            )}
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt = "Profile Picture" src={logo} />
                                </ListItemAvatar>
                                <ListItemText primary = {primary} secondary = {secondary} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
            <BottomNavBar/>
        </React.Fragment>
      );
    }
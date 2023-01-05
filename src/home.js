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
import BottomNavBar from './bottomNavBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import styled from '@emotion/styled';


const transactions = [
  {
    id: 1,
    primary: 'Money Transfer',
    secondary: '12:35 PM',
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Paypal',
    secondary: '10:20 AM',
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Uber',
    secondary: '08:40 AM',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Beta Store',
    secondary: 'Yesterday',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Bank Transfer",
    secondary: 'Yesterday',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: "Bank Transfer",
    secondary: 'Yesterday',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 7,
    primary: "Bank Transfer",
    secondary: 'Yesterday',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 8,
    primary: "Bank Transfer",
    secondary: 'Yesterday',
    person: '/static/images/avatar/4.jpg',
  },
];

const SyledHome = styled(Typography)({
    fontWeight: "bold",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
})

export default function Home(){
    return (
        <React.Fragment>
            
            <AppBar position="absolute" color="inherit" sx={{ top: 0, bottom: 'auto' }}>
            <Toolbar>
              <IconButton color="inherit" >
                <WindowRoundedIcon />
              </IconButton>
                <SyledHome variant='h5'>Home</SyledHome>
              <IconButton color="inherit">
                <NotificationsActiveRoundedIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <CssBaseline />
          <Paper square sx={{ pb: '30px' }}>
            <List sx={{ mb: 2 }}>
              {transactions.map(({ id, primary, secondary, person }) => (
                <React.Fragment key={id}>
                  {id === 1 && (
                    <ListSubheader sx={{ bgcolor: 'background.paper', mt: 7 }}>
                      Today
                    </ListSubheader>
                  )}
                  {id === 4 && (
                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                      Yesterday
                    </ListSubheader>
                  )}
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Paper>
          <BottomNavBar/>
        </React.Fragment>
      );
    }
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
import { Box } from '@mui/system';
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
    mt: '5px',
    position: 'absolute',
    left: 0,
    paddingLeft: '2%'
   
})

export default function Home(){
    
    return (
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
                        borderRadius: 2,
                        
                    }}>
                    <WindowRoundedIcon />
                </IconButton>
                    <SyledHome variant = 'h5'>Home</SyledHome>
                <IconButton 
                    color = "inherit" 
                    href = '/notifications'
                    sx = {{ 
                        background: 'rgba(0, 0, 0, 0.03)',
                        borderRadius: 2
                    }}>
                    <NotificationsActiveRoundedIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
            <CssBaseline />
            <Paper square sx = {{ pb: '70px', mt: '0' }}> 
                <Card/>
                <Box sx = {{ width: '100%' }}>
                    <Grid container justifyContent = 'center'>
                        <Tooltip>
                            <Transaction variant='h5'>
                                Transactions
                            </Transaction>
                        </Tooltip>
                        <Tooltip>
                            <Typography 
                                sx = {{
                                    position: 'relative',
                                    top: 5,
                                    ml: '75%',
                                    fontWeight: 'bold',
                                    color: 'rgba(0, 0, 0, 0.5)' 
                                }}>
                                See All
                            </Typography>
                        </Tooltip>
                    </Grid>
                </Box>
                
                 
                <List sx = {{ mb: 2 }}>
                    {Transactions.map(({ id, primary, secondary, logo, trans }) => (
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
                                <ListItemText 
                                    primary = {
                                        <Typography 
                                            sx = {{
                                                fontWeight: 'bold'
                                            }}>
                                            {primary}
                                        </Typography>
                                    } 
                                    secondary = {
                                        <Typography
                                            sx = {{
                                                fontSize: 'small',
                                                color: 'rgba(0, 0, 0, 0.5)'
                                            }}>
                                            {secondary}
                                        </Typography>
                                    }
                                    >
                                </ListItemText>
                                <ListItemText>
                                    <Typography
                                        sx = {{
                                            fontWeight: 'bold',
                                            fontSize: 'large',
                                            textAlign: 'end',
                                            color: 'red',
                                            mr: '6%'
                                        }}>
                                        {trans}
                                    </Typography> 
                                </ListItemText>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
            <BottomNavBar/>
        </>
      );
    }
import { NotificationList } from "../data/NotificationData";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

const SyledHome = styled(Typography)({
    fontWeight: "bold",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
})

export default function Notification(){
    return(
        <>
        <AppBar 
            position = 'relative' 
            color = 'inherit' 
            sx = {{ 
                top: 0, 
                bottom: 'auto',
                boxShadow: 'none' 
            }}>
            <Toolbar>
                <IconButton 
                    color = 'inherit' 
                    href = '/home'
                    sx = {{ 
                        background: 'rgba(0, 0, 0, 0.03)',
                        borderRadius: 2
                    }} >
                    <KeyboardArrowLeftIcon />
                </IconButton>
                    <SyledHome variant = 'h5'>Notifications</SyledHome>
                <IconButton color = "inherit" href = '/notifications'>
                
                </IconButton>
            </Toolbar>
        </AppBar>
        <Typography>
            <List sx = {{ mb: 2, width: '100%' }}>
                    {NotificationList.map(({ id, primary, secondary, logo, pay }) => (
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader 
                                    sx = {{ 
                                        bgcolor: 'inherit', 
                                        fontWeight: 'bold',
                                        fontSize: '100%',
                                        color: 'rgba(0, 0, 0, 0.5)', 
                                    }}>
                                    Today
                                </ListSubheader>
                            )}
                            {id === 4 && (
                                <ListSubheader
                                    sx = {{ 
                                        bgcolor: 'inherit', 
                                        fontWeight: 'bold',
                                        fontSize: '100%',
                                        color: 'rgba(0, 0, 0, 0.5)', 
                                    }}>  
                                    Yesterday
                                </ListSubheader> 
                            )}
                            <ListItem button sx = {{ width: '100%' }}>
                                <ListItemAvatar>
                                    <Avatar 
                                        alt = "Profile Picture" 
                                        src = {logo}
                                        sx = {{ borderRadius: 2, background: 'rgba(0, 0, 0, 0.03)' }} />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary = {
                                        <Typography 
                                            sx = {{
                                                fontWeight: 'bold',
                                                color: 'rgba(0, 0, 0, 0.6)',
                                                mr: '5%'
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
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
        </Typography>
        </>
    )
}
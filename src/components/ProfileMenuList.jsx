import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { IconButton, Typography } from '@mui/material';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutIcon from '@mui/icons-material/Logout';

function Settings(){
    window.location.href = '/settings'
}
export default function ProfileMenuList() {

  return (
    <List
        sx = {{ 
            width: '100%', 
            bgcolor: 'background.paper'
        }}
    >
        <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
            <IconButton
            sx = {{ 
                bgcolor: '#6149f9', 
                color: 'background.paper', 
                borderRadius: 2,
                mr: '5%'
            }}>
            <PersonIcon/>
            </IconButton>
            <ListItemText 
                primary = {
                    <Typography 
                    sx = {{  
                        fontWeight: 'bold',
                        fontSize: '20px'   
                    }}>
                        Account Info
                    </Typography>
                }
            />
            <IconButton sx = {{ mr: '5%' }} >
                <KeyboardArrowRightRoundedIcon/>
            </IconButton>
        </ListItem>

        <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
            <IconButton 
            sx = {{ 
                bgcolor: '#61c876', 
                color: 'background.paper', 
                borderRadius: 2,
                mr: '5%'
            }}>
            <ShieldRoundedIcon/>
            </IconButton>
            <ListItemText 
                primary = {
                    <Typography 
                    sx = {{  
                        fontWeight: 'bold',
                        fontSize: '20px'   
                    }}>
                        Security Code
                    </Typography>
                }
            />
            <IconButton sx = {{ mr: '5%' }} >
                <KeyboardArrowRightRoundedIcon/>
            </IconButton>
        </ListItem>

        <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
            <IconButton 
                sx = {{ 
                    bgcolor: '#38627b', 
                    color: 'background.paper', 
                    borderRadius: 2,
                    mr: '5%'
                }}>
            <HttpsRoundedIcon/>
            </IconButton>
            <ListItemText 
                primary = {
                    <Typography 
                    sx = {{  
                        fontWeight: 'bold',
                        fontSize: '20px'   
                    }}>
                        Privacy Policy
                    </Typography>
                }
            />
            <IconButton sx = {{ mr: '5%' }} >
                <KeyboardArrowRightRoundedIcon/>
            </IconButton>
        </ListItem>
        <ListItem sx = {{ width: '100%', m: '6% 5%' }} onClick = {Settings}>
            <IconButton
                href = '/settings'
                sx = {{ 
                    bgcolor: '#197874', 
                    color: 'background.paper',
                    borderRadius: 2,
                    mr: '5%'
                }}>
                <SettingsRoundedIcon/>
            </IconButton>
            <ListItemText 
                primary = {
                    <Typography 
                    sx = {{  
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}>
                        Settings
                    </Typography>
                }
            />
            <IconButton sx = {{ mr: '5%' }}>
                <KeyboardArrowRightRoundedIcon />
            </IconButton>
        </ListItem>
        <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
            <IconButton
            sx = {{ 
                    bgcolor: '#6149f9', 
                    color: 'background.paper', 
                    borderRadius: 2,
                    mr: '5%'
                }}>
            <LogoutIcon/>
            </IconButton>
            <ListItemText 
                primary = {
                    <Typography 
                    sx = {{  
                        fontWeight: 'bold',
                        fontSize: '20px'   
                    }}>
                        Logout
                    </Typography>
                }
            />
            <IconButton sx = {{ mr: '5%' }}>
                <KeyboardArrowRightRoundedIcon/>
            </IconButton>
        </ListItem>
    </List>
  );
}
import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import WatchIcon from '@mui/icons-material/Watch';
import ExplicitIcon from '@mui/icons-material/Explicit';

const SyledHome = styled(Typography)({
    fontWeight: "bold",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto',
})

export default function Settings(){
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
                    color = 'inherit' 
                    href = '/profile'
                    sx = {{ 
                        background: 'rgba(0, 0, 0, 0.03)',
                        borderRadius: 2
                    }} >
                    <KeyboardArrowLeftIcon />
                </IconButton>
                    <SyledHome variant = 'h5'>Settings</SyledHome>
                <IconButton>
                    
                </IconButton>
                </Toolbar>
            </AppBar>
            <List
                sx = {{ 
                    width: '100%', 
                    bgcolor: 'background.paper'
                }}>
            
                <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
                    <IconButton
                    sx = {{ 
                        bgcolor: '#3e9afe', 
                        color: 'background.paper', 
                        borderRadius: 2,
                        mr: '5%'
                    }}>
                    <CreditCardRoundedIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px'   
                            }}>
                                Payment
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
                        bgcolor: '#feb920', 
                        color: 'background.paper', 
                        borderRadius: 2,
                        mr: '5%'
                    }}>
                    <WatchLaterRoundedIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px'   
                            }}>
                                Activity
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
                            bgcolor: '#9090aa', 
                            color: 'background.paper', 
                            borderRadius: 2,
                            mr: '5%'
                        }}>
                    <EmailRoundedIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px'   
                            }}>
                                Message Center
                            </Typography>
                        }
                    />
                    <IconButton sx = {{ mr: '5%' }} >
                        <KeyboardArrowRightRoundedIcon/>
                    </IconButton>
                </ListItem>
                <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
                    <IconButton
                        href = '/setting'
                        sx = {{ 
                            bgcolor: '#1c7876', 
                            color: 'background.paper',
                            borderRadius: 2,
                            mr: '5%'
                        }}>
                        <WatchIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px',
                            }}>
                                Reminder
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
                            bgcolor: '#de6d56', 
                            color: 'background.paper', 
                            borderRadius: 2,
                            mr: '5%'
                        }}>
                    <LanguageIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px'   
                            }}>
                                Language
                            </Typography>
                        }
                    />
                    <IconButton >
                        <ExplicitIcon/>
                    </IconButton>
                    <IconButton sx = {{ mr: '5%' }}>
                        <KeyboardArrowRightRoundedIcon/>
                    </IconButton>
                </ListItem>
                <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
                    <IconButton
                    sx = {{ 
                            bgcolor: '#29386c', 
                            color: 'background.paper', 
                            borderRadius: 2,
                            mr: '5%'
                        }}>
                    <InfoIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px'   
                            }}>
                                FAQs
                            </Typography>
                        }
                    />
                    <IconButton sx = {{ mr: '5%' }}>
                        <KeyboardArrowRightRoundedIcon/>
                    </IconButton>
                </ListItem>
                <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
                    <IconButton
                    sx = {{ 
                            bgcolor: '#a6a5e7', 
                            color: 'background.paper', 
                            borderRadius: 2,
                            mr: '5%'
                        }}>
                    <TelegramIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px'   
                            }}>
                                Send Feedback
                            </Typography>
                        }
                    />
                    <IconButton sx = {{ mr: '5%' }}>
                        <KeyboardArrowRightRoundedIcon/>
                    </IconButton>
                </ListItem>
                <ListItem sx = {{ width: '100%', m: '6% 5%' }}>
                    <IconButton
                    sx = {{ 
                            bgcolor: '#fc4b4e', 
                            color: 'background.paper', 
                            borderRadius: 2,
                            mr: '5%'
                        }}>
                    <WarningRoundedIcon/>
                    </IconButton>
                    <ListItemText 
                        primary = {
                            <Typography 
                            sx = {{  
                                fontWeight: 'bold',
                                fontSize: '20px'   
                            }}>
                                Report a Problem
                            </Typography>
                        }
                    />
                    <IconButton sx = {{ mr: '5%' }}>
                        <KeyboardArrowRightRoundedIcon/>
                    </IconButton>
                </ListItem>
            </List>
        </>
    )
}
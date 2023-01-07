import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import { ExpensesData } from '../data/ExpensesData';
import { Typography } from '@mui/material';

export default function Expenses(){
    return(
        <List sx = {{ mb: 2 }}>
                {ExpensesData.map(({ id, primary, secondary, logo, trans }) => (
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
    )
}
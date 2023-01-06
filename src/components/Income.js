import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import { IncomeData } from '../IncomeData';

export default function Income(){
    return(
        <List sx = {{ mb: 2 }}>
                {IncomeData.map(({ id, primary, secondary, logo }) => (
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
    )
}
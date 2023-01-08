import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, InputLabel, Tooltip } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { Box } from '@mui/system';

const CardElem = styled(Typography)({
    background: 'linear-gradient(43deg, rgba(78,126,229,1) 0%, rgba(188,99,190,1) 50%, rgba(248,132,107,1) 100%)',
    margin: '7%',
    marginLeft: '6%',
    marginRight: '6%',
    height: 'auto',
    borderRadius: 40 
})

export default function Card(){
    const [bill, setBill] = React.useState('');

    const handleChange = (event) => {
      setBill(event.target.value);
    };
    return(
        <CardElem>
            <Box 
                sx = {{ 
                    width: '100%',
                }}>
                <Grid container justifyContent = 'center'>
                    <Tooltip placement = 'top-left'>
                        <FormControl variant = 'standard' sx = {{ width: '35%', mr: '40%', ml: '5%', mt: '1%' }}>    
                            <InputLabel
                                sx = {{ 
                                    fontWeight: 'bold', 
                                    color: 'rgba(255, 255, 255, 0.8)', 
                                    fontSize: 'small' 
                                    }}>
                                Total Balance
                            </InputLabel>
                            <Select
                                id = 'bill'
                                value = {bill}
                                onChange = {handleChange}
                                sx = {{
                                    m: 0,
                                    color: 'rgba(255, 255, 255, 0.8)'
                                }}>
                                <MenuItem value = "">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value = {1}>Bill 1</MenuItem>
                                <MenuItem value = {2}>Bill 2</MenuItem>
                                <MenuItem value = {3}>Bill 3</MenuItem>  
                            </Select>
                        </FormControl>
                    </Tooltip>
                    <Tooltip placement = 'top-right'>
                        <IconButton sx = {{  }} >
                            <MoreHorizIcon button sx = {{color: 'rgba(255, 255, 255, 0.8)', mt: 1, mr: 1 }}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip placement = 'left'>
                        <Typography 
                            variant = 'h5' 
                            sx = {{ 
                                width: '100%',
                                fontWeight: 'bold',
                                fontSize: '200%',
                                color: 'rgba(255, 255, 255, 1)',
                                mb: '5%',
                                ml: '10%',
                                mr: '50%'
                            }}>
                            $3,257.00
                        </Typography >
                    </Tooltip>
                    <Tooltip placement = 'bottom-start'>
                        
                        <Typography 
                            sx = {{ 
                                width: '50%', 
                                display: 'inline-block', 
                                fontSize: '17px', 
                                fontWeight: 'bold', 
                                color: 'rgba(255, 255, 255, 0.8)',
                                mt: '3%',
                                mb: '5%',
                                ml: '4%', 
                                }}>
                            <IconButton sx = {{background: 'rgba(0, 0, 0, 0.1)', ml: '10%', mr: 1}}>
                                <ArrowDownwardOutlinedIcon fontSize = 'small' sx = {{ color: 'rgba(255, 255, 255, 0.8)' }}/>
                            </IconButton>
                            Income
                            <Typography 
                                variant = 'h6' 
                                sx = {{ 
                                    fontWeight: 'bold',
                                    fontSize: '19px',
                                    ml: '15%',  
                                }}>
                                    $2,350.00
                            </Typography>
                        </Typography>
                    </Tooltip>
                    <Tooltip placement = 'bottom-end'>
                        <Typography 
                            sx = {{ 
                                width: '40%', 
                                display: 'inline-block', 
                                fontSize: '17px', 
                                fontWeight: 'bold', 
                                color: 'rgba(255, 255, 255, 0.8)',
                                mb: '5%',
                                mt: '3%',
                                mr: '6%'
                            }}>
                            <IconButton sx = {{background: 'rgba(0, 0, 0, 0.1)', mr: 1}}>
                                <ArrowUpwardOutlinedIcon fontSize = 'small' sx = {{color: 'rgba(255, 255, 255, 0.8)' }} />
                            </IconButton>
                            Expenses
                            <Typography 
                                variant = 'h6' 
                                sx = {{ 
                                    fontWeight: 'bold',
                                    fontSize: '19px',
                                    ml: 6, 
                                }}>
                                    $950.00
                            </Typography>
                        </Typography>
                    </Tooltip>
                </Grid>
            </Box>
        </CardElem>
    )
}
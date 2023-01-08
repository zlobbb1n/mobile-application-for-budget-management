import React from 'react';
import styled from '@emotion/styled';
import { Grid, Paper, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const Statistics = styled(Typography)({
    fontWeight: 'bold', 
    display: 'inline-block', 
    marginTop: '7%', 
    marginLeft: '5%', 
    width: '75%'
})

export default function ChartTitle(){
    const [period, setPeriod] = React.useState('');

    const handleChange = (event) => {
        setPeriod(event.target.value);
    };
    return(
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
    )
}
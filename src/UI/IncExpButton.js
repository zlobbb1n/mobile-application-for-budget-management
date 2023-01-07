import React from 'react';
import styled from '@emotion/styled';
import { Grid, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Expenses from '../components/Expenses';

const StyledButton = styled(Button)({
    borderRadius: 10,
    color: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'inherit'
})

export default function IncExpButton(){
    return(
        <Box sx = {{ width: '100%' }}>  
                <Grid container justifyContent = 'center'>
                    <Tooltip placement = 'top'>         
                        <ButtonGroup variant = 'outlined' disableElevation sx = {{  }}> 
                            <StyledButton sx = {{ background: 'rgba(103, 58, 183, 1)' }}>Income</StyledButton>
                            <StyledButton sx = {{ background: 'rgba(244, 67, 54, 1)' }}>Expenses</StyledButton>
                        </ButtonGroup> 
                    </Tooltip>
                </Grid> 
            </Box>
    )
}
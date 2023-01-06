import React from 'react';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';
import { Grid, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const SyledTotals = styled(Typography)({
    width: '40%', 
    height: 80, 
    display: 'inline-block',
    borderRadius: 15,
    margin: '3%',
    marginTop: '7%',
    
})

export default function Totals(){
    return(
        <Box sx = {{ width: '100%' }}>  
                <Grid container justifyContent = 'center'>
                    <Tooltip placement = 'top-left'>
                        <SyledTotals 
                            sx = {{ 
                                background: 'rgba(103, 58, 183, 0.2)',
                                textAlign: 'center',   
                            }}>
                                
                                <Typography 
                                    sx = {{ 
                                        color: 'rgba(0, 0, 0, 0.7)', 
                                        fontSize: 'larger', 
                                        mt: 1, 
                                        mb: 0 
                                    }}>
                                    Total Income
                                </Typography>
                                <Typography 
                                    sx = {{ 
                                        fontSize: 'medium', 
                                        fontWeight: 'bold', 
                                        width: '80%' 
                                    }}>
                                    <IconButton>
                                        <ArrowCircleDownIcon 
                                            sx = {{ 
                                                color: 'rgba(103, 58, 183, 0.8)' 
                                            }} 
                                            fontSize = 'medium'
                                        />
                                    </IconButton>
                                    $8,500
                                </Typography>
                        </SyledTotals>
                    </Tooltip>
                    
                    <Tooltip placement = 'top-right'>
                        <SyledTotals 
                            sx = {{ 
                                background: 'rgba(244, 67, 54, 0.2)',
                                textAlign: 'center'   
                            }}>
                                <Typography 
                                    sx = {{ 
                                        color: 'rgba(0, 0, 0, 0.7)', 
                                        fontSize: 'larger', 
                                        mt: 1, 
                                        mb: 0 
                                    }}>
                                    Total Expenses
                                </Typography>
                                <Typography sx = {{ fontSize: 'medium', fontWeight: 'bold', width: '80%' }}>
                                    <IconButton>
                                        <ArrowCircleUpIcon 
                                        sx = {{ 
                                            color: 'rgba(244, 67, 54, 0.8)' 
                                        }} 
                                        fontSize = 'medium' />
                                    </IconButton>
                                    $3,800
                                </Typography>  
                        </SyledTotals>
                    </Tooltip>
                </Grid> 
            </Box>
    )
}
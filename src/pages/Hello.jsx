import React from 'react';
import { Grid, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../UI/CustomButton';
import HelloAvatar from '../components/HelloAvatar';

export default function Hello(){
    return(
        <>
        <Box sx = {{ width: '100%' }}>
            <Grid container justifyContent = 'center'>
                <Tooltip>  
                    <HelloAvatar/>
                </Tooltip>
                <Tooltip>
                    <Typography 
                        sx = {{
                            textAlign: 'center',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: 'rgba(0, 0, 0, 0.7)',

                            mt: '15%',
                            ml: '5%',
                            mr: '5%',
                        }}>
                        Save your money with Expense Tracker
                    </Typography>
                </Tooltip>
                <Tooltip>
                    <Typography
                        sx = {{
                            fontSize: '18px',
                            textAlign: 'center',
                            color: 'rgba(0, 0, 0, 0.5)',

                            m: '3% 9%'
                        }}>
                        Save money! The more your money works for you, the less you have to work for money.
                    </Typography>
                </Tooltip>
                <Tooltip>
                    <Typography 
                        sx = {{ 
                            width: '50%', 
                            mt: '17%',
                        }}>
                        <CustomButton/>
                    </Typography>
                </Tooltip>
            </Grid>
        </Box>
        </>
    )
}
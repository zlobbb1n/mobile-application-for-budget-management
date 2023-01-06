import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LetsStartButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: '#7514ba',
    marginRight: 'auto',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: '#5a0dbd' 
    }
})

function homePage() {
    window.location.href="/home"
}

export default function CustomButton(){
    return( 
        <LetsStartButton variant="contained" onClick={homePage}>
            Let's Start 
        </LetsStartButton>  
    )
}
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LetsStartButton = styled(Button)({
    width: '100%',
    height: 55,

    borderRadius: 15,
    boxShadow: 'none',
    backgroundColor: '#7514ba',

    textTransform: 'none',

    fontSize: '20px',

    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'primary' 
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
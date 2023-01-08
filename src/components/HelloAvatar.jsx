import { Avatar, Stack } from '@mui/material';

export default function HelloAvatar(){
    return(
        <Stack spacing = {4}>
            <Stack direction = 'row' spacing = {1}>
                <Avatar 
                    src = 'https://cdn3.iconfinder.com/data/icons/coiny-3d/512/7._Bitcoin_Wallet.png'
                    alt = 'Wallet'
                    sx = {{
                        width: '80%',
                        height: 'auto',

                        mt: '30%',
                        ml: '10%',

                        background: 'rgba(0, 0, 0, 0.03)'
                    }}
                />
            </Stack>
        </Stack>      
    )
}
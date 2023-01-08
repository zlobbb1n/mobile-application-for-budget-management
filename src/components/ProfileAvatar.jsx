import { Avatar, Stack } from '@mui/material';

export default function ProfileAvatar(){
    return(
        <>
        
            <Stack direction = 'row' spacing = {1}>
                
                <Avatar 
                    src = 'https://avatars.yandex.net/get-music-content/4716681/f05720fb.a.15372160-1/m1000x1000?webp=false'
                    alt = 'Leslie Alexander'
                    sx = {{
                        width: '50%',
                        height: 'auto',

                        mt: '5%',
                        mb: '5%',
                        ml: '25%',
                    }}
                />
                
            </Stack>
        </>    
    )
}
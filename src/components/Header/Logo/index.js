import { Box } from '@mui/material';

const Logo = () => {
    return (
        <Box display="flex" alignItems="left">
            <img src={'https://github.com/ThainaraTabile/desafio-frontend/blob/main/assets/images/iconLoggi.png?raw=true'}
                alt="Logo Loggi"
                style={{ width: '90px', marginRight: '10px' }} />
        </Box>
    );
};

export default Logo;

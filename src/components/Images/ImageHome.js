import React from 'react';
import { Box } from '@mui/material';

const ImageHome = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            overflow='none'
        >
            <img
                src={'https://github.com/ThainaraTabile/desafio-frontend/blob/main/assets/images/figureHome.png?raw=true'}
                alt="Logo Loggi"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    width: '100%',
                    objectFit: 'contain',
                }}
            />
        </Box>
    );
};

export default ImageHome;

import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')({
    backgroundImage: 'linear-gradient(45deg, #0487fc, #04a4fc, #049cfc, #0494fc, #047cfc)',
    height: '10rem',
    marginTop: '6rem',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
});

export default function Footer() {
    return (
        <StyledContainer>
            <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }}>
                <Link href="https://www.loggi.com/enviar-pacotes/" underline="none">
                    <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>Enviar pacotes</Typography>
                </Link>
                <Link href="https://www.loggi.com/fazer-entregas/" underline="none">
                    <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>Fazer entregas</Typography>
                </Link>
                <Link href="https://ajuda.loggi.com/hc/pt-br" underline="none">
                    <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>Central de Ajuda</Typography>
                </Link>
                <Link href="https://www.loggi.com/conheca-a-loggi/" underline="none">
                    <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>Conheça a Loggi</Typography>
                </Link>
            </Box>
        </StyledContainer>
    )
}
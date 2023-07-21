import { useMediaQuery, Box, TextField, Button, InputAdornment, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './image.png';
import imageSmall from './imageSmall.png'
import {formStyle, textStyle, boxStyle, inputStyle, pTextStyle, searchIconStyle, buttonStyle, imageStyle, imageStyleSmall } from './styles';
import getOrdersTrack from '../../API/orders';


function FormBox() {
  const [trackingCode, setTrackingCode] = useState('');
  const navigate = useNavigate();
  const hiddenImage = useMediaQuery('(max-width:1323px)');

  const handleTrackClick = async () => {
    const orders = await getOrdersTrack();
    const order = orders.find((item) => item.id === Number(trackingCode));

    if (order) {
      navigate(`/rastreador/${trackingCode}`);
    } else {
      console.log('Order not found');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box sx={boxStyle}>
          <div style={formStyle}>
            <div style={textStyle}>
              <p style={pTextStyle}>Bem vindo(a) ao rastreador da Loggi</p>
              <p>Acompanhe com a gente a entrega do seu pedido!</p>
            </div>
            <TextField
              label="Código de rastreamento"
              sx={inputStyle}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon style={searchIconStyle} />
                  </InputAdornment>
                ),
              }}
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
            />
            <Button
              variant="contained"
              sx={buttonStyle}
              onClick={handleTrackClick}
            >
              Acompanhar o pedido
            </Button>
          </div>
        </Box>
      </Grid>
      {!hiddenImage && (
        <Grid item xs={12} md={6}>
          <img src={image} alt="Your Alt Text" style={imageStyle} />
        </Grid>
      )}
      {hiddenImage && (
        <Grid item xs={12} md={6}>
          <img src={imageSmall} alt="Your Alt Text" style={imageStyleSmall} />
        </Grid>
      )}
    </Grid>
  );
}
export default FormBox;
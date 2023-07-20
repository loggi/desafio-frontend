import { Box, TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import image from './image.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainStyle, formStyle, textStyle, boxStyle, inputStyle, pTextStyle, searchIconStyle, buttonStyle, imageStyle} from './styles';
import getOrdersTrack from '../../API/orders';


function FormBox() {
  const [trackingCode, setTrackingCode] = useState('');
  const navigate = useNavigate();

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
    <main style={mainStyle}>
      <Box sx={boxStyle}> 
      <section style={formStyle}>
          <div style={textStyle}>
            <p>
              Bem vindo(a) ao rastreador da Loggi
            </p>
            <p style={pTextStyle}>
              Acompanhe com a gente a entrega do seu pedido!
            </p>
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
          <Button variant="contained"
            sx={buttonStyle}
            onClick={handleTrackClick}>
            Acompanhar o pedido
          </Button>
        </section>
      </Box>
      <div>
        <img src={image} alt="Your Alt Text" style={imageStyle} />
      </div>
    </main>
  )
}
export default FormBox;
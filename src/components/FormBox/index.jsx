import { Box, TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import image from './image.png';
import { mainStyle, formStyle, textStyle, boxStyle, inputStyle, pTextStyle, searchIconStyle, buttonStyle, imageStyle} from './styles';


function FormBox() {
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
          />
          <Button variant="contained"
            sx={buttonStyle}>
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
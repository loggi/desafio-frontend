import { Box, TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import image from './image.png';


function FormBox() {
  const mainStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  }
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  }

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'var(--white)',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '1rem',
    paddingTop: '2rem',
  }

  return (
    <section style={mainStyle}>
      <Box
        sx={{
          margin: '6%',
          width: 450,
          height: 500,
          backgroundColor: 'var(--black)',
          borderRadius: '15px'
        }}
      > <section style={formStyle}>
          <div style={textStyle}>
            <p>
              Bem vindo(a) ao rastreador da Loggi
            </p>
            <p style={{ width: '250px' }}>
              Acompanhe com a gente a entrega do seu pedido!
            </p>
          </div>
          <TextField
            label="Código de rastreamento"
            sx={{
              width: '80%',
              marginTop: '20px',
              marginBottom: '20px',
              backgroundColor: 'var(--white)',
              borderWidth: '10px',
              borderRadius: '5px',
            }}
            InputProps={{
              // Add the SearchIcon inside the InputAdornment
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: 'var(--light-blue)' }} />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained"
            sx={{
              backgroundColor: 'var(--light-blue)',
              "&:hover": {
                backgroundColor: "var(--white)",
                color: "var(--light-blue)",
              },
              marginTop: '10px',
            }}>
            Acompanhar o pedido
          </Button>
        </section>
      </Box>
      <div>
        <img src={image} alt="Your Alt Text" style={{ width: '700px'}} />
      </div>
    </section>
  )
}
export default FormBox;
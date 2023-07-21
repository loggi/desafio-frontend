import { AppBar, Toolbar, Box } from '@mui/material';
import { listItemStyles, listAndLogoStyles } from './styles';
import ButtonConfirm from '../Buttom';
import logo from './logo.png'
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';
import { ListContainer } from './styles';

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: 'var(--black)' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
          <div style={listAndLogoStyles}>
            <img src={logo} alt="logo loggi" style={{ height: '80px', marginRight: '10px' }} />
            <nav style={{ display: 'block', width: '100%' }}>
              <ListContainer>
                <li style={listItemStyles}>Para você</li>
                <li style={listItemStyles}>Para empresas</li>
                <li style={listItemStyles}>Para entregar</li>
                <li style={listItemStyles}>Vendas e Suporte</li>
              </ListContainer>
            </nav>
          </div>
          <ButtonConfirm text="Entrar" />
        </Box>
        <MenuHamburguer />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
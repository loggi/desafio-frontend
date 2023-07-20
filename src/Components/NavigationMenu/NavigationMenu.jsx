import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import './NavigationMenu.css';

const NavigationMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="nav-container">
        <div className="menu-container">
          <div className="menu-icon" onClick={toggleMenu}>
            <FiMenu size={30} />
          </div>
          {isMenuOpen && (
            <ul className="menu-options">
              <li className="menu-option">Para você</li>
              <li className="menu-option">Para empresas</li>
              <li className="menu-option">Para entregar</li>
              <li className="menu-option">Vendas e suporte</li>
              <li className="menu-option">Acompanhe seu pedido</li>
              <li className="menu-option">Entrar</li>
              <li className="menu-option">Criar conta</li>
            </ul>
          )}
        </div>
      </nav>
    );
  };
  
  export default NavigationMenu;
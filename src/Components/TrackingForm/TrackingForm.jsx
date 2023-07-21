import './TrackingForm.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Orders from '../../API/Orders';
import ImageMobile from '../Img/ImgMobile';

const TrackingForm = () => {
    
    const [trackingCode, setTrackingCode] = useState('');
    const navigate = useNavigate();

    const handleTrackClick = async () => {
    const orders = await Orders();
    const order = orders.find((item) => item.id === Number(trackingCode));

    if (order) {
      navigate(`/TrackOrder/${trackingCode}`);
    } else {
      console.log('Order not found');
    } 
  };

    const isDesktop = useMediaQuery({ minWidth: 768 });
  
    return (
        <div className={`tracking-form-container ${isDesktop ? 'desktop' : 'mobile'}`}>
          {isDesktop && <div className="desktop-container"></div>} {/* Novo container azul */}
          {isDesktop ? (
            <>
              <div className="phrase">
                <p className="desktopPhrase">Nossa equipe está em ação! Acompanhe cada passo do seu pedido!</p>
                <p className="desktopPhrase" id="desktop-text">Com a Loggi tudo fica mais fácil!</p>
              </div>
              <div className="tracking-box">
              <p>Insira o código de rastreamento:</p>
              <input 
                type="text" 
                placeholder="Digite o código aqui"
                value={trackingCode} 
                onChange={(e) => setTrackingCode(e.target.value)}
                />
              <button
              type='submit' 
              onClick={handleTrackClick}>
                Acompanhar pedido
              </button>
              </div>
            </>
          ) : (
            <>
              <ImageMobile/>
              <div className="tracking-box">
              <p>Insira o código de rastreamento:</p>
              <input 
              type="text" 
              placeholder="Digite o código aqui" 
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              />
              <button 
              type='submit' 
              onClick={handleTrackClick}>
                Acompanhar pedido
              </button>
              </div>
            </>
          )}
        </div>
      );
  };

export default TrackingForm;

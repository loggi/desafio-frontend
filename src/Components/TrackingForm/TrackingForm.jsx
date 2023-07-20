import './TrackingForm.css';
import { useMediaQuery } from 'react-responsive';
import ImageMobile from '../Img/ImgMobile';

const TrackingForm = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
  
    return (
        <div className={`tracking-form-container ${isDesktop ? 'desktop' : 'mobile'}`}>
          {isDesktop && <div className="desktop-container"></div>} {/* Novo container azul */}
          {isDesktop ? (
            <>
              <div className="tracking-box">
              <p>Insira o código de rastreamento:</p>
              <input type="text" placeholder="Digite o código aqui" />
              <button>Buscar</button>
              </div>
              
            </>
          ) : (
            <>
              <ImageMobile/>
              <div className="tracking-box">
              <p>Insira o código de rastreamento:</p>
              <input type="text" placeholder="Digite o código aqui" />
              <button>Buscar</button>
              </div>
            </>
          )}
        </div>
      );
  };

export default TrackingForm;

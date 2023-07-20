import './TrackingForm.css';

const TrackingForm = () => {
  return (
    <div className="tracking-form-container">
      <div className="tracking-box">
        <p>Insira o código de rastreamento:</p>
        <input type="text" placeholder="Digite o código aqui" />
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default TrackingForm;
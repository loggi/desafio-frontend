function StatusImage({ status, isLast }) {
  const statusToImageMap = {
    PEDIDO_RECEBIDO: "pedido.png",
    EM_ROTA_PARA_COLETA: "rotacoleta.png",
    PACOTE_COLETADO: "coletado.png",
    EM_ROTA_DE_ENTREGA: "rotaentrega.png",
    FINALIZADO: "entregue.png",
    ENCAMINHADO_CENTRO_DE_DISTRIBUICAO: "rotacoleta.png",
  };

  const imageName = statusToImageMap[status];
  const imageURL = `/src/assets/${imageName}`;

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyles = {
    width: "80px",
  };

  const lineStyles = {
    width: "0px",
    height: "90px", 
    border: "1px solid black",
    borderStyle: "dashed",
  };

  const noLineStyle = {
    width: "0",
    height: "0",
    border: "none",
  };

  return (
    <div style={containerStyles}>
      <img src={imageURL} alt={status} style={imageStyles} />
      <div style={isLast ? noLineStyle : lineStyles}></div>
    </div>
  );
}

export default StatusImage;

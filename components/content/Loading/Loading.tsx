import Alert from '@mui/material/Alert';

export const LoadingMessage = () => {
  return (
      <Alert sx={{ width: '100%' }} severity="info">Estamos buscando os dados. Por favor aguarde.</Alert>
  );
}
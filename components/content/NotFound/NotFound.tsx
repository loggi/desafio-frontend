import Alert from '@mui/material/Alert';
 
export const NotFound = () => {

  return (
    <Alert sx={{ width: '100%' }} severity="error">Não encontramos o que você procurava. Tente uma nova busca. <a id="goReturn" href="/">Tentar uma nova busca</a></Alert> 
  )
}
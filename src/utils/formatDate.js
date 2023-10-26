export const formatDate = (date) => {
  let dia = date.split(' ')[0]
  let hora = date.split(' ')[1]

  return `${dia.replaceAll(/-/g, '/')} - ${hora.substr(0,5)}`;  
};


const MENU = [
  {
    id: 1,
    label: 'Para você',
    redirection: 'https://www.loggi.com/enviar-pacotes/para-mim/#saiba-mais',
    submenu: [],
  },
  {
    id: 2,
    label: 'Para empresas',
    redirection: null,
    submenu: [
      {
        id: 3,
        label: 'Entregador para escritórios',
        redirection:
          'https://www.loggi.com/enviar-pacotes/escritorios/#saiba-mais',
      },
      {
        id: 4,
        label: 'Soluções para varejo',
        redirection: 'https://www.loggi.com/enviar-pacotes/',
      },
      {
        id: 5,
        label: 'Entrega para e-commerces',
        redirection:
          'https://www.loggi.com/enviar-pacotes/e-commerce/#saiba-mais',
      },
    ],
  },
  {
    id: 6,
    label: 'Para entregar',
    redirection: null,
    submenu: [
      {
        id: 7,
        label: 'Seja uma Transportadora Leve',
        redirection:
          'https://www.loggi.com/fazer-entregas/transportadoras-leve/',
      },
      {
        id: 8,
        label: 'Seja um entregador',
        redirection: 'https://www.loggi.com/fazer-entregas/',
      },
    ],
  },
  {
    id: 9,
    label: 'Venda e suporte',
    redirection: null,
    submenu: [
      {
        id: 10,
        label: 'Precisa de Ajuda?',
        redirection:
          'https://www.loggi.com/fazer-entregas/transportadoras-leve/',
      },
      {
        id: 11,
        label: '4020-1460',
        redirection: 'https://www.loggi.com/fazer-entregas/',
      },
    ],
  },
  {
    id: 12,
    label: 'Acompanha seu pedido',
    redirection: 'https://www.loggi.com/rastreador/',
    submenu: [],
  },
];

const AUTH = {
  LOGIN: 'Entrar',
  SIGNUP: 'Criar conta',
  LOGOUT: 'Sair',
  WELCOME: `Olá, User`,
};

export default { MENU, AUTH };

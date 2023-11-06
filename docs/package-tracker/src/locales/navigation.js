const MENU = [
  {
    text: 'Para você',
    redirection: 'https://www.loggi.com/enviar-pacotes/para-mim/#saiba-mais',
  },
  {
    text: 'Para empresas',
    redirection: null,
    submenu: [
      {
        text: 'Entregador para escritórios',
        redirection:
          'https://www.loggi.com/enviar-pacotes/escritorios/#saiba-mais',
      },
      {
        text: 'Soluções para varejo',
        redirection: 'https://www.loggi.com/enviar-pacotes/',
      },
      {
        text: 'Entrega para e-commerces',
        redirection:
          'https://www.loggi.com/enviar-pacotes/e-commerce/#saiba-mais',
      },
    ],
  },
  {
    text: 'Para entregar',
    redirection: null,
    submenu: [
      {
        text: 'Seja uma Transportadora Leve',
        redirection:
          'https://www.loggi.com/fazer-entregas/transportadoras-leve/',
      },
      {
        text: 'Seja um entregador',
        redirection: 'https://www.loggi.com/fazer-entregas/',
      },
    ],
  },
  {
    text: 'Venda e suporte',
    redirection: null,
    redirection: [
      {
        text: 'Precisa de Ajuda?',
        redirection:
          'https://www.loggi.com/fazer-entregas/transportadoras-leve/',
      },
      {
        text: '4020-1460',
        redirection: 'https://www.loggi.com/fazer-entregas/',
      },
    ],
  },
  {
    text: 'Acompanha seu pedido',
    submenu: 'https://www.loggi.com/rastreador/',
  },
];

const MOBILE_MENU = [
  {
    text: 'Para você',
    redirection: 'https://www.loggi.com/enviar-pacotes/para-mim/#saiba-mais',
  },
  {
    text: 'Para empresas',
    redirection: null,
    submenu: [
      {
        text: 'Entregador para escritórios',
        redirection:
          'https://www.loggi.com/enviar-pacotes/escritorios/#saiba-mais',
      },
      {
        text: 'Soluções para varejo',
        redirection: 'https://www.loggi.com/enviar-pacotes/',
      },
      {
        text: 'Entrega para e-commerces',
        redirection:
          'https://www.loggi.com/enviar-pacotes/e-commerce/#saiba-mais',
      },
    ],
  },
  {
    text: 'Para entregar',
    redirection: null,
    submenu: [
      {
        text: 'Seja uma Transportadora Leve',
        redirection:
          'https://www.loggi.com/fazer-entregas/transportadoras-leve/',
      },
      {
        text: 'Seja um entregador',
        redirection: 'https://www.loggi.com/fazer-entregas/',
      },
    ],
  },
  {
    text: 'Venda e suporte',
    redirection: null,
    redirection: [
      {
        text: 'Precisa de Ajuda?',
        redirection:
          'https://www.loggi.com/fazer-entregas/transportadoras-leve/',
      },
      {
        text: '4020-1460',
        redirection: 'https://www.loggi.com/fazer-entregas/',
      },
    ],
  },
  {
    text: 'Acompanha seu pedido',
    submenu: 'https://www.loggi.com/rastreador/',
  },
];

const AUTH = {
  LOGIN: 'Entrar',
  SIGNUP: 'Criar conta',
  LOGOUT: 'Sair',
  WELCOME: `Olá, User`,
};

export default { MENU, AUTH, MOBILE_MENU };

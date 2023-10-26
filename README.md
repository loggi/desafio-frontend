## Desafio da Loggi para vaga de front-end developer

O desafio consiste em construir, com a minha visão, **"como deveria ser a interface do [rastreador de pacotes da Loggi](https://www.loggi.com/rastreador/)?"**, levando em consideração a experiência de uso do serviço para o usuário, a criatividade da solução e a responsividade.

Considerações a ter em conta:
- Histórico de commits
- Documentação de como rodar o projeto
- Organização do código 
- Componentização e extensibilidade dos componentes Javascript

Para este desafio foram utilizadas as seguintes ferramentas (propostas no desafio):
* [Next.js](https://nextjs.org/) - Para desenvolvimento do front-end e backend (use a rota /api)
* [Material UI](https://mui.com/) - Para componentes visuais de front-end
* GitHub - para versionamento de código

## Descrição do projeto
A aplicação consta de duas telas: a home page, onde o usuário poderá inserir o codigo do rastreamento, e a tela do pedido, onde poderá ver as informações do mesmo (como data o pedido, data de entrega local de entrega), e a barra de estado, com o andamento da entrega, as datas das diferentes etapas e em qual etapa se encontra.
Se utilizou um conjunto de dados fictícios para representar o acima nomeado.

## Decisões do projeto
- A imagem utilizada na homepage é uma imagem tirada da internet, dado que não tive tempo de criar uma. Foi só utilizada a modo ilustrativo.
- Se realizou o básico para inserir um código de rastreamento e mostrar as informações do mesmo devido a o curto prazo de entrega.
- Foi feita uma validação do código de rastreio inserido para evitar o request caso o código seja invalido. Neste caso, o regex foi feito para número único. No caso real, faria uma validação tendo em conta como é formado o código de rastreio (se tiver letras, números, quantidade de caracteres, etc.)
- Algumas das ideias que eu tive para implementações futuras foram:
  - rastreio live no google maps caso fosse possível via GPS.
  - Chat para contato com o entregador para o usuário poder tirar dúvidas ou combinar o horário de entrega.
  
## Instruções técnicas para rodar seu projeto
Para poder rodar este projeto localmente precisa:
1 - fazer um fork deste projeto
2 - clonar o repositório
3 - No seu terminal, no diretório do projeto rodar os seguintes comandos: 
  ```npm install``` (para instalar as dependências)
  ```npm run dev``` (para rodar o projeto localmente)
4 - acessar [Link](http://localhost:3000) no seu navegador para ver o projeto localmente

## Acessar o projeto online
Para visualizar o projeto, clique em [Link](https://loggi-desafio-frontend-sigma.vercel.app/).

## Como testar o projeto
Para testar o projeto, basta simular um rastreio na aplicação inserindo um código de pedido no campo "Código de rastreamento" (códigos com resultado: 1, 2 e 3. Código sem resultado: qualquer outro número) e clicar no botão "Acompanhar pedido"

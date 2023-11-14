# Teste Técnico da Loggi

> Neste desafio, te convidamos a pensar como "dono da Loggi". É você quem vai definir (e implementar) como será a experiência de uso deste "rastreador". Você pode usar como inspiração o rastreador atual do site da Loggi ou de outros sites que você use e goste de acompanhar suas encomendas.

## Rodando o Projeto

O projeto foi hospedado na Vercel e pode ser acessado [aqui](https://desafio-frontend-loggi-three.vercel.app/).

### NPM

Você pode rodar o projeto diretamente com o NPM.

Basta instalar todas as dependências:

```
npm install
```

Depois pode rodar o projeto com:

```
npm run dev
```

E acessar o endereço [http://localhost:3000](http://localhost:3000)

### Docker

Se você preferir rodar o projeto com o Docker, antes de mais nada você precisa instalar o Docker na sua máquina. Você pode olhar a documentação do Docker para fazer isso.

Feito isso, você pode rodar o ambiente de desenvolvimento com:

```
npm run docker:dev
```

Ou se você preferir testar a versão de produção, pode utilizar:

```
npm run docker:prod
```

E acessar o endereço [http://localhost:3000](http://localhost:3000)

## Decisões Técnicas

Abaixo segue a lista de tecnologias e decisões técnicas que utilizei nesse projeto, de acordo com as especificações do desafio.

**_Tecnologias_**

- [x] Next.js 14 - Para desenvolvimento do front-end e backend (use a rota /api)
- [x] Material UI - Para componentes visuais de front-end
- [x] GitHub - Para versionamento de código
- [x] TailwindCSS - Integrado ao Material UI
- [x] LeafLet - Para criação de mapas
- [x] Jest - Test Runner
- [x] React Testing Library - Para testes unitários de componentes
- [x] Cypress - Para testes end-to-end

**_Qualidade de código_**

- [x] Eslint - Linter
- [x] Prettier - Formatação do código
- [x] Husky - Para criar git hooks
- [x] Commitzen - Para criação de commits semânticos

## Interface

Eu estudei um pouco da interface de rastreio de entregas até onde pudo. Eu não consegui acesso ao dashboard para ver como os detalhes da entrega são apresentados. Então optei por uma interface bem simples na primeira página, me inspirando na página da Loggi mas com um toque mais morderno e focado no formulário.

Para a página de detalhes eu me inspirei no Google Maps. Eu mostro os detalhes do rastreio de maneira flutuante mas deixo o mapa na página inteira para mostrar a rota de entrega.

## Testes

A cobertura de testes não está 100%. Infelizmente eu não tive muitas horas por dia pra trabalhar nesse teste, então optei por testar bem o componente de formulário da home que é o centro de todo o fluxo da aplicação.

Também configurei o Cypress e apenas escrevi um simples teste pra ver se a home carregava corretamente.

Acredito que mesmo não testando tudo 100%, da pra ter uma boa noção do meu conhecimento de testes.

## Possíveis Melhorias

Acredito que a Loggi tenha o seu próprio flavour do Material UI, ou algum design system baseado no material design. Como a interface é muito simples, eu optei por usar o tema padrão do material ui e não alterei muita coisa. Num cenário real a gente usaria o design system da Loggi e componentizaria melhor as telas.

Estou utilizando NextJS 14, lançado semana passada, então por estar usando mocks na aplicação eu não consegui utilizar todas as features do Next 14, como async server components, Suspense com loading state, server functions etc. Acredito que mesmo numa aplicação tão simples, todas essas novas features podem agregar bastante na experiência do usuário e organização do código.

Eu também utilizei uma lib de animação para fazer os fadeIn na página de detalhes. Em um cenário real, eu teria usado o framer motion ou react spring para criar animações mais customizaveis e performáticas.

**_Mobile-first_** na página de detalhes não dei muita atenção, senão não conseguiria terminar tudo a tempo dentro do meu curto prazo e disponibilidade. Eu gostaria de ter feito uma experiência parecida com um app nativo, mostrando a view com todos os detalhes da ordem e um botão para trocar a view para o mapa e acompanhar a entrega em tempo real.

Na questão de segurança, eu acredito que poderia ter feito um trabalho melhor protegendo a API com CORS e outros tipos de ataque. Poderia ter usado tRPC para não gerar rotas públicas da API também, mas isso foi um dos requisitos do teste.

## Considerações finais

Acredito ter entregue todos os requisitos pedidos no teste. Mesmo não estando tudo perfeito, eu acredito ter provado que tenho mais do que o conhecimento suficiente para resolver qualquer tipo de desafio no front-end (e backend se for necessário).

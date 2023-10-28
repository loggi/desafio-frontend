# Desafio Jorge Brunetto

Configurações iniciais:

```bash
# Instalar dependencias
$ yarn
ou
$ npm install
```

```bash
# Rodando o projeto
$ yarn dev
ou
$ npm run dev
```

## Já estou usando o TurboPack com as ultimas versões

Abra o browser com o link  [http://localhost:3000](http://localhost:3000) no seu navegador.

## Código de rastreo

Deixei um código fixo para exemplificar

```txt
ME23151F0A2BR
```

## Pacotes usados

Demonstrei um pouco do front reproduzindo a home de rastreamento com os components do Material, usei tambem algumas bibliotecas que são padrão de mercado, para exemplificar e mostrar o uso delas.

- NextJS 14 (Lançado em 26/10/2023)
- Material UI
- Turbo Pack
- Zustand (Gerenciar estado)

## Testes e2e

Em um terminal deixe o projeto rodando:

```bash
$ yarn dev
ou
$ npm run dev
```

Abra outro terminal e execute o texto com:

```bash
$ yarn test
ou 
$ npm run test
```

- Em seguida clique em "E2E Testing"
- Selecione o Browser (Start E2E Testing)
- Clique sobre o "home.cy.ts"

## Casos simples de testes

- Verifiquei se o projeto esta rodando
- Verificar se o texto do label é "Código de rastreamento"
- Verificar o texto do botão "Acompanhar pedidos"

# Loggi no Talent Fest Brasil 9ª Geração Laboratória

Olá! Meu nome é André e esta é a minha visão de, **"como deveria ser a interface do [rastreador de pacotes da Loggi](https://www.loggi.com/rastreador/)?"**.

## Objetivo

Analisando o site da Loggi, percebi que possivelmente a única página que está fora do Design System atual é a tela rastreador. Então, optei por tentar trazer o máximo de referências de outras páginas. Principalmente das seções da [página de produtos](https://www.loggi.com/produtos-loggi/).

O projeto está disponível [aqui](https://desafio-frontend-eosin.vercel.app/).

## Setup do Projeto

1. Instale o [Node.js](https://nodejs.org/en/).
2. Faça um clone do projeto.
3. Na pasta do projeto, digite o comando `yarn install`, ou, `npm install` se preferir. E, espere todas as dependências serem baixadas.
4. Com a finalização total da etapa anterior, digite o comando `yarn postinstall` para a instalação e configuração das dependências responsáveis pela análise e manutenção do padrão de código a cada tentativa de commit.

## Comandos

Além dos comandos comentados acima, temos:

* `yarn dev`: para iniciar o ambiente desenvolvimento.
> Note: Após a compilação, o endereço de acesso via browser será informado no Terminal junto com os status de compilação a cada arquivo alterado.
* `yarn build`: para realizar o build do projeto.
* `yarn start`: com o build já feito, este comando inicializa o projeto.
* `yarn lint`: responsável por encontrar e corrigir problemas de código.
> Note: Usando o comando com `--fix`, automaticamente os problemas mais simples são corrigidos. Este processo ocorre a cada tentativa de commit.
* `yarn generate`: para auxiliar na criação de novos componentes, templates e páginas dentro do padrão preestabelecido.
* `yarn test`: para rodar os testes unitários e obter status de cobertura através do terminal.
* `yarn test:watchAll`: comando responsável por rodar e assistir todos os testes unitários.
* `yarn test:watch`: comando responsável por rodar e assistir arquivos alterados que interfiram na cobertura e criação de testes unitários.

## Convenção de commits

Este projeto usa padrões de commits para ajudar a normalizar as mensagens de commit. Sua mensagem de commit precisa estar no formato:
```
<tipo>(escopo opcional): <descrição>
```

O `tipo` deve ser um dos **[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]**.
Você pode obter ajuda [aqui](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).

## Padrões gerais do Projeto

Abaixo está um exemplo dos principais diretórios com uma breve explicação de cada contexto:

* `app`: Diretório padrão Next.js. Para mais informações, clique [aqui](https://nextjs.org/docs/app).

```sh
┣ 📂 src \
┃ ┣ ┣ 📂 app \
┃ ┃ ┃ ┣ 📂 home \
┃ ┃ ┃ ┃ ┣ 📜 page.js
```

* `components`: diretório responsável pelos componentes básicos dos sistemas de design. Os componentes deste diretório podem ser utilizados em qualquer contexto, pois não contém regras de negócio. Todos os seus componentes precisam ter testes unitários.

```sh
┣ 📂 src \
┃ ┣ 📂 components \
┃ ┃ ┣ 📂 Button \
┃ ┃ ┃ ┣ 📜 index.jsx
┃ ┃ ┃ ┣ 📜 styles.js
┃ ┃ ┃ ┣ 📜 test.jsx
```

* `templates`: o diretório de templates contém o agrupamento de componentes do diretório components para organizar o comportamento esperado da UI da página, podendo ter testes unitários caso a equipe sinta necessidade.

```sh
┣ 📂 src \
┃ ┣ 📂 templates \
┃ ┃ ┣ 📂 Home \
┃ ┃ ┃ ┣ 📜 index.jsx
```

# Guia de Instalação e Execução do Projeto

Este guia fornece instruções sobre os pré-requisitos para rodar o projeto frontend na sua máquina, bem como como executar o projeto usando Docker.

## Pré-requisitos

Antes de iniciar, verifique se você tem os seguintes pré-requisitos instalados na sua máquina:

1. **Node.js e npm**: O Next.js é baseado no Node.js, portanto, você precisa ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. **Git**: O Git é usado para controlar o código-fonte. Você pode baixá-lo em [git-scm.com](https://git-scm.com/).

## Instalação

Siga estas etapas para configurar e executar o projeto Next.js na sua máquina:

1. Clone o repositório do projeto:

   ```bash
   git clone git@github.com:rwladyka/desafio-frontend.git
   ```

2. Navegue para o diretório do projeto:

    ```bash
    cd desafio-frontend
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

O servidor estará disponível em http://localhost:3000. Você pode acessar o projeto no seu navegador.

## Executando com Docker

Se você preferir usar o Docker para rodar o projeto, siga estas etapas:

1. Certifique-se de que você tenha o Docker instalado na sua máquina. Você pode baixá-lo [aqui](https://docs.docker.com/compose/install/). Instale o docker-compose [aqui](https://docs.docker.com/compose/install/)

2. Clone o repositório do projeto, se ainda não o fez (veja as etapas 1 e 2 na seção "Instalação" acima).

3. Execute o seguinte comando para iniciar o projeto com Docker:

    ```bash
    docker-compose up -d
    ```

O servidor estará disponível em http://localhost:3000, da mesma forma que na seção anterior.
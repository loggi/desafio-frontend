# Jaiminho - Rastreamento de pacotes
Jaiminho é uma aplicação Front-End, para restreio de encomendas através de um código de rastreamento previamente informado ao usuário. 

## Configuração, Instalação e Servindo o projeto localmente

### Pré requisitos
Você precisa ter o [NodeJs](https://nodejs.org) instalado em sua máquina, na versão minima `v18.17.0`. Utilize seu gerenciador de pacotes preferido. 
Eu utilizei o **npm**, e os comandos serão baseados no mesmo.

### Instalando o projeto

#### Clone o projeto
No terminal rode os comandos

```bash 
git clone https://github.com/ubirajarapelli/desafio-frontend.git
```
E acesse o diretório do projeto

```bash
cd desafio-frontend
```

#### Instale as dependencias
No terminal rode o comando

```bash
npm install
```

#### Servindo o projeto
No terminal rode o comando

```bash
npm run dev
```

O projeto será servido no endereço `http://localhost:3000/`, agora abra ele no seu browser preferido.

#### Executando os testes unitários
No terminal rode o comando

```bash
npm run test
```

## Decisões de implementação
A aplicação foi escrita utilzando o **Next.Js** juntamente com **Typescript**.

Os testes unitários foram escritos utilzando **Testing Libray** juntamente com **Jest**, fazendo a abordagen de testes de comportamento dos componentes e não os [testes de detalhes da implementação](https://kentcdodds.com/blog/testing-implementation-details).

Optei na estilização escrever **CSS** juntamente com a metodogia **BEM** e não utilizar o **Material UI**, pois acredito que para a interface idealizada por mim consegui simplificar o markup e tamém manter a semantica mantendo a separação das camadas, onde com a utilização do Material UI eu levaria mais tempo para chegar no resultado.


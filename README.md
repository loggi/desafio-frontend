## Live at:

https://challenge-tracker-frontend.vercel.app/rastreador

Códigos de ratreio dos pedidos mocados.
| ID | Status |
| --- | --- |
| ABCD12345 | Em trânsito |
| EFGH67890 | Entregue |
| IJKL34567 | Em trânsito |

---

## Descrição do desafio e requisitos técnicos:

Leia a descrição do desafio e os requisitos técnicos no [challenge.md](challenge.md) para obter mais detalhes.

---

## Como rodar o projeto:

#### Clone o repositório:

```shell
  git clone git@github.com:jonataspinto/challenge-tracker-frontend.git
```

#### Requisitos:

```
  Nodejs versão 18
```

> **Note**
> A versão sugerida já está configurada no `.nvmrc` basta executar `$ nvm use`

#### Instalação de dependências:

- Navegue para a raiz do projeto.

```shell
  cd challenge-tracker-frontend
```

- Instalando as dependências.

```shell
  yarn
```

ou

```shell
  npm run install
```

#### Iniciar servidor de desenvolvimento:

```shell
  yarn dev
```

ou

```shell
  npm run dev
```

Acesse [localhost:3000](http://localhost:3000) para visualizar em seu navegador. :tada:

#### Build de produção:

```shell
  yarn build
```

ou

```shell
  npm run build
```

#### Iniciar servidor após Build:

```shell
  yarn start
```

ou

```shell
  npm run start
```

Acesse [localhost:3000](http://localhost:3000) para visualizar em seu navegador. :tada:

### Rodando com Docker

#### Requisitos

Instale o [Docker Desktop](https://docs.docker.com/get-docker/) para Mac, Windows ou Linux. `Docker Desktop` inclui `Docker Compose`` como parte da instalação.

#### Iniciar servidor de desenvolvimento:

Build da imagem:

```shell
  docker compose build
```

Rodando o container da aplicação:

```shell
  docker compose up -d
```

Acesse [localhost:3000](http://localhost:3000) para visualizar em seu navegador. :tada:

---

## Testes automatizados.

### Testes unitários/integração:

Rodando os testes:

```sell
  yarn test
```

ou

```shell
  npm run test
```

### Testes e2e:

> **Note**
> O cypress está configurado para acessar o ambiente http://localhost:3000, então o projeto deve estar rodando antes de executar o comando de testes.

Rodando os testes:

```sell
  yarn test:cypress
```

ou

```shell
  npm run test:cypress
```

---

## Explicando algumas decisões:

#### Nextjs + Material UI

Segui o que foi proposto [desafio](challenge.md).

#### Typescript

Embora o boilerplate sugerido ainda não esteja configurado, optei pelo TypeScript devido à minha familiaridade com a linguagem.

#### Corbetura de testes

Testes de unidade e integração, implementados com o uso do Jest e do RTL, desempenham um papel crucial na garantia de que os componentes reutilizáveis em uma aplicação se comportem de maneira consistente em diversos cenários. Entretanto, é inegável que escrever uma quantidade substancial de testes para abranger toda a aplicação pode ser um processo demorado.

Diante dessa realidade, embora tenha desenvolvido alguns testes com Jest e RTL como demonstrações de boas práticas, tomei a decisão estratégica de dar ênfase aos testes end-to-end (E2E) em uma parte significativa da cobertura. Essa decisão se fundamenta na eficiência da implementação e na minha aspiração de demonstrar competência em uma ferramenta menos convencional.

Vale ressaltar que um dos fatores que contribuíram para essa escolha foi a utilização do Material-UI, uma vez que todos os componentes já são submetidos a testes abrangentes, o que aumenta a confiabilidade do sistema como um todo.

#### Layout

No modelo original, o cabeçalho era visível somente na visualização para desktop. Optei por manter o cabeçalho visível em ambas as visualizações, desktop e mobile, enquanto reorganizava os elementos de navegação, separando-os em links de páginas e links de autenticação.

No formulário, mantive a estrutura geral, com foco na melhoria da consistência dos espaçamentos, bordas e na paleta de cores. Além disso, acrescentei informações detalhadas sobre os serviços disponíveis no catálogo da Loggi.

No rodapé, a estrutura permaneceu a mesma, com uma exceção: um bloco adicional que inclui os links para as redes sociais e os termos. A exclusão desse último bloco ocorreu devido ao prazo de entrega do desafio.

Na tela de detalhes, mantive a estrutura principal, concentrando-me na aprimoração da consistência dos espaçamentos, bordas e paleta de cores.

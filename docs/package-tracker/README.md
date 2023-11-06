# Desafio - Package Tracker

## Descrição

A aplicação trata-se do resultado de um desafio, incialmente a ideia era fazer o redesign da tela de rastreamento de pacote.
<br />
<br />

Versão mobile:

<img src="./docs/mobile.png" width="300" />
<br />
<br />

Versão desktop:

<img src="./docs/desktop.png" />

## Instalação

Para instalar o Package Tracker, siga estas etapas:

1 - Clone o repositório para o seu ambiente de desenvolvimento:

```bash
git clone https://github.com/loggi/desafio-frontend.git
```

2 - Navegue até o diretório do projeto:

```bash
cd docs/package-tracker
```

3 - Instale as dependências e inicie o ambiente de desenvolvimento:

```bash
npm install
npm run dev
```

Agora você pode acessar em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- **`app/`**: Diretório onde você cria as páginas da sua aplicação Next.js. Os arquivos JavaScript neste diretório se tornam rotas acessíveis no seu aplicativo.
- **`public/`**: Diretório para arquivos públicos, como imagens, fontes e outros recursos estáticos. Os arquivos aqui são acessíveis diretamente pelo navegador.
- **`components/`**: Diretório onde você coloca componentes reutilizáveis que podem ser usados em várias partes do seu aplicativo.
- **`styles/`**: Diretório para arquivos de estilos globais ou compartilhados.
- **`locales/`**: Diretório para arquivos de variáveis de listas fixas que podem ser usado para adicionar chaves i18n.

## Sobre o desenvolvimento

Gostaria de expressar minha gratidão por ter a oportunidade de participar do processo seletivo. O desafio foi uma experiência desafiadora e enriquecedora.

Comecei o desenvolvimento usando o template fornecido no projeto. Inicialmente, enfrentei algumas dificuldades devido à minha falta de familiaridade com a biblioteca de componentes, o que acabou resultando em um tempo de desenvolvimento um pouco mais longo do que o planejado. Reconheço que não consegui atingir o padrão de estilo desejado para o projeto.

Ao trabalhar no design, optei por criar um visual mais limpo, aderindo à paleta de cores branca e azul da Loggi. Além disso, projetei a caixa de pesquisa de código de rastreamento na lateral direita da tela para melhorar a usabilidade. Essa decisão foi baseada no padrão de movimento dos usuários, que muitas vezes se assemelha a um movimento de "L" deitado (¬), tornando a mensagem da caixa de pesquisa mais visível. Embora tenha tentado aplicar design tokens, não consegui manter a consistência ao longo do projeto principalmente no `spacing`, `font-size/typography` e `color`.

No menu optei por criar alguns componentes para compor o `Header` para melhor separação de dependencia, acredito que ficaria melhor se tivesse separado as dependencias acredito que o `Navigation` ficou muito complexo, talvez quebraria ele em outros componentes.

Me arrependi de não deixar os componentes em nested nas pastas de arquivos do componente principal, acredito que conservaria melhor a hierarquia das pastas.

No que diz respeito aos testes unitários, escolhi utilizar a testing-library e o Jest. No entanto, devido à minha falta de familiaridade com a biblioteca de UI Kit, não consegui seguir a abordagem TDD (Desenvolvimento Orientado por Testes) e criei apenas testes unitários de renderização de snapshots.

Havia diversos aspectos em que gostaria de ter entregue um resultado mais completo no desafio. Algumas das áreas em que planejei trabalhar, mas que requereram mais tempo do que o disponível, incluem:

- `Monitoramento`: Implementar uma biblioteca de rastreamento ou captura de erros, como o Sentry, para melhorar a detecção e resolução de problemas.
- `Testes Unitários`: Aplicar o padrão AAA (Arranjar, Agir, Assertir) em testes unitários para garantir uma cobertura de código mais abrangente.
- `Testes de Integração (e2e)`: Aprimorar os testes de integração na rota / e detalhar melhor o arquivo app.cy.js.
- `API`: Adicionar endpoints GET para obter informações sobre uma entrega específica após a pesquisa de código e para obter uma lista dinâmica para o menu superior e seus submenus.
- `Internacionalização (i18n)`: Implementar variáveis de conteúdo para facilitar a internacionalização futura.
- `utils`: criar um pasta de utils com a função de gerar svg, acredito que poderia estar melhor separada a dependencia.
- `SEO`: adicionar o lighthouse em futuras páginas, ele traz melhorias de performance.

Embora sinta que ainda há espaço para melhorias, estou satisfeito com o resultado do desafio. Agradeço pela oportunidade e aguardo ansiosamente os feedbacks.

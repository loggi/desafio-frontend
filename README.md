# Desafio Frontend Loggi

Neste desafio, tive a oportunidade de criar o meu próprio rastreador de encomendas. 

Foi uma experiência incrível poder definir e implementar como seria a interface e a funcionalidade desse rastreador, colocando em prática meus conhecimentos em desenvolvimento web.

## Tecnologias Utilizadas
Optei por utilizar o Next.js, uma ferramenta poderosa para o desenvolvimento de aplicações React com recursos adicionais, como suporte a renderização do lado do servidor. Com ele, pude criar o front-end e integrar  o backend, aproveitando a `rota` para lidar com as requisições de forma eficiente.

Para deixar a interface visual mais atraente e amigável, recorri ao Material UI, que me proporcionou uma vasta gama de componentes pré-estilizados, agilizando o desenvolvimento.

Além disso, a aplicação foi organizada de forma modular, facilitando a manutenção e o reuso de código.

## Funcionalidades

O rastreador de pedidos coloca o usuário no controle total dos seus pedidos na `Loggi`. Com a facilidade de rastrear seus pacotes em tempo real, os usuários terão acesso rápido e prático às informações de entrega, desde o registro do pedido até o status mais recente.

Mesmo para `pedidos já concluídos`, o usuário ainda pode  pesquisar e acessar todas as informações na `mesma página`.

 Além disso, a aplicação oferece a comodidade de visualizar os detalhes do endereço de entrega e coleta, bem como o histórico completo do status de cada pedido. 

Tudo isso em um layout responsivo e componentizado, permitindo que os usuários acessem a plataforma de diferentes dispositivos, além de garantir uma experiência de uso fluida e intuitiva. 

Para proporcionar uma navegação mais intuitiva e facilitada, os links presentes na aplicação são clicáveis e direcionam os usuários para os links oficiais do site real da `Loggi`.

## Integração com mock da API

Para facilitar o desenvolvimento, `criei, deployei e compartilhei` com meu squad um `mock` que simula as respostas de uma `API` de rastreio de pedidos. O `mock` está disponível [neste repositório](https://github.com/ThainaraTabile/api-loggi) e também através da `URL` abaixo para integração:

```
https://api-loggi.vercel.app/pedidos
```


A API conta com 3 pedidos pré-configurados com os identificadores `1`, `2` e `3`. Então para acessar a experiência de busca basta utilizar esses identificadores como `Número do pedido`. 
Caso utilize um identificador diferente a `API`, ou seja, um `pedido inexistente` deve retornar `status 404` indicando que o pedido não foi encontrado.

Na aplicação o `erro do status 404 foi personalizado`, exibindo ao usuário a seguinte mensagem:

```
Não encontramos seu pedido! :(
Verifique se o código de rastreamento está correto e tente novamente.
```



## Instruções para Uso

1. Acesse o meu rastreador de pedidos em [URL da Aplicação](https://desafio-frontend-ten-xi.vercel.app/).
2. Insira o número do seu pedido no campo de rastreamento.
3. Clique no botão `Rastrear` para visualizar as informações do pedido.
4. A tela inicial exibirá os dados de registro do pedido e o status mais recente.
5. Para acessar o status completo e o histórico, clique na aba `Histórico`.
6. Mesmo para `pedidos já concluídos`, você ainda `pode rastreá-los` e acessar todas as informações.
## Como executar



1 - Instalar e executar:
```
bash
npm install
npm run dev
```

2 - Basta acessar o endereço:

```http://localhost:3000```


## Próximos passos

- Implementar a suíte de testes.
- Otimizar a performance da aplicação para garantir uma experiência ainda mais ágil aos usuários.
- Implementar novas estilizações para deixar o rastreador de pedidos ainda mais atraente e personalizado.


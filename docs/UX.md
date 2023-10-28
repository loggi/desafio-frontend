# Documentação do Projeto de Rastreamento de Encomendas

Este documento descreve o funcionamento e a usabilidade do projeto de rastreamento de encomendas desenvolvido com Next.js. O projeto é dividido em duas páginas: a página inicial com um formulário de consulta e a página de status de entrega.

## Página Inicial

A página inicial do projeto é a primeira página que os usuários veem ao acessá-lo. Ela apresenta um formulário simples para consultar o status de entrega de uma encomenda. O formulário consiste em:

1. **Campo de Texto**: Este campo permite que o usuário insira o código de rastreio da encomenda que deseja consultar.

2. **Botão de Consulta**: Após inserir o código de rastreio, o usuário pode clicar neste botão para iniciar a consulta.

Quando o usuário preenche o campo de texto e clica no botão de consulta, o aplicativo irá redirecioná-lo para a próxima página, onde o status de entrega será exibido.

## Página de Status de Entrega

Nesta página, os usuários verão:

1. **Informações de Status de Entrega**: Aqui, o status de entrega da encomenda será exibido, incluindo detalhes como a data estimada de entrega e o status atual da entrega.

2. **Campo para CPF ou CNPJ**: Campo adicional para que o usuário insira seu número de documento (CPF ou CNPJ). Este campo é usado para liberar informações adicionais sobre o endereço de entrega. É uma etapa importante para garantir a segurança das informações.

3. **Botão para Liberar Informações**: Após inserir o número do documento, o usuário pode clicar neste botão para acessar informações adicionais sobre o endereço de entrega.

## Dados Mockados

Os dados exibidos nas páginas são mockados. Isso significa que os dados de rastreamento de encomenda são gerados simuladamente e não estão conectados a uma fonte de dados real. Os dados mockados foram incorporados ao projeto por meio do uso do hook `useTrackingCode` para facilitar a reutilização e manutenção do código.

## Conclusão

O projeto de rastreamento de encomendas fornece aos usuários uma maneira simples de consultar o status de entrega de suas encomendas. A interface do usuário é amigável e permite que os usuários insiram o código de rastreio e, se necessário, o número de documento para acessar informações adicionais de entrega. 
import * as React from 'react';
import { Link, Container, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header';

export default function Help() {
    return (
        <>
            <Header />
            <Link
                href="/"
                sx={{
                    color: "#000000",
                    textDecorationColor: "#000000",
                    marginTop: "40px",
                }}
            >
                Voltar
            </Link>
            <Container
                sx={{
                    marginTop: 3,
                }}
            >
                <Typography
                    variant="p"
                    component="h1"
                    sx={{
                        textAlign: "center",
                    }}
                >
                    Como encontro o código de rastreio?
                </Typography>
                <Divider sx={{ margin: "20px 0" }} />

                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    O código de rastreio é uma sequência única de letras
                    e números atribuída a cada pacote enviado através do
                    nosso serviço. Ele é essencial para acompanhar o
                    status e a localização do seu pacote em tempo real.
                </Typography>

                <Typography variant="h6" component="p" sx={{ textAlign: 'start' }}>
                    Índice
                </Typography>
                <List sx={{ padding: 0 }}>
                    <ListItem
                        button
                        component="a"
                        href="#confirmacao-envio"
                        sx={{ paddingLeft: 0, paddingRight: 2, textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItemText primary="1. Confirmação de Envio e Código de Rastreio" />
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="#localizar-codigo"
                        sx={{ paddingLeft: 0, paddingRight: 2, textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItemText primary="2. Onde Localizar o Código de Rastreio" />
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="#formato-codigo"
                        sx={{ paddingLeft: 0, paddingRight: 2, textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItemText primary="3. Formato do Código de Rastreio" />
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="#rastreamento-manual"
                        sx={{ paddingLeft: 0, paddingRight: 2, textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItemText primary="4. Rastreamento Manual" />
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="#informacoes-fornecidas"
                        sx={{ paddingLeft: 0, paddingRight: 2, textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItemText primary="5. Informações Fornecidas pelo Código de Rastreio" />
                    </ListItem>
                    <ListItem
                        button
                        component="a"
                        href="#dicas-experiencia"
                        sx={{ paddingLeft: 0, paddingRight: 2, textDecoration: 'none', color: 'inherit' }}
                    >
                        <ListItemText primary="6. Dicas para uma Melhor Experiência de Rastreamento" />
                    </ListItem>
                </List>
                <Divider sx={{ margin: '20px 0' }} />

                <Typography
                    variant="p"
                    component="h2"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                    id="confirmacao-envio"
                >
                    Confirmação de Envio e Código de Rastreio
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Ao efetuar o envio do seu pacote, é gerado
                    automaticamente um código de rastreio vinculado
                    a essa remessa específica. A confirmação de envio,
                    contendo o código de rastreio, será enviada para o
                    endereço de e-mail ou número de telefone cadastrado
                    em sua conta.
                </Typography>
                <Typography
                    variant="p"
                    component="h2"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                    id="localizar-codigo"
                >
                    Onde Localizar o Código de Rastreio
                </Typography>
                <Typography
                    variant="p"
                    component="h3"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    E-mail de Confirmação de Envio
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Verifique a caixa de entrada do e-mail registrado
                    na sua conta. Procure por uma mensagem com o assunto
                    "Confirmação de Envio" ou similar, contendo o código
                    de rastreio.
                </Typography>
                <Typography
                    variant="p"
                    component="h3"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Histórico de Pedidos
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Se você fez o pedido através de nossa plataforma, acesse a seção
                    "Histórico de Pedidos" dentro do aplicativo para encontrar o
                    código de rastreio associado à remessa.
                </Typography>
                <Typography
                    variant="p"
                    component="h3"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Notificações por SMS
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Se optou por receber notificações por mensagem de texto,
                    o código de rastreio também será enviado via SMS.
                </Typography>
                <Typography
                    variant="p"
                    component="h2"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                    id="formato-codigo"
                >
                    Formato do Código de Rastreio
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    O código de rastreio geralmente é composto por letras
                    maiúsculas e números, podendo variar em tamanho. Ele é
                    sensível a maiúsculas e minúsculas, portanto, certifique-se
                    de digitá-lo corretamente ao realizar uma busca.
                </Typography>
                <Typography
                    variant="p"
                    component="h2"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                    id="rastreamento-manual"
                >
                    Rastreamento Manual
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Caso não esteja com acesso ao e-mail ou ao aplicativo,
                    você pode inserir o código de rastreio manualmente em
                    nossa página de rastreamento na web. Basta digitar o
                    código no campo designado para obter as informações
                    atualizadas sobre o status do pacote.
                </Typography>
                <Typography
                    variant="p"
                    component="h2"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                    id="informacoes-fornecidas"
                >
                    Informações Fornecidas pelo Código de Rastreio
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Ao rastrear seu pacote, você terá acesso a informações
                    como a data e hora da postagem, locais de trânsito,
                    atualizações de entrega e eventuais problemas logísticos
                    que possam afetar o prazo de entrega.
                </Typography>
                <Typography
                    variant="p"
                    component="h2"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                    id="dicas-experiencia"
                >
                    Dicas para uma Melhor Experiência de Rastreamento
                </Typography>
                <Typography
                    variant="p"
                    component="h3"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Atualize Regularmente
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Verifique o status do rastreamento regularmente para
                    obter as últimas atualizações sobre o seu pacote.
                </Typography>
                <Typography
                    variant="p"
                    component="h3"
                    sx={{
                        textAlign: "start",
                        marginTop: "25px"
                    }}
                >
                    Contate o Suporte
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        textAlign: "justify",
                    }}
                >
                    Caso tenha alguma dúvida ou preocupação sobre o rastreamento
                    do seu pacote, nossa equipe de suporte estará disponível
                    para ajudar.
                </Typography>
            </Container>
            <Footer />
        </>
    );
}
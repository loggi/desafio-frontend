'use client'
import { useState } from 'react'
import Link from 'next/link'

import TextField from '@mui/material/TextField'

import Loading from '@/components/Loading'
import Text from '@/components/Text'
import Button from '@/components/Button'

import * as S from './styles'

const Tracker = () => {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      //Business logic by props...
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.TrackerArea>
          <Text tag="h1">Acompanhe com a Loggi a entrega do seu pedido</Text>
          <Text>Primeiro, digite o código de rastreamento.</Text>
          <S.Form method="post" onSubmit={onSubmit}>
            {loading && <Loading visible />}
            <TextField
              id="code-tracker"
              label="Código de rastreamento"
              variant="standard"
              fullWidth
            />
            <Button type="submit">Acompanhar pedido</Button>
          </S.Form>
        </S.TrackerArea>
        <S.Content>
          <S.Box>
            <Text tag="h2">
              A melhor solução para envio de encomendas no Brasil
            </Text>
            <Text>
              Alcance mais clientes com entregas locais e nacionais. Com a
              Loggi, você economiza tempo e dinheiro.
            </Text>
            <Link href="https://www.loggi.com/produtos-loggi/" target="_blank">
              <Button>Enviar agora</Button>
            </Link>
          </S.Box>
          <S.Image src="/assets/images/package.png" alt="Logo Envsense" />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Tracker

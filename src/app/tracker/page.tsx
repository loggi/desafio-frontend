'use client'

import { useSearchParams } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'
import Main from '../components/main'

export default function Tracker() {
  const reg = new RegExp("^[0-9]+$")
  const searchParams = useSearchParams()

  const [iduser, setIdUser] = useState("")
  const [valid, setValid] = useState(true)

  const handleValidation = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIdUser(e.target.value)
    setValid(reg.test(e.target.value))
  };

  const onClick = () => {
    setValid(reg.test(iduser) && iduser.length > 0)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    //router.push('/tracker?' + codevalue)
  }

  return (
    <Main>
      <div className="bg-white div--info flex flex-col h-full ml-40 p-8 rounded-2xl">
        <div className="div--status flex flex-col p-5 rounded-t-2xl">
          <span className="font-medium font-sans inline-block text-base text-white">Entregue</span>
          <span className="font-sans inline-block text-base text-white opacity-80">O pacote foi recebido no endereço de entrega.</span>
        </div>

        <div className="div--instruction flex flex-col p-5 rounded-b-2xl">
          <span className="font-sans inline-block text-base span--gray opacity-80">
            Covid19: veja como receber o seu pacote de forma segura,
            <span className="cursor-pointer span--blue">&nbsp;clique aqui.</span>
          </span>
        </div>

        <div className="border-b flex flex-row mt-4 pb-4">
          <div className="border-r flex flex-col px-5 py-2 w-1/2">
            <span className="font-medium font-sans inline-block text-base span--gray">Data da entrega</span>
            <span className="font-sans inline-block text-sm span--gray">19/10/2023</span>
          </div>

          <div className="flex flex-col pl-5 py-2 w-1/2">
            <span className="font-medium font-sans inline-block text-base span--gray">Código de rastreamento</span>
            <span className="font-sans inline-block text-sm span--gray">12</span>
          </div>
        </div>

        <div className="border-b pb-10 px-5">
          <span className="font-sans inline-block mt-8 text-base span--gray">Saiba mais informações sobre a sua entrega.</span>

          <form className="flex flex-row" onSubmit={ onSubmit }>
            <TextField
              className={"mt-1 w-full" + (!valid ? ' error' : '')}
              error={ !valid }
              id="outlined-basic"
              inputProps={{ pattern: "^[0-9]+$" }}
              onChange={ (e) => handleValidation(e) }
              placeholder="Digite seu CPF ou CNPJ"
              required={ true }
              value={ iduser }
              variant="outlined" />

            <div className="flex justify-center ml-4">
              <Button className="button--small font-sans rounded-full" onClick={ onClick } type="submit" variant="contained">
                {'>'}
              </Button>
            </div>
          </form>
        </div>

        <div className="p-5 pt-10">
          <span className="font-sans inline-block text-base span--gray opacity-80">
            Se ainda estiver com dúvidas sobre rastreio de pedido,
            <span className="cursor-pointer span--blue">&nbsp;clique aqui.</span>
          </span>
        </div>
      </div>
    </Main>
  )
}
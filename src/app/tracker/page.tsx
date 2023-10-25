// @ts-nocheck
'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Alert, Button, TextField } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import InfoIcon from '@mui/icons-material/Info'
import Main from '../components/main'

export default function Tracker() {
  const param = (window.location.search).replace('?id=', '')
  const reg = new RegExp("^[0-9]+$")
  const router = useRouter()

  const [alert, setAlert] = useState(false);
  const [data, setData] = useState({})
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
    const res = await fetch('data.json')
    const datafetched = await res.json()
    const value = datafetched.find(d => (d.id.toString() === param && d.id_user.toString() === iduser))

    if (value !== undefined) {
      router.push('/tracker-detail?id=' + param)
    } else {
      setAlert(true)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('data.json')
      const datafetched = await res.json()
      const value = datafetched.filter(d => d.id.toString() === param)
      return setData(value)
    }

    fetchData()
  })

  return (
    <Main>
      <div className="bg-white div--info flex flex-col h-full mt-2 p-8 sm:ml-40 sm:mt-0 sm:rounded-2xl">
        <div className="div--status flex flex-col p-5 rounded-t-2xl">
          <span className="font-medium font-sans inline-block text-base text-white">{ data[0]?.status }</span>
          <span className="font-sans inline-block text-base text-white opacity-80">{ data[0]?.status_description }</span>
        </div>

        <div className="div--instruction flex flex-row p-5 rounded-b-2xl">
          <InfoIcon className="mr-3 mt-3 opacity-80" style={{ fill: 'grey' }} />

          <span className="font-sans inline-block text-base span--gray opacity-80">
            Covid19: veja como receber o seu pacote de forma segura,
            <span className="cursor-pointer span--blue">&nbsp;clique aqui.</span>
          </span>
        </div>

        <div className="border-b flex flex-row mt-4 pb-4">
          <div className="border-r flex flex-col px-5 py-2 w-1/2">
            <span className="font-medium font-sans inline-block text-base span--gray">Data da entrega</span>

            <span className="font-sans inline-block text-sm span--gray">
              { data[0]?.date }
            </span>
          </div>

          <div className="flex flex-col pl-5 py-2 w-1/2">
            <span className="font-medium font-sans inline-block text-base span--gray">Código de rastreamento</span>
            <span className="font-sans inline-block text-sm span--gray">{ data[0]?.id }</span>
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
              <Button className="button--loggi button--small font-sans rounded-full" onClick={ onClick } type="submit" variant="contained">
                <EastIcon className="opacity-80" style={{ fill: 'white' }} />
              </Button>
            </div>
          </form>
        </div>

        <div className="p-5 pt-10">
          <span className="font-sans inline-block text-base span--gray">
            Se ainda estiver com dúvidas sobre rastreio de pedido,
            <span className="cursor-pointer span--blue">&nbsp;clique aqui.</span>
          </span>
        </div>

        { alert ? <Alert severity="warning" onClose={() => { setAlert(false) }}>CPF ou CNPJ não encontrado para este pedido.</Alert> : <></> }
      </div>
    </Main>
  )
}
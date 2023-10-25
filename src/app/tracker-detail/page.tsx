// @ts-nocheck
'use client'

import { useEffect, useState, useRef } from 'react';
import InfoIcon from '@mui/icons-material/Info'
import Main from '../components/main'
import Map from '../components/map'

export default function TrackerDetail() {
  const hasFetchedData = useRef(false)
  const param = (window.location.search).replace('?id=', '')

  const [data, setData] = useState({})
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setInterval(() => { setShowMap(true) }, 1500)

    async function fetchData() {
      const res = await fetch('data.json')
      const datafetched = await res.json()
      const value = datafetched.filter(d => d.id.toString() === param)
      return setData(value)
    }

    if (hasFetchedData.current === false) {
      fetchData()
      hasFetchedData.current = true
    }
  }, [])

  return (
    <Main>
      <div className="bg-white div--info flex flex-col h-full ml-40 p-8 rounded-2xl">
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

        <div className="flex flex-row mt-4">
          <div className="border-r flex flex-col px-5 py-2 w-1/2">
            <span className="font-medium font-sans inline-block text-base span--gray">Data da entrega</span>
            <span className="font-sans inline-block text-sm span--gray">{ data[0]?.date }</span>
          </div>

          <div className="flex flex-col pl-5 py-2 w-1/2">
            <span className="font-medium font-sans inline-block text-base span--gray">Código de rastreamento</span>
            <span className="font-sans inline-block text-sm span--gray">{ data[0]?.id }</span>
          </div>
        </div>

        <div className="flex flex-row pb-4 pt-0">
          <div className="border-r flex flex-col pb-2 px-5 w-1/2">
            <span className="font-sans font-medium inline-block text-base span--gray">Recebido por</span>
            <span className="font-sans span--gray text-sm">{ data[0]?.receiver }</span>
          </div>

          <div className="flex flex-col justify-center pb-2 pl-5 w-1/2">
            <span className="font-sans font-medium  inline-block text-base span--gray">Endereço</span>

            <span className="font-sans inline-block text-sm span--gray">
              { data[0]?.address }
            </span>
          </div>
        </div>

        <div className="flex flex-row h-full">
          <div className="h-full skeleton w-full">
            {showMap &&
              <Map src={ data[0]?.map } />
            }
          </div>
        </div>
      </div>
    </Main>
  )
}
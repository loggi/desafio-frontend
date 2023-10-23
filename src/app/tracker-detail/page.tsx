import InfoIcon from '@mui/icons-material/Info'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Main from '../components/main'

export default function TrackerDetail() {
  return (
    <Main>
      <div className="bg-white div--info flex flex-col h-full ml-40 p-8 rounded-2xl">
        <div className="div--status flex flex-col p-5 rounded-t-2xl">
          <span className="font-medium font-sans inline-block text-base text-white">Entregue</span>
          <span className="font-sans inline-block text-base text-white opacity-80">O pacote foi recebido no endereço de entrega.</span>
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
            <span className="font-sans inline-block text-sm span--gray">19/10/2023</span>
          </div>

          <div className="flex flex-col pl-5 py-2 w-1/2">
            <span className="font-medium font-sans inline-block text-base span--gray">Código de rastreamento</span>
            <span className="font-sans inline-block text-sm span--gray">12</span>
          </div>
        </div>

        <div className="border-b p-5">
          <span className="font-sans inline-block text-base span--gray">
            Recebido por <span className="cursor-pointer font-medium font-sans span--gray text-base">&nbsp;Caio Roberto</span>
          </span>
        </div>

        <div className="flex flex-row p-5">
          <div className="flex flex-col">
            <span className="font-sans inline-block text-base span--gray">
              CEP: 05510-050
            </span>

            <span className="font-sans inline-block text-base span--gray">
              Rua Camargo, nº 189, Butantã
            </span>

            <span className="font-sans inline-block text-base span--gray">
              São Paulo/SP
            </span>
          </div>
        </div>
      </div>
    </Main>
  )
}
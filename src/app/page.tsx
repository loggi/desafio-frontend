import Image from 'next/image'
import { Button, TextField } from '@mui/material';

export default function Home() {
  return (
    <>
      <header className="h-24 p-8 w-full">
        <Image
          alt="Loggi Logo"
          height={ 34 }
          priority
          src="/loggi.svg"
          width={ 100 }
        />
      </header>

      <main className="flex flex-col">
        <div className="flex flex-row p-12 div--tracker">
          <section className="flex h-full items-center w-1/2">
            <div className="bg-white flex flex-col h-4/6 ml-40 rounded-2xl p-12 pt-8 div--info">
              <span className="font-sans inline-block mb-2 text-2xl">Olá!</span>
              <span className="font-sans leading-6 text-2xl">Acompanhe com a Loggi a entrega do seu pedido. 😃</span>
              <span className="font-sans inline-block mt-4 text-base span--small">Primeiro, digite o código de rastreamento.</span>
              <span className="font-sans inline-block mt-6 text-base span--small">Código de rastreamento.</span>

              <form>
                <TextField id="outlined-basic" variant="outlined" className="mt-1 w-full" />

                <div className="flex justify-center mt-10">
                  <Button variant="contained" className="font-sans">Acompanhar pedido</Button>
                </div>
              </form>
            </div>
          </section>

          <section className="h-full w-1/2">
            <div className="h-full relative">
              <Image
                alt="Loggi Order"
                className="object-contain img"
                fill
                src="/loggi_order.svg"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

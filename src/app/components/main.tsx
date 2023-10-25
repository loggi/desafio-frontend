import Image from 'next/image'

export default function Main({ children, }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <div className="div--tracker flex flex-col sm:p-12 sm:flex-row">
        <section className={`flex sm:h-full sm:items-center w-full sm:w-1/2 ${(window.location.search).replace('?id=', '') !== '' ? 'h-full' : 'h-1/2'}`}>
          { children }
        </section>

        <section className={`h-1/2 sm:block sm:h-full sm:w-1/2 w-full ${(window.location.search).replace('?id=', '') !== '' ? 'hidden' : ''}`}>
          <div className="h-full relative">
            <Image alt="Loggi Order" className="object-contain img" fill priority src="/loggi_order.svg" />
          </div>
        </section>
      </div>
    </main>
  )
}

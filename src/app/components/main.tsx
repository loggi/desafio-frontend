import Image from 'next/image'

export default function Main({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col">
      <div className="flex flex-row p-12 div--tracker">
        <section className="flex h-full items-center w-1/2">
          { children }
        </section>

        <section className="h-full w-1/2">
          <div className="h-full relative">
            <Image alt="Loggi Order" className="object-contain img" fill priority src="/loggi_order.svg" />
          </div>
        </section>
      </div>
    </main>
  )
}

import Image from 'next/image'

export default function Header() {
  return (
    <header className="h-24 p-8 w-full">
      <div className="h-full relative img--logo">
        <Image alt="Loggi Logo" className="object-contain" fill priority src="/loggi.svg" />
      </div>
    </header>
  )
}
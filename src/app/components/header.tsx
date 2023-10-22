import Image from 'next/image'

export default function Header() {
  return (
    <header className="h-24 p-8 w-full">
      <Image alt="Loggi Logo" height={ 34 } priority src="/loggi.svg" width={ 100 } />
    </header>
  )
}
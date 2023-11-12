"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/button/Button"
import { Input } from "@/components/input/Input"
import { Typography } from "@/components/typography/Typography"
import styles from "./page.module.css"

export default function Home() {
  const router = useRouter()
  const [trackCode, setTrackCode] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[A-Z]{3}\d{9}$/

    setIsDisabled(true)

    if (regex.test(event.target.value)) {
      setTrackCode(event.target.value)
      setIsDisabled(false)
    }
  }

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    router.push(`/rastrear/${trackCode}`)
  }
  return (
    <main className={styles.home}>
      <div className={styles.home__container}>
        <Typography variant="h1">
          Acompanhe com a Loggi a entrega do seu pedido.
        </Typography>
        <form className={styles.home__form}>
          <Input
            name="search"
            id="search"
            label="Código de rastreamento"
            placeholder="Primeiro, digite o código de rastreamento."
            onChange={handleChange}
          />
          <Button size="large" onClick={handleClick} disabled={isDisabled}>
            Acompanhar pedido
          </Button>
        </form>
      </div>
    </main>
  )
}

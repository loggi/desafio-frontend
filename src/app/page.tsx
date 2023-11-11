import { LinkButton } from "@/components/linkButton/LinkButton"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Jaiminho</h1>
      <LinkButton variant="inverse" href="large">
        botao
      </LinkButton>
    </main>
  )
}

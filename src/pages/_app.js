import '../styles/global.scss'

import styles from  '../styles/app.module.scss'
import Header from '@/components/header'


function MyApp({ Component, pageProps }) {

  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>  
    </div>
  )
}

export default MyApp

import Head from 'next/head';

import styles from './../styles/index.module.scss';


export default function Index() {
  
  return (
    <div className={styles.tracker}>   
      <Head>
        <title>Acompanhe suas Entregas em Tempo Real | Loggi</title>
      </Head>   
      <section>
        tracker
      </section>
    </div>
  )
}

'use client'

import style from './Banner.module.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

export const Banner = () => {

    const router = useRouter();

    return (
        <section className = {style.banner}>
            <div className="grid">
                <div className={style.box}>
                    <h2 className={style.box__title}>Acompanhe com a Loggi a entrega do seu pedido. </h2>
                    <label className={style.box__label} htmlFor="input-code">Código de rastreamento</label>
                    <input 
                        autoFocus
                        className={style.input} 
                        id="input-code"
                        placeholder='Digite o código de rastreamento aqui...'
                        type="text" 
                    />
                    <button className={style.button} onClick={() => router.push('/rastreador')} >
                        <FontAwesomeIcon icon={faLocationDot} className={style['button--icon']}/>
                        Acompanhar pedido
                    </button>
                </div>
            </div>
        </section>
    )
}
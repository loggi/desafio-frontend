import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import style from './Header.module.sass'

export const Header = () => {
    return (
        <section className={style.navigation}>
            <div className={`grid ${style.navigation__grid}`}>
                <div className={style.navigation__menu}>
                    <a href="/" className={style.navigation__logo}>
                        <Image
                            alt="Loggi"
                            height={35}
                            src="/loggi.png"
                            title='A melhor solução para envio de encomendas no Brasil'
                            width={117}
                        />          
                    </a>

                    <nav role='navigation'>
                        <ul>
                            <li>
                                <a href="" title="Para você">Para você</a>
                            </li>
                            <li>
                                <a href="" title="Para empresas">Para empresas</a>
                            </li>
                            <li>
                                <a href="" title="Para entregar">Para entregar</a>
                            </li>
                            <li>
                                <a href="" title="Vendas e suporte">Vendas e suporte</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <button className={style['navigation__create-account']}>
                    <FontAwesomeIcon icon={faUserPlus} className={style['navigation__create-account--icon']}/>
                    Criar conta
                </button>

            </div>
        </section>
    )
}
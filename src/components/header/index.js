import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';
import Logo from './../../assets/logo-loggi.svg'

import { Button } from '@mui/base/Button';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Header() {

    const [displayNav, setDisplayNav] = useState(false)

    useEffect(() => {
        setDisplayNav(window.innerWidth <= 768 ? false : true)        
    }, [])

    return (
        <Box component="header" className={styles.header__container}>
            <Link href="/"><Image className={styles.navigation__logo} src={Logo} alt='Loggi logo'/></Link>            
            <Box className={styles.hamburguer__container}>
                <Button className={`${styles.hamburguer} ${displayNav ? styles.showNav : styles.hideNav}`} onClick={() => setDisplayNav(!displayNav)} />
            </Box>
            <Box className={`${styles.navigation__container} ${displayNav ? styles.showNav : styles.hideNav} `}>
                <nav className={styles.navigation}>
                    <ul>
                        <li><a href=''>Para você</a></li>
                        <li><a href=''>Para empresas</a></li>
                        <li><a href=''>Para entregar</a></li>
                        <li><a href=''>Vendas e suporte</a></li>
                        <li><a href=''>Acompanhe seu pedido</a></li>
                    </ul>                
                </nav>
                <Box className={styles.navigation__buttons} >
                    <Button className={styles.button__login}>Entrar</Button>
                    <Button className={styles.button__signup}>Criar conta</Button>
                </Box>
            </Box>            
        </Box>        
    )
}
import Image from 'next/image'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';

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
                        <Box sx={{ maxWidth: 500 }}>
                            <BottomNavigation showLabels>
                                <BottomNavigationAction label="Para você" />
                                <BottomNavigationAction label="Para empresas" />
                                <BottomNavigationAction label="Para entregar" />
                                <BottomNavigationAction label="Vendas e suporte" />
                            </BottomNavigation>
                        </Box>
                    </nav>
                </div>

                <Button variant="outlined" size='small' startIcon={<AccountCircle />}>Criar conta</Button>

            </div>
        </section>
    )
}
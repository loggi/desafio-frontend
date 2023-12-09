'use client'

import style from './Banner.module.sass';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

export const Banner = () => {

    const router = useRouter();

    return (
        <section className = {style.banner}>
            <div className="grid">
                <Card 
                    className={style['mb-1']}
                    variant="outlined" 
                    sx={{ maxWidth: '50%' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Acompanhe com a Loggi a entrega do seu pedido. 
                        </Typography>
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
                    </CardContent>
                </Card>

            </div>
        </section>
    )
}
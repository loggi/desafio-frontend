'use client'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import RoomOutlined from '@mui/icons-material/RoomOutlined';

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react';

import style from './Banner.module.sass';

export const Banner = () => {
    const [errorInput, setErrorInput] = useState<Boolean|any>(false)
    const router = useRouter();
    const inputCodeReference = useRef<any>();

    const onTracker = () => { 
        const inputValue = inputCodeReference.current.value;
        !inputValue
            ? setErrorInput(true)
            : setErrorInput(false)

        inputValue && router.push(`/rastreador/${inputValue}`)
    }

    return (
        <section className = {style.banner}>
            <div className="grid">
                <Card 
                    variant="outlined" 
                    sx={{ maxWidth: '30%', mb: 2 }}
                >
                    <CardContent>
                        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                            Acompanhe com a Loggi a entrega do seu pedido. 
                        </Typography>
                        <TextField
                            error={errorInput}
                            inputRef={inputCodeReference} 
                            label="Código de rastreamento" 
                            variant="outlined"
                            helperText={errorInput && "Precisamos do código de rastreamento."}
                            sx={{ width: '100%', mb: 1 }}
                        />
                        <Button 
                            variant="contained" 
                            startIcon={<RoomOutlined />} 
                            size="large"
                            onClick={onTracker}
                            sx={{width: '100%'}}>
                                Acompanhar pedido
                            </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
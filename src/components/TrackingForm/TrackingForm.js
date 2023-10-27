'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation'


const TrackingForm = () => {
    const [trackingCode, setTrackingCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    return (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Olá!
              Acompanhe com a Loggi a entrega do seu pedido. 😃
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Primeiro, digite o código de rastreamento
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <TextField 
                id="tracking-code" 
                label="Código de rastreamento *" 
                size="small" 
                margin='normal' 
                helperText={errorMessage}
                sx={{ width: '60%'}}
                onChange={e => {
                  const { value } = e.target
                  setTrackingCode(value);
                  value && setErrorMessage('')
                }}
                error={!!errorMessage}
              />
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', flexDirection: 'column', gap: '40px' }}>
            <Button 
              size="medium" 
              variant='contained' 
              sx={{ 
                textTransform: 'none', 
                background: 'linear-gradient(90deg,#00baff,#007cff);' 
              }}
              onClick={() => {
                if(!trackingCode) {
                  setErrorMessage('Campo Obrigatório')
                } else {
                    router.push(`/tracking/${trackingCode}`)
                }
              }}
            >
              Acompanhar pedido
            </Button>
          </CardActions>
        </Card>
    )
}

export default TrackingForm;
'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation'
import StyledCard from '@/components/BasicComponents/StyledCard'

const TrackingForm = () => {
    const [trackingCode, setTrackingCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    return (
        <StyledCard>
          <CardContent sx={{ p: 0 }}>
            <Typography gutterBottom variant="h5" component="div">
              Olá!
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ mb: '21px' }}>
              Acompanhe com a Loggi a entrega do seu pedido. 😃
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: '12px' }}>
              Primeiro, digite o código de rastreamento
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <TextField 
                id="tracking-code" 
                label="Código de rastreamento *" 
                size="small" 
                margin='normal' 
                helperText={errorMessage}
                sx={{ width: '100%'}}
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
                mt: '21px',
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
        </StyledCard>
    )
}

export default TrackingForm;
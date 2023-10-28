'use client'

import { useRef } from 'react'
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import StyledCard from "@/components/BasicComponents/StyledCard";
import useTrackingCode from '@/hooks/useTrackingCode';
import { Box, Button, Divider } from '@mui/material';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import { formatDate } from '@/utils/date'

const TrackingPage = ({ params }) => {

    const { packageTracker, enableDestinationInfo } = useTrackingCode(params.code);
    const docRef = useRef(null)

    return (
        <StyledCard sx={{ padding: '12px', minWidth: '300px' }}>
            <CardContent sx={{ p: 0,  }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '8px 0' }}>
                    <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                            {packageTracker.packageInfo.trackingKey}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"sx={{ fontSize: '10px', color: 'rgba(0, 0, 0, 0.4)' }} >
                            {formatDate(packageTracker.eta)}
                        </Typography>
                    </Box>
                    <Chip 
                        size="small" 
                        variant="outlined"  
                        label={packageTracker.shipperStatus.label} 
                        sx={{ 
                            background: 'linear-gradient(90deg,#00baff,#007cff);', 
                            color: 'white',
                            fontWeight: 600,
                            border: 'none'
                        }}
                    />
                </Box>
                <Divider />
                <Box sx={{ p: '8px 0' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: '8px', fontWeight: 600 }}>
                        Endereço de Entrega
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {packageTracker.destinationInfo.firstLine}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <TextField 
                            label="Digite seu CPF/CNPJ" 
                            size="small" 
                            margin='normal' 
                            sx={{ width: '80%'}}
                            inputRef={docRef}
                        />
                        <Button onClick={() => enableDestinationInfo(docRef.current.value)}>Liberar</Button>
                    </Box>
                </Box>
                <Divider />
                <Typography variant="body1" color="text.secondary" sx={{ my: '8px', fontWeight: 600, '& a': { color: '#00baff' } }}>
                    Se ainda estiver com dúvidas sobre rastreio de pedido,&nbsp;
                    <Link href="https://ajuda.loggi.com/hc/pt-br/sections/115000600108-Status-da-sua-encomenda">
                        clique aqui
                    </Link>
                </Typography>
            </CardContent>
        </StyledCard>
    )
}

export default TrackingPage;
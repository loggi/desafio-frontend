'use client'

import { useRouter } from 'next/navigation'
import { Chip, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FadeIn from 'react-fade-in'

import { TrackingOrder } from '@/types/tracking-order'

export type OrderDetailsProps = {
  order: TrackingOrder
}

enum STATUS {
  Pending = 'Pendente',
  InTransit = 'Em Trânsito',
  OutForDelivery = 'Em Rota de Entrega',
  Delivered = 'Entregue',
  Failed = 'Falha na Entrega'
}

export function OrderDetails({ order }: OrderDetailsProps) {
  const router = useRouter()

  return (
    <div className='absolute flex flex-col items-start p-4 left-0 top-0 w-full md:max-w-md max-h-screen z-50'>
      <FadeIn className='w-full'>
        <Paper elevation={8} className='w-full flex items-center bg-white py-0.5 px-1'>
          <IconButton sx={{ p: '10px' }} aria-label='menu' onClick={() => router.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          <InputBase
            className='w-full'
            placeholder='Código de Rastreamento'
            inputProps={{ 'aria-label': 'código de rastreamento' }}
            value={order.trackingNumber}
            disabled
          />
          <Chip label={STATUS[order.status]} size='small' variant='outlined' className='mr-2.5' />
        </Paper>
      </FadeIn>
      <FadeIn className='w-full'>
        <Paper elevation={8} className='w-full flex flex-col items-start bg-white mt-4'>
          <Typography variant='subtitle1' component='span' className='p-4 font-bold'>
            Destino
          </Typography>
          <Divider className='w-full' />
          <Typography variant='body1' component='p' className='p-4'>
            {`${order.orderDetails.destinationAddress.street} - ${order.orderDetails.destinationAddress.city}, ${order.orderDetails.destinationAddress.state} - ${order.orderDetails.destinationAddress.zipCode}`}
          </Typography>
          <Divider className='w-full' />
          <Typography variant='subtitle1' component='span' className='p-4 font-bold'>
            Detalhes
          </Typography>
          <Divider className='w-full' />
          <Typography variant='body1' component='p' className='px-4 py-2'>
            {order.orderDetails.items.join(', ')}
          </Typography>
          <Typography variant='body1' component='p' className='px-4 py-2'>
            {`R$ ${order.orderDetails.totalAmount}`}
          </Typography>
          <Divider className='w-full' />
          <Typography variant='subtitle1' component='span' className='p-4 font-bold'>
            Entregador
          </Typography>
          <Typography variant='body1' component='p' className='px-4 py-2'>
            {order.deliveredBy.name}
          </Typography>
          <Typography variant='body1' component='p' className='px-4 py-2'>
            {order.deliveredBy.contactNumber}
          </Typography>
        </Paper>
      </FadeIn>
    </div>
  )
}

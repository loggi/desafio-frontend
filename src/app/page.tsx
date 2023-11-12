import Image from 'next/image'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'

import heroImage from '@/assets/images/hero.png'
import loggiLogo from '@/assets/images/loggi-logo.svg'

export default function Home() {
  return (
    <Grid container component='main' className='h-screen flex'>
      <Grid item component={Paper} square className='flex flex-col flex-1 md:w-full md:max-w-lg py-10'>
        <Image src={loggiLogo} alt='Loggi logo' className='place-self-center justify-self-start' />
        <Box className='flex-1 flex flex-col items-start justify-center px-10'>
          <Typography
            component='h1'
            variant='h5'
            className='text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]'
          >
            Acompanhe com a Loggi a entrega do seu pedido
          </Typography>
          <Typography
            component='p'
            className='text-normal font-normal md:text-normal lg:leading-[1.1] mt-2 text-gray-700'
          >
            Primeiro, digite o código de rastreamento.
          </Typography>
          <Box component='form' noValidate className='mt-4 w-full'>
            <TextField
              margin='normal'
              fullWidth
              id='trackingNumber'
              label='Código de Rastreamento'
              name='trackingNumber'
              placeholder='38941210001'
              autoFocus
            />
            <Button type='submit' className='bg-loggi normal-case text-white w-full p-4 text-base'>
              Acompanhar Pedido
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        className='hidden md:inline-flex flex-1 bg-gradient-to-tl from-[#70baff] to-loggi items-end justify-end'
      >
        <Image src={heroImage} alt='Loggi hero' fill={false} />
      </Grid>
    </Grid>
  )
}

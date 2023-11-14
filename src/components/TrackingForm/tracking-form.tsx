'use client'

import { useRouter } from 'next/navigation'
import { Box, Button, TextField } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z
  .object({
    trackingNumber: z
      .string({
        required_error: 'O código de rastreamento é obrigatório'
      })
      .nonempty('O código de rastreamento é obrigatório')
      .min(11, 'O código de rastreamento é inválido')
      .max(11, 'O código de rastreamento é inválido')
  })
  .required()

type formDataType = z.infer<typeof schema>

export type TrackingFormInputs = {
  trackingNumber: string
}

export type TrackingFormProps = {
  onSubmit?: (fields: TrackingFormInputs) => {}
}

export function TrackingForm({ onSubmit }: TrackingFormProps) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<formDataType>({
    resolver: zodResolver(schema)
  })

  const handleFormSubmit: SubmitHandler<TrackingFormInputs> = async (data) => {
    try {
      const res = await fetch(`/api/trackings/${data.trackingNumber}`)
      const order: any = await res.json()

      if (!res.ok) {
        setError('trackingNumber', { type: 'custom', message: order.error })
        return
      }

      if (onSubmit) {
        onSubmit(data)
      }

      router.push(`/orders/${data.trackingNumber}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box component='form' noValidate className='mt-4 w-full' onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        margin='normal'
        fullWidth
        id='trackingNumber'
        label='Código de Rastreamento'
        placeholder='38941210001'
        autoFocus
        inputProps={{ 'data-testid': 'trackingNumber' }}
        error={!!errors.trackingNumber}
        helperText={errors?.trackingNumber?.message}
        {...register('trackingNumber')}
      />
      <Button
        type='submit'
        variant='contained'
        className='bg-loggi normal-case text-white w-full p-4 text-base disabled:bg-blue-400'
        data-testid='submitTrackingButton'
        disabled={isSubmitting}
        disableElevation
      >
        {isSubmitting ? 'Rastreando...' : 'Acompanhar Pedido'}
      </Button>
    </Box>
  )
}

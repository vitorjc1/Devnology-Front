/* eslint-disable no-unused-vars */
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { axiosInstance } from '../../utils/axiosInstance'
import { SelectedProducts } from './components/SelectedProducts'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Zip code is required'),
  street: zod.string().min(1, 'Street is required'),
  number: zod.string().min(1, 'Number is required'),
  complement: zod.string(),
  district: zod.string().min(1, 'District is required'),
  city: zod.string().min(1, 'City is required'),
  uf: zod.string().min(1, 'State is required'),
  name: zod.string().min(1, 'Name is required'),
  document: zod.string().min(1, 'Document is required'),
  birth: zod.string().min(1, 'Birth is required'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Payment method is required' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart, cartItems } = useCart()

  async function handleConfirmOrder(data: ConfirmOrderFormData) {
    const dataRequest = {
      items: cartItems,
      customer: {
        name: data.name,
        document: data.document,
        birth: data.birth,
      },
      address: {
        zip_code: data.zipCode,
        street: data.street,
        number: data.number,
        complement: data.complement,
        district: data.district,
        city: data.city,
        uf: data.uf,
      },
      payment_method: data.paymentMethod,
    }
    await axiosInstance.post('/order',dataRequest).then((response) => {
      console.log(response);
    })
    navigate('/orderConfirmed', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedProducts />
      </CompleteOrderContainer>
    </FormProvider>
  )
}

import { MapPinLine, CurrencyDollar, User } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { CustomerForm } from './CustomerForm'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete your order
      </TitleText>

      <FormSectionContainer>
      <SectionTitle
          title="Customer details"
          subtitle="please enter the customer details"
          icon={<User color={colors['brand-yellow-dark']} size={22} />}
        />

        <CustomerForm />
        
        <SectionTitle
          title="Shipping address"
          subtitle="please enter the shipping address"
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />

      
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}

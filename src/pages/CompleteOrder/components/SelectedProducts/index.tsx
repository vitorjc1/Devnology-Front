import { CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { PaymentMethodOptions } from '../CompleteOrderForm/PaymentMethodOptions'
import { FormSectionContainer } from '../CompleteOrderForm/styles'
import { ProductCartCard } from '../ProductCartCard'
import { SectionTitle } from '../SectionTitle'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedProductsContainer } from './styles'

export function SelectedProducts() {
  const { cartItems } = useCart()
  const { colors } = useTheme()

  return (
    <SelectedProductsContainer>
      <TitleText size="xs" color="subtitle">
        Products selected
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item, index) => (
          <ProductCartCard key={index} product={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Payment"
          subtitle="Payment is made on delivery. Choose the way you want to pay"
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </SelectedProductsContainer>
  )
}

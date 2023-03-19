import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity, cartItemTotalFinal } = useCart()

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotalFinal = formatMoney(cartItemTotalFinal)
  const formattedDiscount = formatMoney(cartItemsTotal - cartItemTotalFinal)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total</RegularText>
        <RegularText size="s">{formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Discount</RegularText>
        <RegularText size="s">{formattedDiscount}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          {formattedCartTotalFinal}
        </RegularText>
      </div>

      <Button
        text="Confirm order"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}

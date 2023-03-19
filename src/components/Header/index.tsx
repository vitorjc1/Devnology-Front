import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import { ShoppingCart } from 'phosphor-react'

import in8Logo from '../../assets/logo_in8.png';
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={in8Logo} alt="" style={{maxWidth: '60px'}} />
        </NavLink>

        <HeaderButtonsContainer>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}

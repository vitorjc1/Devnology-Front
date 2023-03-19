import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  ActionsContainer,
  ProductCartCardContainer,
  RemoveButton,
} from "./styles";

interface ProductCardCardProps {
  product: CartItem;
}

export function ProductCartCard({ product }: ProductCardCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.external_id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(product.external_id, "decrease");
  }

  function handleRemove() {
    removeCartItem(product.external_id);
  }

  const productTotal = product.price * product.quantity;
  const formattedDiscount = formatMoney(
    (productTotal * parseFloat(product.discount))
  );
  const formattedPrice = formatMoney(productTotal);

  const renderDiscount = () => {
    if (product.hasDiscount && parseFloat(product.discount) > 0) {
      return <span>-{formattedDiscount}</span>;
    }
    return;
  };

  return (
    <ProductCartCardContainer>
      <div>
        <img src={`${product.images[0]}`} alt="Product" />

        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={product.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>{formattedPrice}</p>
      <br />
      {renderDiscount()}
    </ProductCartCardContainer>
  );
}

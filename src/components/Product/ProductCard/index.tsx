import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { Product } from "../../../interfaces/Product";
import { QuantityInput } from "../../QuantityInput";
import { RegularText, TitleText } from "../../Typography";
import {
  AddCartWrapper,
  CardFooter,
  Description,
  Name,
  ProductCardContainer,
  Tags,
} from "./styles";

interface ProductProps {
  product: Product;
}

export function ProductCard({ product }: ProductProps) {
  const { addProductToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity,
    };

    addProductToCart(productToAdd);

    setQuantity(1);
  }

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return (
    <ProductCardContainer>
      <img src={`${product.images[0]}`} alt="product image" />

      <Tags>
        <span key={product.category}>{product.category}</span>
      </Tags>

      <Name>{product.name}</Name>
      <Description>{product.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ProductCardContainer>
  );
}

import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'
import { Product } from '../interfaces/Product'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  cartItemTotalFinal: number

  addProductToCart: (product: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const PRODUCTS_ITEMS_STORAGE_KEY = 'ProductsDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(PRODUCTS_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })

  const cartQuantity = cartItems.length
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  const cartItemTotalFinal = cartItems.reduce((total, cartItem) => {
    let discount = 0;
    if(cartItem.hasDiscount){
      discount = cartItem.price * cartItem.quantity * parseFloat(cartItem.discount);
    }
    return total + (cartItem.price * cartItem.quantity) - discount;
  }, 0);

  function addProductToCart(product: CartItem) {
    const productAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.external_id === product.external_id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExistsInCart < 0) {
        draft.push(product)
      } else {
        draft[productAlreadyExistsInCart].quantity += product.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.external_id === cartItemId,
      )

      if (productExistsInCart >= 0) {
        const item = draft[productExistsInCart]
        item.quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const productExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.external_id === cartItemId,
      )

      if (productExistsInCart >= 0) {
        draft.splice(productExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(PRODUCTS_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        cartQuantity,
        cartItemsTotal,
        cartItemTotalFinal,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

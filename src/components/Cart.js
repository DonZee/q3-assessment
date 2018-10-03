import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  let listOfCartItems = props.items.map(item => <CartItem key={item.id} item={item} removeCameraFromCart={props.removeCameraFromCart} />)
  return (
    <div>{listOfCartItems}</div>
  )
}

export default Cart;

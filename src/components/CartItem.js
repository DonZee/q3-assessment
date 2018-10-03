import React from 'react'
import { Button } from 'reactstrap'

const CartItem = ({item, removeCameraFromCart}) => {
  return (
    <div>
      {item.title}
      <Button
        onClick={() => removeCameraFromCart(item.id)}
      >Remove from cart</Button>
    </div>
  )
}

export default CartItem;

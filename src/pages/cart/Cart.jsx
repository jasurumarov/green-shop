import React from 'react'
import { useSelector } from 'react-redux'

// Components
import CartContent from '../../components/cartContent/CartContent'

const Cart = () => {
  const carts = useSelector(s => s.cart.value)
  return (
    <div className='cart-page'>
      <CartContent data={carts}/>
    </div>
  )
}

export default Cart
import React from 'react'
import CheckoutContent from '../../components/checkoutContent/CheckoutContent'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const carts = useSelector(s => s.cart.value)
  return (
    <div style={{marginTop: '123px'}} className='checkout-page'>
        <CheckoutContent data={carts}/>
    </div>
  )
}

export default Checkout
import React from 'react'
import { LuTrash } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { incrementCartQuantity, decrementCartQuantity, removeItemFromCart } from '../../context/cartSlice'

const CartContent = ({ data }) => {
  const dispatch = useDispatch()

  let cart = data?.map(el => (
    <div key={el.id} className="cart__table-item">
      <div>
        <img src={el.images[0]} alt="" />
        <article>
          <h4 title={el.title}>{el.title}</h4>
          <p><span>SKU:</span> 1995751877966</p>
        </article>
      </div>
      <div>
        <p>${el.price}</p>
      </div>
      <div>
        <button disabled={el.quantity <= 1} onClick={() => dispatch(decrementCartQuantity(el))}>-</button>
        <span>{el.quantity}</span>
        <button onClick={() => dispatch(incrementCartQuantity(el))}>+</button>
      </div>
      <div>
        <p>${el.price * el.quantity}</p>
        <button onClick={() => dispatch(removeItemFromCart(el))}><LuTrash/></button>
      </div>
    </div>
  ))
  return (
    <section className='cart-section'>
      <div className="container">
        <div className="cart-section__content">
          <div className="cart__path">
            <Link to={"/"}>Home</Link> / Cart 
          </div>
          <div className="cart__table">
            <div className="cart__table-title">
              <h3>Products</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
            </div>
            <div className="cart__table-items">
              {cart}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartContent
import React, { useState } from 'react'
import { LuTrash } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { incrementCartQuantity, decrementCartQuantity, removeItemFromCart } from '../../context/cartSlice'
import { toast } from 'react-toastify'

const CartContent = ({ data }) => {
  const [coupon, setCoupon] = useState("")
  let totalPrice = data?.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const [totalPriceWithCoupon, setTotalPriceWithCoupon] = useState(totalPrice);
  const dispatch = useDispatch()

  
  const keyCoupon = "discount"

  const handleSubmit = (e) => {
    e.preventDefault()

    if (keyCoupon === coupon) {
      setTotalPriceWithCoupon(totalPrice - 10); 
      toast.success("Coupon is accepted")
    } else {
      setTotalPriceWithCoupon(totalPrice); 
      toast.error("Coupon not found")
    } 

  }

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
        <p>${el.price?.brm()}</p>
      </div>
      <div>
        <button disabled={el.quantity <= 1} onClick={() => dispatch(decrementCartQuantity(el))}>-</button>
        <span>{el.quantity}</span>
        <button onClick={() => dispatch(incrementCartQuantity(el))}>+</button>
      </div>
      <div>
        <p>${(el.price * el.quantity)?.brm()}</p>
        <button onClick={() => dispatch(removeItemFromCart(el))}><LuTrash/></button>
      </div>
    </div>
  ))


  return (
    <section className='cart-section'>
      <div className="container">
        <div className="cart__path">
          <Link to={"/"}>Home</Link> / Cart 
        </div>
        <div className="cart-section__content">
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
          <div className="cart__totals">
            <h2>Cart Totals</h2>
            <h4>Coupon Apply</h4>
            <form onSubmit={handleSubmit}>
              <input value={coupon} onChange={e => setCoupon(e.target.value)} type="text" placeholder='Coupon name "discount"'/>
              <button>Apply</button>
            </form>
            <div>
                <p>Subtotal</p>
                <h3>${totalPriceWithCoupon?.brm()}</h3>
            </div>
            <div>
                <p>Coupon Discount</p>
                <h3>${totalPrice - totalPriceWithCoupon}</h3>
            </div>
            <div className='cart__totals-shipping'>
                <p>Shiping</p>
                <h3>$16.00</h3>
            </div>  
            <p className="cart__totals-link">View shipping charge</p>
            <article>
              <h3>Total</h3>
              <h3>${(totalPriceWithCoupon + 16)?.brm()}</h3>
            </article>
            <Link className='cart__totals-btn' to={"/cart/checkout"}>Proceed To Checkout</Link>
            <Link className='cart__totals-shop' to={"/"}>Continue Shopping</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartContent
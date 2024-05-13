import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// IMAGES
import PaymentMethods from '../../images/payment.svg'

const CheckoutContent = ({data}) => {
  let totalPrice = data?.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const cart = data?.map(el => (
    <div key={el.id} className="checkout__aside__product">
      <img src={el.images[0]} alt="" />
      <div>
        <h3 title={el.title}>{el.title}</h3>
        <p><span>SKU:</span>  1995751877966</p>
      </div>
      <h5>(x {el.quantity})</h5>
      <h4>${(el.price * el.quantity).brm()}</h4>
    </div>
  ))
  return (
    <div className='checkout-section'>
      <div className="container">
        <div className="checkout__path">
          <Link to={"/"}>Home</Link> / <Link to={"/cart"}>Cart</Link> / Checkout
        </div>
        <div className="checkout-section__content">
          <form>
            <h2>Billing Address</h2>
            <div className='checkout__form-inputs'>
              <div>
                <label htmlFor="fname">First Name <sup>*</sup></label>
                <input id='fname' type="text" />
              </div>
              <div>
                <label htmlFor="lname">Last Name <sup>*</sup></label>
                <input id='lname' type="text" />
              </div>
            </div>
            <div className='checkout__form-inputs'>
              <div>
                <label htmlFor="country">Country / Region <sup>*</sup></label>
                <select>
                  <option value="uz">Uzbeksitan</option>
                  <option value="uz">Russia</option>
                </select>
              </div>
              <div>
                <label htmlFor="city">Town / City <sup>*</sup></label>
                <input id='city' type="text" />
              </div>
            </div>
            <div className='checkout__form-inputs'>
              <div>
                <label htmlFor="adress">Street Address <sup>*</sup></label>
                <input id='adress' type="text" placeholder='House number and street name' />
              </div>
              <div>
                <label htmlFor="appartment">Appartment</label>
                <input id='appartment' type="text" placeholder='Appartment, suite, unit, etc. (optional)' />
              </div>
            </div>
            <div className='checkout__form-inputs'>
              <div>
                <label htmlFor="state">State <sup>*</sup></label>
                <select>
                  <option value="tashkent">Tashkent</option>
                  <option value="moscow">Moscow</option>
                </select>
              </div>
              <div>
                <label htmlFor="zip">Zip <sup>*</sup></label>
                <input id='zip' type="text" />
              </div>
            </div>
            <div className='checkout__form-inputs checkout__form-inputs--last'>
              <div>
                <label htmlFor="email">Email address <sup>*</sup></label>
                <input id='email' type="email" />
              </div>
              <div>
                <label htmlFor="tel">Phone Number <sup>*</sup></label>
                <article>
                  <select>
                    <option value="+998">+998</option>
                    <option value="+996">+996</option>
                  </select>
                  <input id='tel' type="tel" />
                </article>
              </div>
            </div>
            <div className="checkout__form-radio">
              <input type="checkbox" className="checkbox-round" />
              <label htmlFor="ship">Ship to a different address?</label>
            </div>
            <div className="checkout__form-textarea">
              <label htmlFor="note">Order notes (optional)</label>
              <textarea id="note"></textarea>
            </div>
            <button>Place Order</button>
          </form>
          <aside>
            <h2>Your Order</h2>
            <div className="checkout__aside__products-title">
              <h3>Products</h3>
              <h3>Subtotal</h3>
            </div>
            <div className="checkout__aside__products">
              {cart}
            </div>
            <p className='checkout__aside-coupon'>Have a coupon code? <Link to={"/cart"}>Click here</Link></p>
            <div className="checkout__aside-check">
              <div className="checkout__aside-check__price">
                <p>Subtotal</p>
                <h3>${totalPrice}</h3>
              </div>
              <div className="checkout__aside-check__price">
                <p>Coupon Discount</p>
                <h3>(-) 00.00</h3>
              </div>
              <div className="checkout__aside-check__price">
                <p>Shiping</p>
                <h3>$16.00</h3>
              </div>
              <p className='checkout__aside-check__ship'>View shipping charge</p>
              <div className="checkout__aside-check__total">
                <h3>Total</h3>
                <h3>${totalPrice + 16}</h3>
              </div>
              <h3 className="checkout__aside-check__payment-title">Payment Method</h3>
              <label htmlFor='paym' className="checkout__aside-check__radio">
                <input id='paym' type="radio" name='payment'/>
                <img src={PaymentMethods} alt="" />
              </label>
              <label htmlFor='transfer' className="checkout__aside-check__radio">
                <input id='transfer' type="radio" name='payment'/>
                <p>Dorect bank transfer</p>
              </label>
              <label htmlFor='deliervy' className="checkout__aside-check__radio">
                <input defaultChecked id='deliervy' type="radio" name='payment'/>
                <p>Cash on delivery</p>
              </label>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default CheckoutContent
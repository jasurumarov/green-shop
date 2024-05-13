import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutContent = () => {
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
                    <input id='adress' type="text" placeholder='House number and street name'/>
                  </div>
                  <div>
                    <label htmlFor="appartment">Appartment<sup>*</sup></label>
                    <input id='appartment' type="text" placeholder='Appartment, suite, unit, etc. (optional)'/>
                  </div>
                </div>
                <div className='checkout__form-inputs'>
                  <div>
                    <label htmlFor="state">State <sup>*</sup></label>
                    <select>
                      <option value="uz">Uzbeksitan</option>
                      <option value="uz">Russia</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip">Zip <sup>*</sup></label>
                    <input id='zip' type="text" />
                  </div>
                </div>
                <div className='checkout__form-inputs'>
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
                  <input id='ship' type="checkbox" />
                  <label htmlFor="ship">Ship to a different address?</label>
                </div>
                <div className="checkout__form-textarea">
                  <label htmlFor="note">Order notes (optional)</label>
                  <textarea id="note"></textarea>
                </div>
                <button>Place Order</button>
              </form>
              <aside></aside>
            </div>
        </div>
    </div>
  )
}

export default CheckoutContent
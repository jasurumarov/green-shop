import React from 'react'

// IMAGES
import { LuShoppingCart } from 'react-icons/lu'
import { FaRegHeart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

const Products = ({data, loading}) => {
    let product = data?.data?.products.map(el => (
        <div key={el.id} className="products__card">
            <div className="products__card-img">
                <img src={el.images[0]} alt="" />
                <article>
                    <div><LuShoppingCart /></div>
                    <div><FaRegHeart /></div>
                    <div><FiSearch /></div>
                </article>
            </div>
            <p title={el.title} >{el.title}</p>
            <h3>${el.price}</h3>
        </div>
    ))
  return (
    <div className='products-section'>
        <div className="container">
            <div className="products-section__content">
                <div className="products__title">
                    <h2>Products</h2>
                    <ul>
                        <li>All Plants</li>
                        <li>New Arrivals</li>
                        <li>Sale</li>
                    </ul>
                    <div>
                        <p>Short by:</p>
                        <select>
                            <option value="DefaultSorting">Default sorting</option>
                            <option value="clothes">Clothes</option>
                            <option value="shoes">Shoes</option>
                            <option value="tShorts">T-Shorts</option>
                        </select>
                    </div>
                </div>
                <div className="products__cards">
                    {product}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
import React from 'react'
import { useFetch } from '../../hooks/useFetch'

// Components
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'

const Home = () => {
  const {data, loading} = useFetch('/products')
  return (
    <div className='home-page'>
        <Hero/>
        <Products data={data} loading={loading}/>
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

// Components
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import { Button } from '@mui/material'

const Home = () => {
  const [count, setCount] = useState(1)
  const {data, loading} = useFetch(`/products?limit=${count * 8}`, count)
  return (
    <div style={{marginTop: '83px'}} className='home-page'>
        {/* <Hero/> */}
        <div style={{marginTop: '120px'}}></div>
        <Products data={data} loading={loading}/>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '56px'}} className="seeMore">
          <Button style={{background: '#46A358'}} onClick={() => setCount(p => p + 1)} variant="contained" size='medium'>See more</Button>
        </div>
    </div>
  )
}

export default Home
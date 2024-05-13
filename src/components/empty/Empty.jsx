import React from 'react'
import EmptyImg from '../../images/cart-empty.jpg'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material'

const Empty = () => {
  let navigate = useNavigate()
  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className='empty'>
        <img style={{marginTop: '-160px'}} src={EmptyImg} alt="" />
        <Button style={{background: '#46A358', paddingTop: '8px'}} onClick={() => navigate("/")} variant="contained">Continue Shopping</Button>
    </div>
  )
}

export default Empty
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartMenu from './CartMenu'
import { clearCart } from '../utils/cartSlice'
import Button from '@mui/material/Button';
import Checkout from './Checkout';
import { Link } from 'react-router-dom'
const Cart = () => {

  const cartItems=useSelector((store)=>store.cart.items)
  const dispatch=useDispatch()

  const onHandleClick=()=>{
    dispatch(clearCart())
  }
  const handleCheckout=()=>{
    <Checkout/>
  }
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
    <h1>Total Cart Items : {cartItems.length}</h1>
    <h2>Total Amount : Rs. {total/100}</h2>
    <Button sx={{backgroundColor:"orangered", color:"white" , marginLeft:"10px",'&:hover': {backgroundColor: 'orange'}}} onClick={()=>onHandleClick()}>Clear</Button>
    <Link to="/checkout"><Button sx={{backgroundColor:"orangered", color:"white" , marginLeft:"10px",'&:hover': {backgroundColor: 'orange'}}} onClick={()=>handleCheckout()}>Proceed to Checkout</Button></Link>

        {cartItems.map((item)=><CartMenu key={item.id} {...item} />)}
    </>
  )
}

export default Cart
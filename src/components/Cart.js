import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartMenu from './CartMenu'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

  const cartItems=useSelector((store)=>store.cart.items)
  const dispatch=useDispatch()

  const onHandleClick=()=>{
    dispatch(clearCart())
  }
  return (
    <>
    <h1>Cart {cartItems.length + " items"}</h1>
    <button onClick={()=>onHandleClick()}>Clear</button>
        {cartItems.map((item)=><CartMenu key={item.id} {...item} />)}
    </>
  )
}

export default Cart
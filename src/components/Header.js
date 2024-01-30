import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Header = () => {

  const [loginUser,setLoginUser]=useState(false)
  const isOnline = useOnline()
  const cartItems=useSelector((store)=>store.cart.items)

  return (
    <div className='header'>
      <div className='logo'>
        <img src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" alt="logo" />
      </div>
      <div className='nav-links'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/cart">
            <li>
            <div class="cart">
              <span class="count">{cartItems.length}</span>
              <i class="material-icons"><ShoppingCartOutlinedIcon/></i>
            </div>
            </li>
          </Link>
          {isOnline?'🟢 Online':'🔴 Offline'}
        </ul>
      </div>
      <div className='auth-buttons'>
        {
          loginUser === false ? <Button sx ={{backgroundColor:"orangered",'&:hover': {
            backgroundColor: 'orange'}}} variant="contained" onClick={()=>setLoginUser(true)}>Login</Button> : <Button sx={{color:'white', backgroundColor:"orangered", '&:hover': {backgroundColor: 'orange'}}} variant="contained"  onClick={()=>setLoginUser(false)}>Logout</Button>
        }                  
      </div>
    </div>
  )
}

export default Header
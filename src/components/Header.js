import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import { useSelector } from 'react-redux'

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
          <Link to="/cart"><li>Cart{cartItems.length + "items"}</li></Link>
          {isOnline?'🟢 Online':'🔴 Offline'}
        </ul>
      </div>
      <div className='auth-buttons'>
        {
          loginUser === false ? <button onClick={()=>setLoginUser(true)}>Login</button> : <button onClick={()=>setLoginUser(false)}>Logout</button>
        }
        
        

      </div>
    </div>
  )
}

export default Header
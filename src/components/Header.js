import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebaseConfig'
const Header = () => {

  const [loginUser,setLoginUser]=useState(false)
  const isOnline = useOnline()
  const cartItems=useSelector((store)=>store.cart.items)

  const handleGoogle = async(e)=>{
    try{
    const provider = await new GoogleAuthProvider()
    const authProvider= await signInWithPopup(auth,provider) 
    provider?(setLoginUser(true)):setLoginUser(false)
    return authProvider
    
    }
    catch(err){
      console.log(err)
      setLoginUser(false)
    }
  }  
return (
    <div className='header'>
      <div className='logo'>
        <img src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" alt="logo" />
      </div>
      <div className='nav-links'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          {isOnline?'🟢 Online':'🔴 Offline'}
          <Link to="/cart">
            <li>
            <div class="cart">
              <span class="count">{cartItems.length}</span>
              <i class="material-icons"><ShoppingCartOutlinedIcon/></i>
            </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className='auth-buttons'>
        {
          loginUser === false ? <Button sx ={{backgroundColor:"orangered",'&:hover': {
            backgroundColor: 'orange'}}} variant="contained" onClick={handleGoogle}>Login</Button> : <Button sx={{color:'white', backgroundColor:"orangered", '&:hover': {backgroundColor: 'orange'}}} variant="contained"  onClick={()=>setLoginUser(false)}>Logout</Button>
        }                  
      </div>
    </div>
  )
}

export default Header
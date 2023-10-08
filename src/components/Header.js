import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [loginUser,setLoginUser]=useState(false)

  return (
    <div className='header'>
      <div className='logo'>
        <img src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" alt="logo" />
      </div>
      <div className='nav-links'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          {/* <Link><li>Order</li></Link> */}
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
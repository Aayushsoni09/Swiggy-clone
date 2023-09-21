import React, { useState } from 'react'

const Header = () => {

  const [loginUser,setLoginUser]=useState(false)

  return (
    <div className='header'>
      <div className='logo'>
        <img src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" alt="logo" />
      </div>
      <div className='nav-links'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Order</li>
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
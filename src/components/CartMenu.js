import React from 'react'

const CartMenu = ({name,price}) => {
  return (
    <>
        <ul>
            <li>
                {name} {"Rs. " + price/100}
            </li>
        </ul>
    </>
  )
}

export default CartMenu
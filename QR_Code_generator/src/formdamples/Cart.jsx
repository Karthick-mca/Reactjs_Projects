import {useState} from 'react'

const Cart = () => {
    const [cartCount,setcartCount] = useState(0)
    const handleClick=()=>setcartCount(cartCount+1)
  return (
    <>
    <h1>List of items added in cart: {cartCount}</h1>
    <button onClick={handleClick}>Add to cart </button>
    </>
    
  )
}

export default Cart

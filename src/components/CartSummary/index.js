// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.length
      let totalPrice = 0
      cartList.forEach(eachItem => {
        totalPrice += eachItem.price * eachItem.quantity
      })
      return (
        <div>
          <h1>Order Total: Rs {totalPrice} </h1>
          <p>{totalItems} items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

import CartContext from '../../context/CartContext'

// Write your code here
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0

      cartList.forEach(eachCartItem => {
        totalPrice += eachCartItem.price * eachCartItem.quantity
      })

      const cartLength = cartList.length

      return (
        <div className="cart-summary-container">
          <h1 className="summary">
            Order Total: <span className="total">Rs {totalPrice}/-</span>
          </h1>
          <p className="summary-desc">{cartLength} Items in cart</p>
          <button className="button checkout" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary

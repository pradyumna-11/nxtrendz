import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLength = cartList.length
      let total = 0
      cartList.forEach(each => {
        total += each.quantity * each.price
      })
      return (
        <div className="cart-summary">
          <h1 className="total">
            Order Total: <span className="total-cost">{`Rs ${total}/-`}</span>
          </h1>
          <p className="total-cart">
            <span>{cartLength}</span> items in cart
          </p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

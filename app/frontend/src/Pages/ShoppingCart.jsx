import { Link } from 'react-router-dom';

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </div>
      <h1>Shopping Cart</h1>
    </div>
  )
}
export default ShoppingCart
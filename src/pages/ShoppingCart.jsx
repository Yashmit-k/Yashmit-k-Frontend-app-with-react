import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, deleteFromCart, addToCart } from '../store/cartSlice';

function ShoppingCart() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleDelete = (item) => {
    dispatch(deleteFromCart(item.id));
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="cart-summary">
        <p>Total Items: {totalQuantity}</p>
        <p>Total Cost: ${totalAmount.toFixed(2)}</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="checkout-btn" disabled>
              Coming Soon
            </button>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart; 
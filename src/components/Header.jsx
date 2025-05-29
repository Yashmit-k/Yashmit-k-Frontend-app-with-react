import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart ({cartQuantity})
        </Link>
      </nav>
    </header>
  );
}

export default Header; 
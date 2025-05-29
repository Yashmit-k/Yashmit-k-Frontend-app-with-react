import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { plants } from '../data/plants';

function ProductListing() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState(new Set());

  const categories = [...new Set(plants.map(plant => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems(prev => new Set([...prev, plant.id]));
  };

  return (
    <div className="product-listing">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plants-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.has(plant.id)}
                    className="add-to-cart-btn"
                  >
                    {addedItems.has(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing; 
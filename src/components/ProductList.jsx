import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) =>
    cartItems.find(item => item.id === id);

  return (
    <div>
      <h2>Plants</h2>

      {plants.map(plant => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <p>{plant.name}</p>
          <p>₹{plant.price}</p>

          <button
            disabled={isInCart(plant.id)}
            onClick={() => dispatch(addItem(plant))}
          >
            {isInCart(plant.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

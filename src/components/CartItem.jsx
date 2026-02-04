import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }));
    }
  };

  return (
    <div>
      <img src={item.image} />
      <p>{item.name}</p>
      <p>₹{item.price}</p>

      <button onClick={() =>
        dispatch(updateQuantity({
          id: item.id,
          quantity: item.quantity + 1
        }))
      }>+</button>

      <span>{item.quantity}</span>

      <button onClick={handleDecrease}>-</button>

      <button onClick={() =>
        dispatch(removeItem(item.id))
      }>
        Delete
      </button>
    </div>
  );
}

export default CartItem;

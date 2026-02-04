import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price} × {item.quantity}
          </p>

          <button onClick={() => dispatch(addItem(item))}>+</button>

          <button
            onClick={() =>
              item.quantity === 1
                ? dispatch(removeItem(item.id))
                : dispatch({
                    type: "cart/updateQuantity",
                    payload: { id: item.id, quantity: item.quantity - 1 },
                  })
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default CartItem;

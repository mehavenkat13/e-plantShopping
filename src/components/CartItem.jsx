import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>Unit Price: ₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button
            onClick={() =>
              item.quantity > 1
                ? dispatch(updateQuantity({ id: item.id, amount: -1 }))
                : dispatch(removeItem(item.id))
            }
          >
            -
          </button>

          <span> {item.quantity} </span>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, amount: 1 }))
            }
          >
            +
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Amount: ₹{totalAmount}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <br /><br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
}

export default CartItem;

import { useState } from "react";

const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => onDecrease(item.id)}>-</button>
      <button onClick={() => onIncrease(item.id)}>+</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onDelete={deleteItem}
        />
      ))}

      <h3>Total Amount: ₹{totalAmount}</h3>

      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
};

export default CartPage;

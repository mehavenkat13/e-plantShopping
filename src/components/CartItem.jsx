const CartItem = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button>-</button>
      <button>+</button>
      <button>Remove</button>
    </div>
  );
};

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total Amount: ₹{totalAmount}</h3>

      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
};

export default CartPage;


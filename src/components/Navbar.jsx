import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector(
    (state) => state.cart.items.length
  );

  return (
    <div>
      <span>Home</span> | <span>Plants</span> | <span>Cart ({cartCount})</span>
    </div>
  );
}

export default Navbar;

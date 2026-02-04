import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  { id: 1, name: "Aloe Vera", price: 200, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 250, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 300, category: "Indoor" },

  { id: 4, name: "Rose", price: 150, category: "Outdoor" },
  { id: 5, name: "Hibiscus", price: 180, category: "Outdoor" },
  { id: 6, name: "Jasmine", price: 160, category: "Outdoor" },

  { id: 7, name: "Bonsai", price: 500, category: "Decorative" },
  { id: 8, name: "Money Plant", price: 220, category: "Decorative" },
  { id: 9, name: "Cactus", price: 140, category: "Decorative" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <div>
      <h2>Our Plants</h2>

      {["Indoor", "Outdoor", "Decorative"].map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plantsArray
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <p>{plant.name} - ₹{plant.price}</p>

                <button
                  disabled={isInCart(plant.id)}
                  onClick={() =>
                    dispatch(addItem({ ...plant, quantity: 1 }))
                  }
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

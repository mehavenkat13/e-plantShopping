import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 300, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Peace Lily", price: 350, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Aloe Vera", price: 200, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Money Plant", price: 250, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Spider Plant", price: 280, image: "https://via.placeholder.com/150" },
      { id: 6, name: "ZZ Plant", price: 400, image: "https://via.placeholder.com/150" },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 7, name: "Rose", price: 150, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Jasmine", price: 180, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Hibiscus", price: 200, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Bougainvillea", price: 220, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Tulsi", price: 120, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Neem", price: 160, image: "https://via.placeholder.com/150" },
    ],
  },
  {
    category: "Succulents",
    plants: [
      { id: 13, name: "Cactus", price: 100, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Jade Plant", price: 180, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Haworthia", price: 150, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Echeveria", price: 170, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Sedum", price: 140, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Agave", price: 300, image: "https://via.placeholder.com/150" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h2>Our Plants</h2>

      {plantsArray.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {category.plants.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

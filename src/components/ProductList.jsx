import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

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
      { id: 13, name: "Echeveria", price: 180, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Haworthia", price: 190, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Jade Plant", price: 210, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Cactus", price: 160, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Aloe Mini", price: 170, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Sedum", price: 175, image: "https://via.placeholder.com/150" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <div>
      {plantsArray.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {group.plants.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>₹{plant.price}</p>

                <button
                  disabled={isAdded(plant.id)}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {isAdded(plant.id) ? "Added" : "Add to Cart"}
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

Fix ProductList and Cart functionality


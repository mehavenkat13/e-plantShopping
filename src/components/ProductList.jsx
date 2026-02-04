import { useState } from "react";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Peace Lily", price: 18, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Aloe Vera", price: 12, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Cactus", price: 10, category: "Succulent", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Rose", price: 20, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Jasmine", price: 22, category: "Flowering", image: "https://via.placeholder.com/100" },
];

const ProductList = () => {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    setCartCount(cartCount + 1);
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h2>Plant Collection</h2>
      <p>Cart Items: {cartCount}</p>

      {["Indoor", "Succulent", "Flowering"].map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <p>{plant.name}</p>
                <p>₹{plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

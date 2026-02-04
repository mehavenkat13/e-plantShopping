import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app-container">
      {!showProducts ? (
        <>
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </>
      ) : (
        <>
          <ProductList />
          <CartItem />
        </>
      )}
    </div>
  );
}

export default App;

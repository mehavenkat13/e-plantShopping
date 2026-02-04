import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="landing">
      {!showProducts ? (
        <div>
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;

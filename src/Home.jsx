import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";

export function Home() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products} />
    </div>
  );
}

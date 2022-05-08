import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import charity from "../charity";

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      setProducts(await charity.methods.getProducts().call());
      console.log(products);
    };
    loadContractFunctions();
    const intervalId = setInterval(() => {
      loadContractFunctions();
    }, 1000 * 20); // in milliseconds
    return () => clearInterval(intervalId);
  }, [products]);

  return (
    <div className="row">
      <h2>Products available are:</h2>
      {products.map((prod) => (
        <ProductCard
          key={prod["productId"]}
          productId={prod["productId"]}
          productName={prod["productName"]}
          price={prod["price"]}
          seller={prod["seller"]}
        />
      ))}
    </div>
  );
}

export default Products;

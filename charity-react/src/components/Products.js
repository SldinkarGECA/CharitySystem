import React from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import charity from "../charity";
function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      setProducts(await charity.methods.getProducts().call());
      console.log(products);
    };
    loadContractFunctions();
  });

  return (
    <div>
      <h2>Products are:</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Seller</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <ProductCard
              key={prod["productId"]}
              productId={prod["productId"]}
              productName={prod["productName"]}
              price={prod["price"]}
              seller={prod["seller"]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;

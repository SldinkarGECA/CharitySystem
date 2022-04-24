import "./App.css";
import { useEffect, useState } from "react";
import charity from "./charity";
import Product from "./components/Product";
function App() {
  const [manager, setManager] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      let _manager = await charity.methods.manager().call();
      setManager(_manager);
      setProducts(await charity.methods.getProducts().call());
      console.log(products);
    };
    loadContractFunctions();
  });

  return (
    <div className="container-fluid">
      <h1>Manager is {manager}</h1>
      <h2>address is {charity.options.address}</h2>
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
            <Product
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

export default App;

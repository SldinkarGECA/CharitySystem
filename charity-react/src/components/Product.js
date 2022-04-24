import React from "react";
function Product(props) {
  return (
    <tr>
      <td>{props.productId}</td>
      <td>{props.productName}</td>
      <td> {props.price}</td>
      <td> {props.seller}</td>
    </tr>
    // <div>
    //   <div style={{ width: "18rem" }}>
    //     <h1>
    //       {props.productId} : {props.productName}
    //     </h1>
    //     <div>
    //       <p>Price: {props.price}</p>
    //       <p>Seller: {props.seller}</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Product;

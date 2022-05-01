import React from "react";
function ProductCard(props) {
  return (
    <tr>
      <td>{props.productId}</td>
      <td>{props.productName}</td>
      <td> {props.price}</td>
      <td> {props.seller}</td>
    </tr>
  );
}

export default ProductCard;

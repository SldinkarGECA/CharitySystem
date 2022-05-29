import React, { useEffect, useState } from "react";
import PaymentCard from "./PaymentCard";
import charity from "../charity";

function Payments(props) {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      setPayments(await charity.methods.getPayments().call());
      console.log(payments);
    };
    loadContractFunctions();
    const intervalId = setInterval(() => {
      loadContractFunctions();
    }, 1000 * 20); // in milliseconds
    return () => clearInterval(intervalId);
  }, [payments]);

  return (
    <div className="row">
      <h2>Recent Payments:</h2>
      {payments.map((prod, index) => (
        <PaymentCard
          key={index}
          description={prod["description"]}
          amount={prod["amount"]}
          sender={prod["sender"]}
          receiver={prod["receiver"]}
        />
      ))}
    </div>
  );
}

export default Payments;

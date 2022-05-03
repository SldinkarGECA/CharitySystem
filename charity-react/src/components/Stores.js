import React, {useEffect, useState} from "react";
import charity from "../charity";
import StoreCard from "./StoreCard";

function Stores(props) {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const loadContractFunctions = async () => {
            setStores(await charity.methods.getCoOpStores().call());
            console.log(stores);
        };
        loadContractFunctions();
    });

    return (
        <div className="row">
            <h2>Stores selling products on our platform are:</h2>
            {stores.map((prod) => (
                <StoreCard
                    key={prod["StoreName"]}
                    StoreName={prod["StoreName"]}
                    StoreAddress={prod["StoreAddress"]}
                />
            ))}
        </div>
    );
}

export default Stores;

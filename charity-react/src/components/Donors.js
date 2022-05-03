import React, {useEffect, useState} from "react";
import charity from "../charity";
import DonorCard from "./DonorCard";

function Donors(props) {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        const loadContractFunctions = async () => {
            setDonors(await charity.methods.getDonators().call());
            console.log(donors);
        };
        loadContractFunctions();
    });

    return (
        <div className="row">
            <h2>Donors of our platform are:</h2>
            {donors.map((prod) => (
                <DonorCard
                    key={prod["donatorName"]}
                    donatorName={prod["donatorName"]}
                    donatorMessage={prod["donatorMessage"]}
                    donatedValue={prod["donatedValue"]}
                    donatorAddress={prod["donatorAddress"]}
                />
            ))}
        </div>
    );
}

export default Donors;

import axios from "axios";
import React, { useState } from "react";


const CreateCustomer = () => {
  const [customerName, setCustomerName] = useState("");
  const [credit, setCredit] = useState(0);

  const createCustomer = () => {
    const customers = {
      customerName: customerName,
      credit: credit,
    };
    axios
      .post("http://localhost:8000/api/credit/add/", customers)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return  (
    <div className="create-customer">
      <div>
        <h2 className="head"> Carnet Credit</h2>
      </div>
      <div>
        <input
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Customer name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setCredit(e.target.value)}
          placeholder="Customer credit"
        />
      </div>
      <button onClick={createCustomer} className="create-button">
        Add customer
      </button>
    </div>
  );
};

export default CreateCustomer;

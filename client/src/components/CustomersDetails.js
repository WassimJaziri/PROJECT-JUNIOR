import axios from "axios";
import React, { useState } from "react";

const CustomersDetails = ({ customers }) => {
  const [view, setView] = useState(false);
  const [newAmount, setNewAmount] = useState("");
  const [customer, setCustomer] = useState("");
  const changeView = () => {
    setView(!view);
  };
  const strDate = new Date(customers.updatedDate);
  const deleteCustomer = (name) => {
    axios
      .delete(`http://localhost:8000/api/credit/deleteOne/${name}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  const changeAmount = (name) => {
    axios
      .put(`http://localhost:8000/api/credit/update/${name}`, {
        credit: newAmount,
        customerName: customer,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    window.location.reload();
  };
  return (
    <div className="cusomer-detail">
      <div>
        <ul>
          <li className="detail-name">{customers.customerName}</li>
          <li>
            {view ? (
              <input
                defaultValue={customers.credit}
                onChange={(e) => {
                  console.log(newAmount);
                  setNewAmount(e.target.value);
                }}
              />
            ) : (
              customers.credit
            )}
          </li>
          <li>{strDate.toLocaleString("fr-FR")}</li>
        </ul>
      </div>
      <button onClick={changeView}>Edit Customer's Credit</button>
      <button
        onClick={() => {
          console.log("new");
          changeAmount(customers.customerName);
        }}
      >
        Update credit
      </button>
      <button onClick={() => deleteCustomer(customers.customerName)}>
        Delete Customer
      </button>
    </div>
  );
};

export default CustomersDetails;

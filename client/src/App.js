
import './App.css';
import CreateCustomer from './components/CreateCustomer';
import Customers from './components/Customers.js';
import axios from "axios";
import { useState,useEffect } from "react";
import img from './assests/img.jpg'




function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = () => {
    axios
      .get("http://localhost:8000/api/credit/")
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <img src={img} style={{width:'650px',float:'left'}}/>
     <CreateCustomer/>
     <Customers data={state}/>
    </div>
  );
}

export default App;

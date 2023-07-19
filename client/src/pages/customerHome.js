import { useState,useEffect } from "react"
import { useCustomerLogin } from "../hooks/useCustomerLogin"
import { BrowserRouter as Router, Route, Routes , Navigate } from "react-router-dom";
import CustomerNavbar from "../components/common/CustomerNavbar";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import {  useParams } from "react-router-dom";

const CustomerHome = () => {

	// const { customer } = useAuthContext()
 const { customer, setCustomer } = useAuthContext();

  useEffect(() => {
    // Fetch the updated customer data from the server
    fetchCustomerData();
  }, []);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(`/api/customers/${customer._id}`); // Replace with your API endpoint for fetching customer data by ID
      setCustomer(response.data);
    } catch (error) {
      console.log('Failed to fetch customer data', error);
    }
  };





  return (
    
     
<><CustomerNavbar />
{/* 
					// to="/customers/dailypromotions"

								// to="/items/itemcustomer"


								// to="/tables" */}



<main role="main">
<div class="container-fluid bg-light">
      <h1 class="display-3">Hello, Mr. {customer.namee} </h1>
      <p>You have {customer.rewards} Reward Points you can make orders and view promotions as well as reserve tables from this webpage</p>

    </div>
  <div class="container-fluid bg-light">
    <div class="row">
      <div class="col-md-4">
        <h2>Order Items</h2>
        <p> Click Here to Make Orders
        </p>
        <p>
          <a class="btn btn-dark" href="/items/itemcustomer" role="button"> Make Orders &raquo;</a>
        </p>
      </div>
      <div class="col-md-4">
        <h2>Reserve Table</h2>
        <p>You can Reserve Tables From Here  </p>
        <p>
          <a class="btn btn-dark" href="/reserve"  role="button"> Reserve Tables &raquo;</a>
        </p>
      </div>
      <div class="col-md-4">
        <h2>Daily Promotions</h2>
        <p>View Daily Promotions</p>
        <p>
          <a class="btn btn-dark" href="/customers/dailypromotions" role="button"> Daily Promotions &raquo;</a>
        </p>
      </div>
      <div class="col-md-4">
        <h2>View Your Orders</h2>
        <p>  You can View Your Orders Here</p>
        <p>
          <a class="btn btn-dark" href="/cview/" role="button"> Current Order &raquo;</a>
        </p>
      </div>



    </div>

    <hr/>

  </div>

</main>
<footer class="container-fluid bg-light">
  <p>  Phone: +6016-3255283  </p>
  <p> Email: marketing@woodfire.com.my</p>
  <p> Operating Hours</p>
  <p> Tuesday - Saturday 12:00 - 21.30 </p>
  <p>  (Closed Monday) </p>


</footer>



</>



  )
}

export default CustomerHome
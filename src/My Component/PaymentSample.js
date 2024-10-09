import React from 'react'
import "./paymentsample.css"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function PaymentSample() {

  const location = useLocation();
  const { car } = location.state;
  const storedUsername = localStorage.getItem('username');
  const username = storedUsername;
  const navigate = useNavigate();
  const handleSubmit = async(event)=>{
    event.preventDefault();
      try {
        const response = await axios.post("http://127.0.0.1:5000/PaymentSample", {car, username});
        console.log("Response", response.data);
        navigate("/Bookings");
      } catch (error) {
          console.log("error", error);
      }
  }
  return (
    <div className="Payment-Sample-Page-Container">
      <header className="header2">
          <h3>Complete Your Booking.</h3>
        </header>
        <div className="car-details-selected">
            <img src={car.car_image} alt={car.name} />
            <h4>Name: {car.car_name}</h4>
            <h4>Price: {car.car_price}Rs</h4>
            <h4>Seating: {car.car_seating}</h4>
            <h4>Description: {car.car_desc}</h4>
        </div>
        <div className="payment-details">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="label">Username</label><br />
            <input 
                  type="text" 
                  required
                  minLength={6}
                  className="payment-input" 
                  id="username"
                  placeholder="Enter Your User Name"
                  value={username}
                  disabled
            /><br />  
            <button type="submit" className="payment-submit">Book Now</button>
          </form>
        </div>
        <footer className="payment-footer">
          <h3>
            Complete Your Booking and Enjoy.
          </h3>
        </footer>
    </div>
  )
}

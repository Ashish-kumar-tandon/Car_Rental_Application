import React, {useEffect, useState}from 'react'
import {useNavigate } from 'react-router-dom';
import moment from "moment";
import axios from 'axios';
import "./bookings.css"

export default function Bookings() {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [username, setusername] = useState();
  const convertToIndianDateTime = (isoDateString) => {
    const indianDateTime = moment(isoDateString).utcOffset('+05:30').format('DD-MM-YYYY HH:mm:ss');
    return indianDateTime;
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUsername1 = localStorage.getItem('username');
        if (storedUsername1) {
          setusername(storedUsername1);
        } else {
          console.log("No user is logged in.");
          return;
        }
        const response = await axios.post("http://127.0.0.1:5000/Bookings", {username});
        const result = response.data;
        if (Array.isArray(result)) {
          const formattedData = result.map((booking) => ({
            ...booking,
            booking_date: convertToIndianDateTime(booking.booking_date)
          }));
          setData(formattedData);
          }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [username]); 
  
const handleClick = ()=>{
  navigate("/Carlist");
}
  return (
    <div className="booking-page-container">
      <h1>My Bookings.</h1>
      <div className="booking-details">
      {data.length > 0 ? (
          data.map((car) => (
            <div key={car.sr_no} className="booking_car-item">
              <div className="booking_car-image">
                <img src={car.car_image} alt={car.car_name} />
              </div>
              <div className="booking_car-details">
                <h2>Car Name: {car.car_name}</h2>
                <p>Car Seating: {car.car_seating}</p>
                <p>Car Description: {car.car_desc}</p>
                <p>Car Price: {car.car_price}</p>
                <p>Booking Date: {car.booking_date}</p>
                <h4>Pay via Cash at the time of Delivery</h4>
                </div>
                </div>
                ))): (<h4>Book Now to Enjoy</h4>)}
      </div>
      <button type="button" id="home" onClick={handleClick}>Return Home</button>
    </div>
  )
}

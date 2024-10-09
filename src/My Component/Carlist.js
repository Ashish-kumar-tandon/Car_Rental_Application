import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./carlist.css"
import { useNavigate } from 'react-router-dom';

export default function Carlist() {
  const[username, setUsername] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/carlist');
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        } else {
          console.log("No user is logged in.");
          return;
        }
        const result = response.data.cars;
        if (Array.isArray(result)) {
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [username]); 

  const navigate = useNavigate();

    const handleChange = (car)=>
    {
        navigate('/PaymentSample', {state: {car}});
    }
    const handleClick = ()=>{
      navigate("/Bookings");
    }
  return (
    <div className="page-container-carlist">
        <header className="carlist-header"> 
            <p>Hi, {username}</p>
            <h3>These are the car availables.</h3>
            <button type="button" id="booking" onClick={handleClick}>My Bookings</button>
        </header>
      <div className="car-content">
      {data.length > 0 && (
          data.map((car) => (
            <div key={car.sr_no} className="car-item">
              <div className="car-image">
                <img src={car.car_image} alt={car.car_name} />
              </div>
              <div className="car-details">
                <h2>{car.car_name}</h2>
                <p>{car.car_seating}</p>
                <p>{car.car_desc}</p>
                <p>{car.car_price}</p>
                <button type="button" id="select" onClick={()=>handleChange(car)}>Book Now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

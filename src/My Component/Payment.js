// import React, { useState } from "react";
// import axios from 'axios';
// import { useLocation } from "react-router-dom";
// import './payment.css';


// export default function Payment() {

//     const location = useLocation();
//     const { car } = location.state;

//     const [data, setData] = useState({
//       name: "",
//       number: ""
//     });

//     const handleChange = (event)=>{
//       const { id, value } = event.target;
//       setData((prevData) => ({...prevData,[id]: value}));
//     };

//     const paymentData = {
//       uname : data.name,
//       uamount: car.price,
//       unumber: data.number,
//       MID: "MID" + Date.now(),
//       transactionId: "T" + Date.now()
//     };
//     const handleSubmit = async(event)=>{
//       event.preventDefault();
//         try{
//             const response = await axios.post('http://127.0.0.1:5000/Payment', paymentData);
//               console.log("Response", response.data);
//               if(response.data.success){
//                 window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
//               }
//             }
//         catch(error)
//         {
//           console.log("Error", error);
//         }
//     }

//   return (
//     <div className="page-container-payment">
//         <header className="header2">
//           <h3>Complete Your Booking.</h3>
//         </header>
//         <div className="car-details-selected">
//             <img src={car.car_image} alt={car.name} />
//             <h4>Name: {car.car_name}</h4>
//             <h4>Price: {car.car_price}Rs</h4>
//             <h4>Seating: {car.car_seating}</h4>
//             <h4>Description: {car.car_desc}</h4>
//         </div>

//         <div className="payment-details">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name" className="label">Name</label><br />
//             <input 
//                   type="text" 
//                   required
//                   minLength={6}
//                   className="payment-input" 
//                   id="name"
//                   placeholder="Enter Your full Name"
//                   value={data.name}
//                   onChange={handleChange}
//             /><br />  
//             <label htmlFor="number" className="label">Phone Number</label><br />
//             <input 
//                   type="text" 
//                   required
//                   minLength={10}
//                   className="payment-input" 
//                   id="number"
//                   placeholder="Enter Your Phone Number"
//                   value={data.number}
//                   onChange={handleChange}
//             /><br /> 
//             <button type="submit" className="payment-submit">Pay Now</button>
//           </form>
//         </div>
//         <footer className="payment-footer">
//           <h3>
//             Complete Your Booking and Enjoy.
//           </h3>
//         </footer>
//     </div>
//   )
// }

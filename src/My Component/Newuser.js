import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './new_user.css';


export default function Newuser() {

  const [showOtp, setShowOtp] = useState(false);

  const[formdata , setFormdata] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
    otp:''

});
const [generatedOtp, setGeneratedOtp] = useState(null);

const navigate = useNavigate();

const handleGetOtp = async() => {
  const otp = Math.floor(Math.random() * 900000) + 100000;
  setGeneratedOtp(otp);

  // const otpuri = `https://www.fast2sms.com/dev/bulkV2?authorization=YH14fl0SILZMI0SBPAabFwHgLtZqwBmUFQcEKzeFxIMZ0pH8M7OcmQ34VON5&route=dlt&sender_id=amrtac&message=170050&variables_values=${otp}%7C5%7C&flash=0&numbers=${formdata.mobile}`;
  // console.log(otpuri);
  try {
    // const response = await axios.get(otpuri);
    alert(otp);
    console.log(otp);
    // console.log(response.data);
    setShowOtp(true);
    
  } catch (error) {
    console.error("Error fetching otp", error);
  };
};
  const handleSubmit = async (event) =>{
    event.preventDefault();

    const otpnumber = Number(formdata.otp);
    const generatedOtpnumber = Number(generatedOtp);
    if(otpnumber !== generatedOtpnumber){
      alert("Invalid otp");
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:5000/Newuser', formdata);
      console.log('Response:', response.data);
      navigate('/Login');

      setFormdata({
        name: '',
        username: '',
        email: '',
        mobile: '',
        password: '',
        otp:''
      });
      setShowOtp(false);
      setGeneratedOtp(null);

    } catch (error) {
      console.error('Error:', error);
    }
  };

const handleInputChange = (event)=>{
  const { id, value } = event.target;
  setFormdata((prevFormdata) => ({...prevFormdata,[id]: value}));
};


  return (
    <div className="page-container-newuser"> 
        <div className="container">
            <form onSubmit={handleSubmit} className="new_user">
                <h4>Register Yourself.</h4>
                <input 
                  type="text" 
                  required
                  minLength={6}
                  className="input" 
                  id="name" 
                  placeholder="Enter Your Full Name" 
                  value={formdata.name}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  required
                  minLength={3}
                  className="input" 
                  id="username" 
                  placeholder="Enter the username" 
                  value={formdata.username}
                  onChange={handleInputChange}
                />
                <input 
                  type="email" 
                  required
                  className="input" 
                  id="email" 
                  placeholder="Enter Your email" 
                  value={formdata.email}
                  onChange={handleInputChange}
                />
                <input 
                  type="text" 
                  required
                  minLength={10}
                  className="input" 
                  id="mobile" 
                  placeholder="Enter Your mobile Number" 
                  value={formdata.mobile}
                  onChange={handleInputChange}
                  />
                <input 
                  type="password" 
                  required
                  className="input" 
                  id="password" 
                  placeholder="Enter Your password" 
                  value={formdata.password}
                  onChange={handleInputChange}
                  />
                  <button type="button" className="btn" onClick={handleGetOtp}>Get Otp</button>
                  {showOtp && (
            <>
              <input 
                type="text" 
                required
                minLength={6}
                maxLength={6}
                className="input"
                id="otp"
                placeholder="Enter the OTP"
                value={formdata.otp}
                onChange={handleInputChange}
              />
              <button 
                type="submit" 
                className="btn" 
                id="submit"
              >
                Register
              </button>
            </>
          )}
            </form>
        </div>
    </div>
  )
}


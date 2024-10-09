import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './login.css'


export default function Login() {
  
  const[email, setemail] = useState('');
  const[password, setpassword] = useState('');
  const navigate = useNavigate();
  
  
  const handleSubmit1 = async (event) =>{
      event.preventDefault();
      try {
        const response = await axios.post('http://127.0.0.1:5000/Login',{
           email:email,
           password:password
          });
          if(response.data.status === "User Login Successful")
          {
            localStorage.setItem('username', response.data.username);
            navigate('/Carlist');
          }
          console.log('Response:', response.data);
  
      } catch (error) {
        console.error('Error:', error);
      }

      setemail('');
      setpassword('');
  }

  const handleEmailChange1 = (event) => {
    setemail(event.target.value);
  }

  const handlePasswordChange1 = (event) => {
    setpassword(event.target.value);
  }
  return (
  <div className="page-container-login"> 
    <div className="container1">
        <form onSubmit={handleSubmit1} className="existing_user">
            <h4>Log in.</h4>
            <input 
              type="email" 
              required
              className="input1" 
              id="email" 
              placeholder="Enter Your Email" 
              value={email}
              onChange={handleEmailChange1}
            /><br />
            <input 
              type="password" 
              required
              className="input1" 
              id="password" 
              placeholder="Enter Your Password"
              value={password}
              onChange={handlePasswordChange1} 
            /><br />
            <button type="submit" className="btn1" id="login" >Log in</button>
        </form>
    </div>
</div>
  )
}


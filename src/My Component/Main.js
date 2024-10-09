import React from 'react'
import './main.css'
import { Link } from 'react-router-dom';
import logo from './Images/logo.jpg';

export default function Main() {
  return (
    <>
        <header className="header">
        <div className="left">
            <img src={logo} alt="Ashish Car Rental" />
            <h4>Ashish Car Rental</h4>
        </div>
        <div className="right">
            <Link to="/">Home</Link>
            <Link to="/Newuser">New User</Link>
            <Link to="/Login">Log in</Link>
        </div>
        </header>
        <div className="mid">
        <h4>Welcome to Ashish Car Rental.</h4>
        </div>
        <footer className="footer">
        <p>Contact us for any issue or consultation.</p>
        </footer>
    </>
  )
}


import './App.css';
import  Main  from "./My Component/Main";
import  Newuser from "./My Component/Newuser";
import  Login  from "./My Component/Login";
import Carlist from './My Component/Carlist';
// import Payment from './My Component/Payment';
import PaymentSample from './My Component/PaymentSample';
import Bookings from './My Component/Bookings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Newuser" element={<Newuser />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Carlist" element={<Carlist />} />
      {/* <Route path="/Payment" element={<Payment />} /> */}
      <Route path="/PaymentSample" element={<PaymentSample />} />
      <Route path="/Bookings" element={<Bookings />} />
    </Routes>
  </Router>
  );
}

export default App;

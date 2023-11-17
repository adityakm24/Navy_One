import React from 'react';
import Navbar from "./Navbar"; 

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div>
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" />
        </div>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="otp">OTP</label>
          <input type="text" id="otp" name="otp" placeholder="Enter OTP" />
        </div>
      </div>
    </div>
  );
};

export default Admin;

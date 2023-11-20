import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import styles from "../assets/styles/UserLogin.module.css";


const UserLogin = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    // Regex to allow only numbers
    const re = /^[0-9\b]+$/;

    // If value is not blank, then test the regex
    if (value === '' || re.test(value)) {
       setMobileNumber(value);
    }
  };

  const handleSendOtp = async () => {
    if (mobileNumber.length === 10) {
      try {
        console.log("success")
        const response = await fetch('/api/sendotp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ mobileNumber })
        });

        const data = await response.json();
        if (response.ok) {
          setOtpSent(true);
        } else {
          console.error('Error sending OTP:', data.error);
          setOtpError(data.error || 'Failed to send OTP');
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        setOtpError('Error sending OTP');
      }
    } else {
      setOtpError('Please enter a valid mobile number');
    }
  };

  const handleSubmitOtp = () => {
    if (otp.length === 0) {
      setOtpError('Please enter OTP for login');
    } else {
      // Logic to verify OTP goes here
      setOtpError('');
    }
  };

  return (
    <div className={styles.adminContainer}>
      <AdminNavbar />
      <div className={styles.formBox}>
        <h2 className={styles.formHeading}>User Login</h2>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="mobileNumber" className={styles.label}>Mobile Number</label>
            <div className={styles.mobileInputWrapper}>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter 10 digit registered mobile no."
                className={styles.inputField}
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                maxLength={10}
              />
              {mobileNumber.length === 10 && !otpSent && (
                <button onClick={handleSendOtp} className={styles.sendOtpButton}>Send OTP</button>
              )}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="otp" className={styles.label}>OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Enter OTP"
              className={styles.inputField}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6} // Assuming OTP is 6 digits
            />
            <button onClick={handleSubmitOtp} className={styles.submitOtpButton}>Login</button>
            {otpError && <p className={styles.error}>{otpError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import styles from "../assets/styles/UserLogin.module.css";
import { useRouter } from 'next/router'; // Import useRouter

const UserLogin = () => {
  const router = useRouter(); // Initialize useRouter
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(true);

  useEffect(() => {
    let interval;
    if (otpSent && !canResend) {
      interval = setInterval(() => {
        setTimer((t) => {
          if (t === 1) {
            setCanResend(true);
            clearInterval(interval);
            return 60; // Reset timer for next resend
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, canResend]);

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      setMobileNumber(value);
    }
  };

  const handleSendOtp = async () => {
    if (mobileNumber.length === 10) {
      try {
        const response = await fetch('/api/otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mobileNumber }),
        });

        const data = await response.json();
        if (response.ok) {
          setOtpSent(true);
          setCanResend(false);
        } else {
          setOtpError(data.error || 'Failed to send OTP');
        }
      } catch (error) {
        setOtpError('Error sending OTP');
      }
    } else {
      setOtpError('Please enter a valid mobile number');
    }
  };

  const handleResendOtp = async () => {
    setOtpError('');
    setOtp('');
    setOtpSent(false);
    await handleSendOtp();
  };

  const handleSubmitOtp = async () => {
    if (otp.length === 0) {
      setOtpError('Please enter OTP for login');
      return;
    }

    try {
      const response = await fetch('/api/otp', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push('/');
      } else {
        setOtpError(data.error || 'Error verifying OTP');
      }
    } catch (error) {
      setOtpError('Error verifying OTP');
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
                <button onClick={handleSendOtp} className={styles.sendOtpButton}>
                  Send OTP
                </button>
              )}
              {otpSent && !canResend && (
                <p className={styles.timer}>Resend in {timer} seconds</p>
              )}
              {canResend && otpSent && (
                <button onClick={handleResendOtp} className={styles.sendOtpButton}>
                  Resend OTP
                </button>
              )}
            </div>
          </div>
          {otpSent && (
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
                maxLength={6}
              />
              <button onClick={handleSubmitOtp} className={styles.submitOtpButton}>
                Login
              </button>
            </div>
          )}
          {otpError && <p className={styles.error}>{otpError}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

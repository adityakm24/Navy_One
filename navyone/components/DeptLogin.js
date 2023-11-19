import React, { useState } from 'react';
import DeptNavbar from './DeptNavbar';
import styles from "../assets/styles/DeptLogin.module.css";
import { Router, useRouter } from 'next/router';
const DeptLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const router= useRouter();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handleLogin = () => {
    // Simulate login logic for demonstration purposes
    if (username === 'admin' && password === 'admin') {
      setLoginError('');
      router.push('/depthome')
      // Redirect to the desired page after successful login
      // You can use the Next.js router or any other method for navigation
    } else {
      setLoginError('Invalid username or password');
    }
  };

  return (
    <div className={styles.adminContainer}>
      <DeptNavbar />
      <div className={styles.formBox}>
        <h2 className={styles.formHeading}>Department Login</h2>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className={styles.inputField}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div >
          <button onClick={handleLogin} type= {"submit"} className={styles.loginbutton}>Login</button>
          {loginError && <p className={styles.error}>{loginError}</p>}
        </div>
      </div>
    </div>
  );
};

export default DeptLogin;

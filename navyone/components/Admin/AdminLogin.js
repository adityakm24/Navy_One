import React, { useState } from 'react';
import DeptNavbar from '../Dept/DeptNavbar';
import styles from '../../assets/styles/Dept/DeptLogin.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login', { username, password });
      if (response.data.needsProfileCompletion) {
        router.push('/admin/complete-profile'); // Redirect to profile completion page
      } else {
        router.push('/depthome'); // Redirect to admin dashboard
      }
    } catch (error) {
      setLoginError(error.response?.data?.message || 'Invalid username or password');
    }
  };

  return (
    <div className={styles.adminContainer}>
      <DeptNavbar />
      <form className={styles.formBox} onSubmit={handleLogin}>
        <h2 className={styles.formHeading}>Admin Login</h2>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
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
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={styles.inputField}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          {loginError && <p className={styles.error}>{loginError}</p>}
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

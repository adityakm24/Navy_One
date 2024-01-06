import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '@/assets/styles/Admin/CompleteProfile.module.css'; 

const CompleteProfile = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      await axios.post('/api/admin/complete-profile', { email, phoneNumber });
      router.push('/admin/dashboard');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || 'An error occurred while updating your profile.');
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error: ' + error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Complete Your Profile</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <input 
          type="text" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          placeholder="Phone Number" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompleteProfile;

import { useState } from 'react';
import axios from 'axios';
import styles from '../../assets/styles/ComplaintForm.module.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function ComplaintForm() {
  const [formData, setFormData] = useState({
    description: '',
    photo_url: '',
    location: '',
    department_name: '',
    remarks: '',
  });
  
  const router = useRouter();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken'); 
    // Check if the access token is present
    if (!accessToken) {
      router.push('/user/userlogin'); // Redirect to the login page if not authenticated
    }

    // If you have additional checks or validation for the access token, add them here

  }, [router]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      status: 'Open',
    };
    try {
      const response = await axios.post('/api/complaints', dataToSubmit);
      console.log(response.data);
      alert('Complaint submitted successfully!');
      setFormData({
        description: '',
        photo_url: '',
        location: '',
        department_name: '',
        remarks: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form', error);
      alert('Failed to submit the complaint.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="description" className={styles.label}>Description</label>
        <textarea
          id="description"
          name="description"
          className={styles.textarea}
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formControl}>
        <label htmlFor="photo_url" className={styles.label}>Photo URL</label>
        <input
          type="text"
          id="photo_url"
          name="photo_url"
          className={styles.input}
          value={formData.photo_url}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formControl}>
        <label htmlFor="location" className={styles.label}>Location</label>
        <input
          type="text"
          id="location"
          name="location"
          className={styles.input}
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formControl}>
        <label htmlFor="department_name" className={styles.label}>Department Name</label>
        <input
          type="text"
          id="department_name"
          name="department_name"
          className={styles.input}
          value={formData.department_name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formControl}>
        <label htmlFor="remarks" className={styles.label}>Remarks</label>
        <input
          type="text"
          id="remarks"
          name="remarks"
          className={styles.input}
          value={formData.remarks}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formControl}>
        <button type="submit" className={styles.button}>Submit Complaint</button>
      </div>
    </form>
  );
}

export default ComplaintForm;

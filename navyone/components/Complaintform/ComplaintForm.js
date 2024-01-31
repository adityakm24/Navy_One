// Import the necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../assets/styles/ComplaintForm.module.css';
import { useRouter } from 'next/router';

function ComplaintForm() {
  const [formData, setFormData] = useState({
    subject: '', 
    description: '',
    photo_url: '',
    location: '',
    department_id: '',
  });

  const [departments, setDepartments] = useState([]); // State to store department data
  // const router = useRouter();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   // Check if the access token is present
  //   if (!accessToken) {
  //     router.push('/user/userlogin'); // Redirect to the login page if not authenticated
  //   }

  //   // Fetch departments when the component mounts
  //   fetchDepartments();
  // }, [router]);
  // Fetch departments from the API
  const fetchDepartments = async () => {
    try {
      const response = await axios.get('/api/department/department'); 
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments', error);
    }
  };
  fetchDepartments();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
        subject: '', 
        description: '',
        photo_url: '',
        location: '',
        department_id: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form', error);
      alert('Failed to submit the complaint.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={styles.input}
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

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
        <label htmlFor="department_id" className={styles.label}>Department</label>
        <select
          id="department_id"
          name="department_id"
          className={styles.select}
          value={formData.department_id}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {departments.map((department) => (
            <option key={department._id} value={department.department_id}>
              {`${department.department_name} - ${department.department_id}`}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formControl}>
        <button type="submit" className={styles.button}>Submit Complaint</button>
      </div>
    </form>
  );
}

export default ComplaintForm;

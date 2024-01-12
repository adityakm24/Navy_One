import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const UserDashboard = () => {
  const [photo, setPhoto] = useState(null); // for photo upload
  const [location, setLocation] = useState(''); // for location input
  const [remark, setRemark] = useState(''); // for remarks input
  const [department, setDepartment] = useState(''); // for department tagging
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken'); 
    // Check if the access token is present
    if (!accessToken) {
      router.push('/user/userlogin'); // Redirect to the login page if not authenticated
    }

    // If you have additional checks or validation for the access token, add them here

  }, [router]);
  

  // Handler for photo upload
  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  // Handler for adding location
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Handler for adding remarks
  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  // Handler for tagging departments
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  // Handler for registering a new complaint
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement submission logic here
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <form onSubmit={handleSubmit}>
        {/* Photo Upload */}
        <input type="file" onChange={handlePhotoChange} />
        
        {/* Location Input */}
        <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter location" />
        
        {/* Remark Input */}
        <textarea value={remark} onChange={handleRemarkChange} placeholder="Add a remark" />
        
        {/* Department Tagging */}
        <select value={department} onChange={handleDepartmentChange}>
          {/* Populate with options */}
          <option value="">Select a department</option>
          <option value="dept1">Department 1</option>
          <option value="dept2">Department 2</option>
          {/* ... other department options ... */}
        </select>
        
        {/* Submit Button */}
        <button type="submit">Register Complaint</button>
      </form>
    </div>
  );
};

export default UserDashboard;

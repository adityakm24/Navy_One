// pages/add-user.js

import React, { useState } from 'react';
import DepartmentSideNav from '@/components/DepartmentSideNav';
import AdminNavbar from '@/components/AdminNavbar';

const AddUser = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = () => {
    // Handle the logic for adding a user (e.g., sending data to a server)

    // For demonstration purposes, you can log the user details to the console
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  };

  return (
    <div>
        <DepartmentSideNav/>
        <AdminNavbar/>
      <h1>Add User</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;

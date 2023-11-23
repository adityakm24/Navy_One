// AddUser.js

import React, { useState } from "react";
import DepartmentSideNav from "@/components/Dept/DepartmentSideNav";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import styles from "@/assets/styles/Dept/DeptAddUser.module.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneNumberChange = (e) => {
    // Allow only numeric input
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);
    setPhoneError(""); // Clear phone number error when typing
  };

  const isValidPhoneNumber = (number) => {
    // Basic validation for a 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const handleAddUser = () => {
    // Validate phone number before submitting
    if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }

    // Handle the logic for adding a user (e.g., sending data to a server)

    // For demonstration purposes, you can log the user details to the console
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
  };

  return (
    <div>
      <DepartmentSideNav />
      <AdminNavbar />
      <div className={styles.centeredcontainer}>
        <h1>Add a User</h1>
        <div className={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.label}>
          Phone:
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={styles.input}
          />
          {phoneError && <p className={styles.error}>{phoneError}</p>}
        </div>
        <div className={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <p>*Leave password as blank to apply default password</p>
        <button onClick={handleAddUser} className={styles.button}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;

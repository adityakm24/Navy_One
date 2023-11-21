import { useState } from "react";

export default function Dashboard() {
  // State to store the different inputs
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState("");
  const [remarks, setRemarks] = useState("");
  const [department, setDepartment] = useState("");

  // Handlers for the different actions on the page
  const handlePhotoClick = () => {
    // Logic to handle photo clicking
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };

  const handleDepartmentTagging = (e) => {
    setDepartment(e.target.value);
  };

  const handleComplaintRegistration = () => {
    // Logic to handle complaint registration
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={handlePhotoClick}>Click Photo</button>
        <input
          type="text"
          placeholder="Add Location"
          value={location}
          onChange={handleLocationChange}
        />
        <textarea
          placeholder="Add Remarks"
          value={remarks}
          onChange={handleRemarksChange}
        ></textarea>
        <input
          type="text"
          placeholder="Tag Department"
          value={department}
          onChange={handleDepartmentTagging}
        />
      </div>
      <button onClick={handleComplaintRegistration}>Register Complaint</button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the stored email
    const userEmail = localStorage.getItem('userEmail');
    axios.get(`http://localhost:8001/staffList?user_email=${userEmail}`)
      .then(response => {
        if (response.data && response.data.length > 0) {
          // If user data is found, set it in state
          setUserData(response.data[0]);
        } else {
          console.log('User data not found');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to User profile</h1>
      {userData ? (
        <p>Welcome, {userData.user_name}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

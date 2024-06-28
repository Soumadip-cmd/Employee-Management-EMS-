import React, { useState } from 'react';
import './Payments.css';
import toast from 'react-hot-toast';

function Payments() {
  const [formData, setFormData] = useState({
    employeeId: '',
    amount: '',
    name: '',
    email: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5800/createSalaryPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (data.success) {
      setMessage(data.message);
      toast.success("Payment Created and Successfully sent to mail")
      toast.success(data.message)
      setIsError(false);
    } else {
      setMessage(data.message);
      setIsError(true);
      toast.error(data.message)
    }
  };

  return (
    <div className="container">
      <h1>Salary Payment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeId">Employee ID</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="amount">Amount (₹)</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Create Payment Order</button>
      </form>
      {message && (
        <div className={isError ? 'error' : 'message'}>{message}</div>
      )}
    </div>
  );
}

export default Payments;

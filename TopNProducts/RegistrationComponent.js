import React, { useState } from 'react';
import axios from 'axios';

const RegisterCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://20.244.56.144/products/register', {
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode
      });

      setResponseMessage(`Company registered successfully: ${response.data}`);
    } catch (error) {
      setResponseMessage(`Error registering company: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Register Company</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        </label>
        <label>
          Owner Name:
          <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required />
        </label>
        <label>
          Roll No:
          <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required />
        </label>
        <label>
          Owner Email:
          <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required />
        </label>
        <label>
          Access Code:
          <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default RegisterCompany;

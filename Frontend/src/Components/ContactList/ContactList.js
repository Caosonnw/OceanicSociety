import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import "./contactlist.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    // Gọi API để lấy danh sách liên hệ khi component được render
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/contact/getcontact');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);


  const openEmail = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className='table-contact'>
      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact._id}>
              <td style={{fontSize: '20px', fontWeight: "500"}}>{index + 1}</td>
              <td style={{fontSize: '20px', fontWeight: "500"}}>{contact.email}</td>
              <td style={{fontSize: '20px', fontWeight: "500"}}>{formatDate(contact.sentAt)}</td>
              <td>
                <button onClick={() => openEmail(contact.email)}>Open Email</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default ContactList;
import React, { useState } from 'react';

function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    // Send the form data to the server
    setTimeout(() => {
      setIsSending(false);
      // Redirect the user to the confirmation page
      window.location.href = '/contact/confirmation';
    }, 2000);
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required style={{ marginBottom: '1rem' }} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required style={{ marginBottom: '1rem' }} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required style={{ marginBottom: '1rem' }}></textarea>

      <button type="submit" style={{ display: 'block', marginTop: '1rem' }} onClick={handleSubmit}>
        {isSending? 'Sending...' : 'Send'}
      </button>
      {isSending && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <div style={{ width: '50px', height: '50px', backgroundColor: '#007bff', borderRadius: '50%', animation: 'pin 1s linear infinite' }}></div>
        </div>
      )}
    </form>
  );
}

export default ContactForm;


import React from 'react';
import { Button, TextField } from '@mui/material';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">Get in touch with us for any queries or support. We're here to help!</p>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <TextField
            id="name"
            placeholder="Your Name"
            variant="outlined"
            fullWidth
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <TextField
            id="email"
            type="email"
            placeholder="your@email.com"
            variant="outlined"
            fullWidth
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <TextField
            id="message"
            placeholder="Your message here..."
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>Email: info@gogoastay.com</p>
        <p>Phone: +91 1234567890</p>
        <p>Address: 123 Beach Road, Calangute, Goa 403516, India</p>
      </div>
    </div>
  );
}

export default Contact;



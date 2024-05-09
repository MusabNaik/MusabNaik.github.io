import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <p className="mt-3">
        You can reach out to me via email or connect with me on LinkedIn:
      </p>
      <ul className="list-group mt-3">
        <li className="list-group-item">Email: <a href="mailto:dataanalyst@example.com">dataanalyst@example.com</a></li>
        <li className="list-group-item">LinkedIn: <a href="https://www.linkedin.com/in/your-profile">linkedin.com/in/your-profile</a></li>
      </ul>
    </div>
  );
};

export default Contact;

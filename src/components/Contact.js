import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      <p className="mt-3">
        You can reach out to me via email or connect with me on LinkedIn:
      </p>
      <ul className="list-group mt-3">
        <li className="list-group-item">Email: <a href="mailto:musab944@gmail.com" target="_blank" rel="noopener noreferrer">musab944@gmail.com</a></li>
        <li className="list-group-item">LinkedIn: <a href="https://www.linkedin.com/in/Musab-Naik" target="_blank" rel="noopener noreferrer">linkedin.com/in/Musab-Naik</a></li>
        <li className="list-group-item">GitHub: <a href="https://github.com/MusabNaik" target="_blank" rel="noopener noreferrer">https://github.com/MusabNaik</a></li>
      </ul>
    </div>
  );
};

export default Contact;

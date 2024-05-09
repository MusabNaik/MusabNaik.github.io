import React from 'react';

const NotFound = () => {
  return (
    <div className="container mt-5">
      <h2>Page Not Found</h2>
      <p className="mt-3">
        Oops! The page you are looking for does not exist.
      </p>
      <p>
        <a href="/" className="btn btn-primary mt-3">Return to Home</a>
      </p>
    </div>
  );
};

export default NotFound;

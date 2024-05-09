import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to My Portfolio!</h1>
      <div className="row">
        <div className="col-md-6">
          <p>
            I am a Data Analyst with 2 years of professional experience. My expertise includes data manipulation,
            visualization, and deriving actionable insights from complex datasets.
          </p>
          <p>
            Feel free to explore my portfolio to learn more about my projects and certifications.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/400" alt="Profile" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Home;

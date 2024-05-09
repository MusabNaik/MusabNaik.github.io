import React from 'react';

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Data Visualization Dashboard for Sales Analysis</h5>
          <p className="card-text">
            This project involved creating interactive dashboards to visualize sales data and trends.
          </p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Customer Segmentation using Machine Learning</h5>
          <p className="card-text">
            Implemented machine learning models to segment customers based on behavior and demographics.
          </p>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Market Basket Analysis for Retail Recommendation</h5>
          <p className="card-text">
            Conducted market basket analysis to identify patterns and optimize product recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

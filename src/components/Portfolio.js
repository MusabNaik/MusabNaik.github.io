import React from 'react';

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="card">
        <div className="card-body">
          <a href='https://github.com/MusabNaik/Canada-Energy-Generation-Map-Streamlit' target="_blank" rel="noopener noreferrer">
          <h5 className="card-title">Interactive Map of Canadian Electricity Generation</h5>
          </a>
          <p className="card-text">
          This project aims to create an interactive map visualizing the sources of 
          electricity generation in each province of Canada. The map is built using 
          the Streamlit framework for creating web applications and the Plotly library 
          for interactive visualizations. Users can select different years, provinces, 
          and other filtering options to dynamically update the map and explore the data.
          <br></br>
          <br></br>
          The live deployed app hosted on Streamlit Community Cloud can be 
          found <a href='https://canada-energy-generation-map-app.streamlit.app/' target="_blank" rel="noopener noreferrer">here</a>
          <br></br>
          <br></br>
          Tableau dashboard version of this app can be 
          found <a href='https://public.tableau.com/app/profile/musab.naik/viz/ElectricityGenerationinCanada/Dashboard1/' target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <img src="https://raw.githubusercontent.com/MusabNaik/Canada-Energy-Generation-Map-Streamlit/main/screenshot.png" className="cert-image"/>
        </div>
      </div>
      <div className="card mt-3">
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

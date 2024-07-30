import React from 'react';

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="card">
        <div className="card-body">
          <a href='https://github.com/MusabNaik/TimHortons-WebScraping' target="_blank" rel="noopener noreferrer">
          <h5 className="card-title">Python Web Scraper - Tim Hortons Interactive Store Locator Map</h5>
          </a>
          <p className="card-text">
          This project uses Python to scrape the Tim Hortons website to gather detailed 
          information about each store, including addresses, dine-in and drive-thru hours, 
          and specific features such as Wi-Fi, Catering, Dine In, and Take Out availability. 
          The collected data is displayed on an interactive map that provides a user-friendly 
          experience, allowing users to zoom, scroll, and click on individual store locations 
          to view detailed information in a pop-up window.
          <br></br>
          <br></br>
          Check out the interactive map here <a href='https://musabnaik.com/TimHortons-WebScraping/' target="_blank" rel="noopener noreferrer">here</a>
          <br></br>
          </p>
          <img src="https://raw.githubusercontent.com/MusabNaik/TimHortons-WebScraping/main/images/Tim_Hortons_Map.png" alt="Streamlit App Screenshot" className="cert-image"/>
        </div>
      </div>
      <div className="card mt-3">
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
          <img src="https://raw.githubusercontent.com/MusabNaik/Canada-Energy-Generation-Map-Streamlit/main/screenshot.png" alt="Streamlit App Screenshot" className="cert-image"/>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <a href='https://github.com/MusabNaik/Encrypted-Drive' target="_blank" rel="noopener noreferrer">
          <h5 className="card-title">File Encryptor & Decryptor for Google Drive</h5>
          </a>
          <p className="card-text">
          This project aims to provide a secure way to encrypt and decrypt files before 
          uploading to users Google Drive. This is done using a web application built with React.
          Since there is no backend server involved, your unencrypted data and password never leave your machine.
          Users can select any file format, such as PDFs, Word documents, images, or text files, 
          and encrypt them with a password to ensure their data remains private. Similarly, users 
          can select previously encrypted files, enter the password, and decrypt the files, 
          which are then downloaded in their original format. This application uses the AES encryption 
          standard to ensure data security and integrity.
          <br></br>
          <br></br>
          Check out the fully functional version of this app deployed <a href='https://musabnaik.com/Encrypted-Drive/' target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <img src="https://raw.githubusercontent.com/MusabNaik/Encrypted-Drive/main/src/images/Encrypted%20Google%20Drive.png" alt="Streamlit App Screenshot" className="cert-image"/>
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

import React from 'react';
import pl300 from './images/PL-300.png'
import ai900 from './images/AI-900.png'
import GDA from './images/GDA.png'

const Certification = () => {
  return (
    <div className="container mt-5">
      <h2>Certifications</h2>
      <ul className="list-group mt-3">
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/MusabNaik/2ED09E3FEB316342?sharingId=4E3BF16DC2BBFC3F" target="_blank" rel="noopener noreferrer">
        <li className="list-group-item"><b> Microsoft Certified: Power BI Data Analyst Associate </b>
        <br></br>
        <br></br>
        <img
          src={pl300}
          alt="Example"
          style={{ width: '44em', height: 'auto' }}
          />
        </li>
        <br></br>
        </a>
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/MusabNaik/2EFBFE1D4FD868D0?sharingId=4E3BF16DC2BBFC3F" target="_blank" rel="noopener noreferrer">
        <li className="list-group-item"><b> Microsoft Certified: Azure AI Fundamentals </b>
        <br></br>
        <br></br>
        <img
          src={ai900}
          alt="Example"
          style={{ width: '44em', height: 'auto' }}
          />
        </li>
        <br></br>
        </a>
        <a href="https://www.coursera.org/account/accomplishments/professional-cert/H82NZ45H8QQ2" target="_blank" rel="noopener noreferrer">
        <li className="list-group-item"><b> Google Data Analytics Professional Certificate </b>
        <br></br>
        <br></br>
        <img
          src={GDA}
          alt="Example"
          style={{ width: '44em', height: 'auto' }}
          />
        </li>
        </a>
      </ul>
    </div>
  );
};

export default Certification;

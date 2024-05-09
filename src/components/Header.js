import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">My Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#000000' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" style={{ color: '#000000' }}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certification" style={{ color: '#000000' }}>Certification</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: '#000000' }}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

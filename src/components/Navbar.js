/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            News Glory
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Home">Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Home">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Finance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Travel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cars
                </a>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <button
              className="btn btn-outline-primary ms-2"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import "./Navbar.css";

const Navbar = () => {
  const divmaker = () => {
    console.log("Hello world");
  };
  return (
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="#page-top">
          <img
            src={window.location.origin + "assets/img/navbar-logo.svg"}
            alt="..."
          />
        </a>

        <Link to="/login" className="btn login--button">
          <span>
            <PersonIcon />
            Login
          </span>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ms-1"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">
                Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container-fluid py-3 bg-primary text-white">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <h4>WORKOUT</h4>
          <ul className="d-flex gap-4 list-unstyled m-0">
            <Link to="/" className="text-white text-decoration-none">
              Home
            </Link>
            <Link to="/about" className="text-white text-decoration-none">
              About
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

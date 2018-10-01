import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, handleSignOut }) => {
  console.log(handleSignOut);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Firebase Poc
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {!isAuthenticated ? (
            <React.Fragment>
              <li className="nav-item active">
                <Link to="/signin" className="nav-link" href="#">
                  Login <span className="sr-only" />
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="nav-link" href="#">
                  Sign up <span className="sr-only" />
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="nav-item">
                <Link to="/account" className="nav-link" href="#">
                  Account
                </Link>
              </li>

              <li className="nav-item">
                <a
                  to="#"
                  onClick={e => {
                    e.preventDefault();
                    handleSignOut();
                  }}
                  className="nav-link"
                  href="#"
                >
                  Logout
                </a>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };

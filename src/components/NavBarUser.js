import React from "react";

const NavBarUser = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="./index.html">
            <i className="fa fa-book px-1" aria-hidden="true" />
            Book Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="./addbook.html">
                  Add Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./booklist.html">
                  Book List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./userlist.html">
                  User List
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="./login.html">
                    <i className="fa fa-sign-in px-1" aria-hidden="true" />
                    Logout
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarUser;

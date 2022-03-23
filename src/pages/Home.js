import React from 'react'

const Home = () => {
  return (
    <div>
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="0#"><i className="fa fa-book px-1" aria-hidden="true" />Book Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
          <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./registration.html">
                  <i className="fa fa-user-plus px-1" aria-hidden="true" />Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./login.html"><i className="fa fa-sign-in px-1" aria-hidden="true" />Login</a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  </header>
  <section className="mt-5">
    <div className="container my-2">
      <div className="card text-white m-1 p-2">
        <div className="card-header">
          <h1 className="fs-1 fw-bold">Welcome to Book Store</h1>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-1">
            <p>
              Good friends, good books, and a sleepy concience:this is the
              ideal life.
            </p>
            <footer className="blockquote-footer text-secondary fw-bold muted py-1">
              Mark Twain
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Home
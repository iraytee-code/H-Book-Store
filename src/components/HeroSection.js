import React from "react";

const HeroSection = () => {
  return (
    <>
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
    </>
  );
};

export default HeroSection;

import React, { Fragment } from "react";
import { NavBar } from "../components";

const Register = () => {
  return (
    <Fragment>
      <NavBar />
      <section>
        <div className="row justify-content-center my-5">
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-user-plus px-1" aria-hidden="true" />
                Register
              </div>
              <div className="card-body">
                <form action>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i
                        className="fa fa-user-circle icon"
                        aria-hidden="true"
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="First Name"
                      aria-label="First Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i
                        className="fa fa-user-circle icon"
                        aria-hidden="true"
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Last Name"
                      aria-label="Last Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-user icon" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="User Name"
                      aria-label="User Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-lock icon" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-envelope icon" aria-hidden="true" />
                    </span>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i
                        className="fa fa-plus-square icon"
                        aria-hidden="true"
                      />
                    </span>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i
                        className="fa fa-address-card icon"
                        aria-hidden="true"
                      />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Address"
                      aria-label="Address"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="px-2">
                      <a className="btn btn-success" href="./dashboard.html">
                        <i className="fa fa-sign-in px-1" aria-hidden="true" />
                        Register
                      </a>
                    </div>
                    <div className="px-1">
                      <button className="btn btn-primary">
                        <i className="fa fa-undo" aria-hidden="true" />
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;

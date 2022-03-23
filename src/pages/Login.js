import React, {Fragment} from 'react'
import { NavBar } from '../components'

const Login = () => {
  return (
    <Fragment>
      <NavBar />
      <section>
        <div className="row justify-content-center my-5">
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-sign-in px-1" aria-hidden="true" />
                Login
              </div>
              <div className="card-body">
                <form action>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-envelope icon" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Email"
                      aria-label="Email"
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
                </form>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-success mx-1">
                  <i className="fa fa-sign-in px-1" aria-hidden="true" />
                  Login
                </button>
                <button type="button" className="btn btn-primary mx-1">
                  <i className="fa fa-undo " aria-hidden="true" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Login
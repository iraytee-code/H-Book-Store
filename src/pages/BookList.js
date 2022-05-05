import React, { Fragment } from "react";
import { NavBarUser } from "../components";

const BookList = () => {
  return (
    <Fragment>
      <NavBarUser />
      <section>
        <div className="container my-3 book-list">
          <div className="d-flex justify-content-between">
            <div className="my-3">
              <h1 className="text-white fs-6 fw-bold">
                <i className="fa fa-list" aria-hidden="true" />
                User Lists
              </h1>
            </div>
            <div className="input-group search-group my-3">
              <input
                type="search"
                className="form-control btn-outline-info"
                placeholder="Search"
                aria-label="search"
                aria-describedby="basic-addon2"
              />
              <i
                className="fa fa-search input-group-text btn-outline-info"
                id="basic-addon2"
                aria-hidden="true"
              />
              <i
                className="fa fa-times input-group-text btn-outline-danger"
                id="basic-addon2"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="mb-3">
            <table className="table table-dark table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">ISBN Number</th>
                  <th scope="col">Price</th>
                  <th scope="col">Language</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="d-flex">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundImage:
                          "url(https://source.unsplash.com/random/100x100/?nature)",
                      }}
                    />
                    <span className="mt-2">Spring in Action</span>
                  </th>
                  <td>Craig Walls</td>
                  <td>9023890000222289</td>
                  <td>630</td>
                  <td>English</td>
                  <td>Technology</td>
                  <td className="input-group">
                    <i
                      className="fa fa-pencil-square-o input-group-text btn-outline-primary"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                    <i
                      className="fa fa-trash-o input-group-text btn-outline-danger"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="d-flex">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundImage:
                          "url(https://source.unsplash.com/random/100x100/?nature)",
                      }}
                    />
                    <span className="mt-2">
                      Spring Microservices in action 3
                    </span>
                  </th>
                  <td>Craig Walls</td>
                  <td>9023890000222289</td>
                  <td>630</td>
                  <td>English</td>
                  <td>Technology</td>
                  <td className="input-group">
                    <i
                      className="fa fa-pencil-square-o input-group-text btn-outline-primary"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                    <i
                      className="fa fa-trash-o input-group-text btn-outline-danger"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="d-flex">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundImage:
                          "url(https://source.unsplash.com/random/100x100/?nature)",
                      }}
                    />
                    <span className="mt-2">
                      Spring Microservices in action 4
                    </span>
                  </th>
                  <td>Craig Walls</td>
                  <td>9023890000222289</td>
                  <td>630</td>
                  <td>English</td>
                  <td>Technology</td>
                  <td className="input-group">
                    <i
                      className="fa fa-pencil-square-o input-group-text btn-outline-primary"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                    <i
                      className="fa fa-trash-o input-group-text btn-outline-danger"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="d-flex">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundImage:
                          "url(https://source.unsplash.com/random/100x100/?nature)",
                      }}
                    />
                    <span className="mt-2">
                      Spring Microservices in action 5
                    </span>
                  </th>
                  <td>Craig Walls</td>
                  <td>9023890000222289</td>
                  <td>630</td>
                  <td>English</td>
                  <td>Technology</td>
                  <td className="input-group">
                    <i
                      className="fa fa-pencil-square-o input-group-text btn-outline-primary"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                    <i
                      className="fa fa-trash-o input-group-text btn-outline-danger"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="d-flex">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundImage:
                          "url(https://source.unsplash.com/random/100x100/?nature)",
                      }}
                    />
                    <span className="mt-2">
                      Spring Microservices in action 6
                    </span>
                  </th>
                  <td>Craig Walls</td>
                  <td>9023890000222289</td>
                  <td>630</td>
                  <td>English</td>
                  <td>Technology</td>
                  <td className="input-group">
                    <i
                      className="fa fa-pencil-square-o input-group-text btn-outline-primary"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                    <i
                      className="fa fa-trash-o input-group-text btn-outline-danger"
                      id="basic-addon2"
                      aria-hidden="true"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mb-3 d-flex justify-content-between">
              <p className="text-white">Showing Page 1 of 15</p>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#0" aria-label="Previous">
                      <span aria-hidden="true">«</span>Last
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#0" aria-label="Previous">
                      <span aria-hidden="true">«</span>Prev
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#0">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#0" aria-label="Next">
                      <span aria-hidden="true">»</span>Next
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#0" aria-label="Next">
                      <span aria-hidden="true">»</span>Last
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BookList;

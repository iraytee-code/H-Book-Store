import React, {Fragment} from 'react'
import { NavBarUser } from '../components'

const UserList = () => {
  return (
    <Fragment>
      <NavBarUser />
      <section>
        <div className="container my-3 book-list">
          <div className="my-3">
            <h1 className="text-white fs-6 fw-bold">
              <i className="fa fa-users" aria-hidden="true" />
              User Lists
            </h1>
          </div>
          <div className="mb-3">
            <table className="table table-dark table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Created</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Dwight Koeplin</th>
                  <td>DwightKoepline@emilie.name</td>
                  <td>9128 Conroy fork</td>
                  <td>january 10, 2017</td>
                  <td>$1,186.87</td>
                </tr>
                <tr>
                  <th scope="row">Henri Haley</th>
                  <td>HenriHaley@kacie.net</td>
                  <td>2411 Mohr court</td>
                  <td>february 1, 2021</td>
                  <td>$62.73</td>
                </tr>
                <tr>
                  <th scope="row">Torey Parisian</th>
                  <td>Ivorywolf04@gmail.com</td>
                  <td>7608 Hilbert Dale</td>
                  <td>October 29, 2015</td>
                  <td>$3,014.64</td>
                </tr>
                <tr>
                  <th scope="row">Earnestine Kertzmann</th>
                  <td>Earnestine.Kertzmann@dallin.com</td>
                  <td>8145 Nedara Mountains</td>
                  <td>October 12, 2011</td>
                  <td>$9,425.26</td>
                </tr>
                <tr>
                  <th scope="row">Jena Nader</th>
                  <td>Jena.Nader@nader.org/td&gt;</td>
                  <td>86116 Parisian</td>
                  <td>November 28, 2013</td>
                  <td>$1,609.58</td>
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
  )
}

export default UserList